import React, { Component } from 'react';

class Book extends Component {
  // temp, to help with implementing select functionallity
  doSomething() {
    console.log('exactly')
  }

  render() {
    return (
      <div className='book'>
        <div className='book-top'>
          <img src={ this.props.book.img } alt="book" />
          <div className='book-shelf-changer'>
            <select onChange={ this.doSomething() }>
              <option value='none' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <h4 className="book-title">{ this.props.book.title }</h4>
        <p className="book-authors">{ this.props.book.authors }</p>
      </div>
    )
  }
}

export default Book;
