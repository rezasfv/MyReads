import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ListBooks from './ListBooks';
import CreateBook from './CreateBook';
import ShowMyBooks from './ShowMyBooks.js';
import { Routes, Route } from 'react-router-dom';

class App extends Component {
  state = {
    books: [],
    savedBooks: []
  };

  componentDidMount() {
    fetch('/books.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data });
      })
      .catch(error => console.error('Error fetching the books:', error));
  }

  handleSaveBook = (bookId) => {
    this.setState((prevState) => ({
      savedBooks: [...prevState.savedBooks, bookId]
    }));
  }

  handleRemoveBook = (bookId) => {
    this.setState((prevState) => ({
      savedBooks: prevState.savedBooks.filter(id => id !== bookId)
    }));
  }

  render() {
    return (
      <div className="container">
        <Routes>
          <Route path='/' element={<ListBooks books={this.state.books} onSaveBook={this.handleSaveBook} savedBooks={this.state.savedBooks} />} />
          <Route path='/create' element={<CreateBook />} />
          <Route path='/mybooks' element={<ShowMyBooks books={this.state.books} savedBooks={this.state.savedBooks} onRemoveBook={this.handleRemoveBook} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
