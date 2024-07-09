import React, { Component } from 'react';
import './ListBooks.css';

class ListBooks extends Component {
  render() {
    return (
      <div>
        <ol className='book-list'>
          {this.props.books.map((book) => (
            <li key={book.id} className='book-item'>
              <img src={book.coverURL} alt={`${book.title} cover`} className='book-cover' />
              <h2 className='book-title'>{book.title}</h2>
              <p className='book-details'><strong>Author:</strong> {book.author}</p>
              <p className='book-details'><strong>ISBN:</strong> {book.isbn}</p>
              <p className='book-details'><strong>Publication Date:</strong> {book.publicationDate}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListBooks;
