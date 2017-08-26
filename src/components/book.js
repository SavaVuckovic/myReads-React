import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.options = this.props.shelves;
    this.selected = this.selected.bind(this);
  }

  selected() {
    let select = this.refs.select;
    this.props.onSelectChange(this.props.book, select.options[select.selectedIndex].value);
  }

  render() {
    return (
      <div className='book'>
        <div className='book-top'>
          <img src={ this.props.book.imageLinks.smallThumbnail } alt="book" />
          <div className='book-shelf-changer'>
            <select
              ref='select'
              value={ this.props.book.shelf }
              onChange={ this.selected }>
              <option value='none' disabled>Move to...</option>
              { this.options.map((option, index) => (
                <option key={ `option_${ index }` } value={ option.value } >{ option.name }</option>
              )) }
              <option value='None'>None</option>
            </select>
          </div>
        </div>
        <h4 className="book-title">{ this.props.book.title }</h4>
        <p className="book-authors">{ this.props.book.authors }</p>
      </div>
    );
  }
}

export default Book;
