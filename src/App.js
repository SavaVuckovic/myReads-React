import React, { Component } from 'react';
import './App.css';
import Categories from './components/categories';
import BookList from './components/booklist';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      categories: ['Currently reading', 'Want to read', 'Read']
    }
  }

  render() {
    return (
      <div className="container">
        <Categories categories={ this.state.categories } />
        <BookList books={ this.state.books } />
      </div>
    );
  }
}

export default App;
