import React from 'react';

const BookList = (props) => {
  const books = props.books;
  const category = props.category;


  if(books.length === 0) {
    return (
      <main className='all-books'>
        <div className='find-books'>
          <p>Currently you have no books saved.
          You can find books you are interested in if you follow this <a href="search">link</a>.</p>
        </div>
      </main>
    )
  }

  return (
    <main className='all-books'>
      Booklist
    </main>
  )
}

export default BookList;
