import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ListBooks from './ListBooks';

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
        <ListBooks books={this.state.books} />
      </div>
    );
  }
}

export default App;
