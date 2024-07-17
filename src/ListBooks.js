import React, { Component } from 'react';
import './ListBooks.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onSaveBook: PropTypes.func.isRequired,
        savedBooks: PropTypes.array.isRequired
    }

    state = {
        query: ''
    }

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value
        });
    }

    clearQuery = () => {
        this.setState({
            query: ''
        });
    }

    render() {
        const { books, onSaveBook, savedBooks } = this.props;
        const { query } = this.state;

        // Filter books based on query
        const filteredBooks = query === ''
            ? books
            : books.filter(book =>
                book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.author.toLowerCase().includes(query.toLowerCase()) ||
                book.isbn.toLowerCase().includes(query.toLowerCase())
            );

        return (
            <div className="container">
                <div className="menu">  
                    <Link
                     to='/create'
                     className='btn btn-primary mb-4'
                    >Add new book</Link>
                    <Link
                     to='/mybooks'
                     className='btn btn-secondary mb-4 ms-2'
                    >Show My Books</Link>
                </div>

                {/* Search bar */}
                <div className="row my-4">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search books..."
                            value={query}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                
                {/* Status message and clear button */}
                {query !== '' && (
                    <div className="row mb-4">
                        <div className="col d-flex align-items-center">
                            <span className="me-3">Now showing {filteredBooks.length} out of {books.length}</span>
                            <button className="btn btn-primary" onClick={this.clearQuery}>Show all the Books</button>
                        </div>
                    </div>
                )}

                {/* Book list */}
                <div className="row">
                    {filteredBooks.map((book) => (
                        <div key={book.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
                            <div className="card h-100 position-relative">
                                <img src={book.coverURL} alt={`${book.title} cover`} className="card-img-top book-cover" />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text"><strong>Author:</strong> {book.author}</p>
                                    <p className="card-text"><strong>ISBN:</strong> {book.isbn}</p>
                                    <p className="card-text"><strong>Publication Date:</strong> {book.publicationDate}</p>
                                </div>
                                <button 
                                    className={`btn btn-outline-light position-absolute top-0 end-0 m-2 ${savedBooks.includes(book.id) ? 'active' : ''}`}
                                    onClick={() => onSaveBook(book.id)}
                                >
                                    <i className="fas fa-bookmark"></i> Save
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListBooks;
