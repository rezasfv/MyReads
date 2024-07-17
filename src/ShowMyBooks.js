import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShowMyBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        savedBooks: PropTypes.array.isRequired,
        onRemoveBook: PropTypes.func.isRequired
    }

    render() {
        const { books, savedBooks, onRemoveBook } = this.props;
        const myBooks = books.filter(book => savedBooks.includes(book.id));

        return (
            <div className="container">

                <Link to="/" className="btn btn-secondary mb-4">
                    Go back
                </Link>

                <h2>My Saved Books</h2>
                <div className="row">
                    {myBooks.map((book) => (
                        <div key={book.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
                            <div className="card h-100 position-relative">
                                <img src={book.coverURL} alt={`${book.title} cover`} className="card-img-top book-cover" />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text"><strong>Author:</strong> {book.author}</p>
                                    <p className="card-text"><strong>ISBN:</strong> {book.isbn}</p>
                                    <p className="card-text"><strong>Publication Date:</strong> {book.publicationDate}</p>
                                    <button 
                                        className="btn btn-outline-danger position-absolute top-0 end-0 m-2"
                                        onClick={() => onRemoveBook(book.id)}
                                    >
                                        <i className="fas fa-trash-alt"></i> Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ShowMyBooks;
