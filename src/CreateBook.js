import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import serializeForm from 'form-serialize';

class CreateBook extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true });

        if(this.props.onCreateBook){
            this.props.onCreateBook(values)
        }
    };   

    render() {
        return (
            <div className="container mt-4">
                <Link to="/" className="btn btn-secondary mb-4">
                    Close
                </Link>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="avatarURL" className="form-label">Upload Book Cover</label>
                        <ImageInput
                            className="form-control create-contact-avatar-input"
                            name="avatarURL"
                            maxHeight={64}
                        />
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <input type="text" name="title" className="form-control" placeholder="Title" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" name="author" className="form-control" placeholder="Author" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <input type="text" name="ISBN" className="form-control" placeholder="ISBN" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="publicationDate" className="form-label">Publication Date</label>
                        <input type="date" name="publicationDate" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add new Book</button>
                </form>
            </div>
        );
    }
}

export default CreateBook;
