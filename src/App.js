import React, { Component } from 'react';
import ListBooks from './ListBooks';


const books = [
  {
    "id": "book1",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "isbn": "978-0-06-112008-4",
    "coverURL": "http://localhost:5001/1.jpg",
    "publicationDate": "1960-07-11"
  },
  {
    "id": "book2",
    "title": "1984",
    "author": "George Orwell",
    "isbn": "978-0-452-28423-4",
    "coverURL": "http://localhost:5001/2.jpg",
    "publicationDate": "1949-06-08"
  },
  {
    "id": "book3",
    "title": "Moby Dick",
    "author": "Herman Melville",
    "isbn": "978-0-14-243724-7",
    "coverURL": "http://localhost:5001/3.jpg",
    "publicationDate": "1851-10-18"
  },
  {
    "id": "book4",
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "isbn": "978-0-19-953556-9",
    "coverURL": "http://localhost:5001/4.jpg",
    "publicationDate": "1813-01-28"
  },
  {
    "id": "book5",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0-7432-7356-5",
    "coverURL": "http://localhost:5001/5.jpg",
    "publicationDate": "1925-04-10"
  },
  {
    "id": "book6",
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "isbn": "978-0-14-303999-0",
    "coverURL": "http://localhost:5001/6.jpg",
    "publicationDate": "1869-01-01"
  },
  {
    "id": "book7",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "isbn": "978-0-316-76948-0",
    "coverURL": "http://localhost:5001/7.jpg",
    "publicationDate": "1951-07-16"
  }
];




class App extends Component {

  
  render(){
    return(
      <div>
        <ListBooks books={books}/>
      </div>
    )
  }
}

export default App;
