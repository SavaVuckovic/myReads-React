import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className='book'>
        <div className='book-top'>
          <img src={ this.props.book.imageLinks.smallThumbnail } alt="smth" />
          <div className='book-shelf-changer'>
            <select>
              <option value='none' disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <h3 className="book-title">{ this.props.book.title }</h3>
        <p className="book-authors">J.R.R. Tolkien</p>
      </div>
    )
  }
}

export default Book;
