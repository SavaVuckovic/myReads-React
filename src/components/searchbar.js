import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAll, search } from '../BooksAPI';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.props.searchForBooks(getAll())
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    console.log(search(this.state.term, 10))
    this.props.searchForBooks(search(this.state.term, 10))
    this.setState({
      term: ''
    })
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } className="search">
        <Link to='/' className='back' >Your Books</Link>
        <input
          type="text"
          placeholder="Search for more books..."
          value={ this.state.term }
          onChange={ this.onInputChange }/>
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default SearchBar
