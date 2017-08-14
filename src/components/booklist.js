import React from 'react';
import Book from './book';

const BookList = (props) => {
  const books = props.books;
  const category = props.category;


  if(books === 'none') {
    return (
      <main className='all-books'>
        <div className='no-results'>
          <p>Our databse has 0 books that match your search term. The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in
          <a target='_blank' href='https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md'> here</a></p>
        </div>
      </main>
    )
  }

  if(category) {
    { books.filter((book) => {
      //return (<Book key={ `book_${ index }` } book={ book } />)
      return book.category === category;
    }) }
  }

  return (
    <main className='all-books'>
      { console.log(category) }
      { books.map((book, index) => {
        return (<Book key={ `book_${ index }` } book={ book } />)
      }) }
    </main>
  )
}

export default BookList;
