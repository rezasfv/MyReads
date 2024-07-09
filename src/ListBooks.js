import React, { Component } from 'react';
import './ListBooks.css';
import PropTypes from 'prop-types';

class ListBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired
    }

    state = {
        query: ''
    }

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value
        });
    }

    render() {
        const { books } = this.props;
        const { query } = this.state;

        // Filter books based on query
        const filteredBooks = query === ''
            ?books
            :books.filter(book =>
                book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.author.toLowerCase().includes(query.toLowerCase()) ||
                book.isbn.toLowerCase().includes(query.toLowerCase())
        );

        return (
            <div className="container">
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

                {/* Book list */}
                <div className="row">
                    {filteredBooks.map((book) => (
                        <div key={book.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
                            <div className="card h-100">
                                <img src={book.coverURL} alt={`${book.title} cover`} className="card-img-top book-cover" />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text"><strong>Author:</strong> {book.author}</p>
                                    <p className="card-text"><strong>ISBN:</strong> {book.isbn}</p>
                                    <p className="card-text"><strong>Publication Date:</strong> {book.publicationDate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListBooks;
