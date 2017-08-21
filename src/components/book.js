import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.book.category
    };
    this.options = [
      'CurrentlyReading',
      'Want to Read',
      'Read',
      'None'
    ];
  }

  render() {
    return (
      <div className='book'>
        <div>TEST: { this.state.category }</div>
        <div className='book-top'>
          <img src={ this.props.book.img } alt="book" />
          <div className='book-shelf-changer'>
            <select
              name='category-select'
              id='category-select'
              ref='select'
              onChange={ () => {
                let select = this.refs.select;
                this.props.onSelectChange({
                  title: this.props.book.title,
                  authors: this.props.book.authors,
                  img: this.props.book.img,
                  category: select.options[select.selectedIndex].value
                })
                this.setState({
                  category: select.options[select.selectedIndex].value
                })
              } }>
              <option value='none' disabled>Move to...</option>
              { this.options.map((option, index) => (
                <option key={ `option_${ index }` } value={ option }>{ option }</option>
              )) }
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

/*
onChange={ () => {
  let select = this.refs.select;
  this.setState({
    category: select.options[select.selectedIndex].value
  })
} }>
*/
