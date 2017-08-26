import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Categories from './components/categories';
import BookList from './components/booklist';
import SearchBar from './components/searchbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['Currently reading', 'Want to read', 'Read'],
      selectedCategory: '',
      searchPageBooks: [],
      shelves: {}
    }

    this.displaySearchBooks = this.displaySearchBooks.bind(this);
    this.moveBookToShelf = this.moveBookToShelf.bind(this);
  }

  componentWillMount() {
    this.setState({
      selectedCategory: this.state.categories[0],
      shelves: this.state.categories.map((category) => {
        return {
          category,
          books: []
        }
      })
    });
  }

  displaySearchBooks(books) {
    books.then((result) => {
      if (!result.error) {
        let searchPageBooks = result.map((book) => {
          return {
            title: book.title,
            authors: book.authors,
            img: book.imageLinks.smallThumbnail,
            category: null ////// check if a book already exists in a shelf //////
          }
        });
        this.setState({searchPageBooks});
      } else {
        this.setState({searchPageBooks: 'none'});
      }
    })
  }

  moveBookToShelf(book) {
    console.log(book);
    console.log('book should be moved');
  }

  displayBooksFromShelf() {
    let shelf = this.state.shelves.filter((shelf) => {
      return shelf.category === this.state.selectedCategory
    });
    return shelf[0].books;
  }

  render() {
    return (
      <div className="App">

        <Route exact path='/' render = { () => (
          <div className="container">
            <Categories
              categories={ this.state.categories }
              selectedCategory={ this.state.selectedCategory }
              onCategorySelect={ category => this.setState({ selectedCategory: category }) } />
            <BookList
              books={ this.displayBooksFromShelf() }
              onSelectChange={ this.moveBookToShelf } />
          </div>
        )} />

        <Route path='/search' render = { ({ history }) => (
          <div className="container search-container">
            <SearchBar
              searchForBooks={ this.displaySearchBooks }/>
            <BookList
              books={ this.state.searchPageBooks }
              onSelectChange={ this.moveBookToShelf } />
          </div>
        )} />

      </div>
    );
  }
}

export default App;
