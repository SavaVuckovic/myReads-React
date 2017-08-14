import React from 'react';
import Book from './book';

const BookList = (props) => {
  const books = props.books;
  const category = props.category; // implement

  /*
  if(books.length === 0) {
    return (
      <main className='all-books'>
        <div className='find-books'>
          <p>Currently you have no books saved.
          You can find books you are interested in if you follow this <a href="search">link</a>.</p>
        </div>
      </main>
    )
  }*/

  return (
    <main className='all-books'>
      { books.map((book) => {
        return (<Book key={ book.title } book={ book } />)
      }) }
    </main>
  )
}

export default BookList;
