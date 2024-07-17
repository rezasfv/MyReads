import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import ListBooks from './ListBooks';
import CreateBook from './CreateBook';
import { Routes, Route } from 'react-router-dom';

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    fetch('/books.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ books: data });
      })
      .catch(error => console.error('Error fetching the books:', error));
  }


  render() {
    return (
      <div className="container">
        <Routes>
          <Route path='/' element={<ListBooks books={this.state.books} />} />
          <Route path='/create' element={<CreateBook />} />
        </Routes>
      </div>
    );
  }
}

export default App;
