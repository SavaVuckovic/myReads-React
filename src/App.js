import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Categories from './components/categories';
import BookList from './components/booklist';
import SearchBar from './components/searchbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myBooks: [],
      searchBooks: [],
      categories: ['Currently reading', 'Want to read', 'Read'],
      selectedCategory: ''
    }
  }

  componentDidMount() {
    this.setState({
      selectedCategory: this.state.categories[0]
    })
  }

  displaySearchBooks = (books) => {
    books.then((result) => {
      if (!result.error) {
        this.setState({
          searchBooks: result
        })
      } else {
        this.setState({
          searchBooks: 'none'
        })
      }
    })
  }

  render() {
    return (
      <div className="App">

        <Route exact path='/' render = { () => (
          <div className="container">
            <Categories
              categories={ this.state.categories }
              onCategorySelect={ category => this.setState({ selectedCategory: category }) } />
            <BookList
              books={ this.state.myBooks }
              category={ this.state.selectedCategory } />
          </div>
        )} />

        <Route path='/search' render = { ({ history }) => (
          <div className="container search-container">
            <SearchBar
              searchForBooks={ this.displaySearchBooks }/>
            <BookList books={ this.state.searchBooks } />
          </div>
        )} />

      </div>
    );
  }
}

export default App;
