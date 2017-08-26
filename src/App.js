import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { update, getAll } from './BooksAPI';
import './App.css';
import Shelves from './components/shelves';
import BookList from './components/booklist';
import SearchBar from './components/searchbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedShelf: '',
      searchPageBooks: [],
      myBooks: []
    };
    this.shelves = [
      {
        value: 'currentlyReading',
        name: 'Currently reading'
      },
      {
        value: 'wantToRead',
        name: 'Want to read'
      },
      {
        value: 'read',
        name: 'Read'
      }
    ];

    this.displaySearchBooks = this.displaySearchBooks.bind(this);
    this.moveBookToShelf = this.moveBookToShelf.bind(this);
  }

  componentWillMount() {
    getAll().then((result) => {
      if (!result.error) {
        let myBooks = result.map((book) => {
          return book;
        });
        this.setState({
          myBooks,
          selectedShelf: this.shelves[0].value
        });
      }
    })
  }

  displaySearchBooks(books) {
    books.then((result) => {
      if (!result.error) {
        let searchPageBooks = result.map((book) => {
          for(let b of this.state.myBooks) {
            if(b.id === book.id) {
              book.shelf = b.shelf;
            }
          }
          return book;
        });
        this.setState({searchPageBooks});
      } else {
        this.setState({searchPageBooks: 'none'});
      }
    })
  }

  displayBooksFromShelf() {
    let books = this.state.myBooks.filter((book) => {
      return book.shelf === this.state.selectedShelf;
    });
    return books;
  }

  moveBookToShelf(book, shelf) {
    update(book, shelf).then((data) => {
      this.setState((prevState) => {
        let newBooks = prevState.myBooks.filter((b) => {
          return b.id !== book.id
        });
        book.shelf = shelf;
        newBooks.push(book);
        return {myBooks: newBooks};
      });
    });
  }

  render() {
    return (
      <div className="App">

        <Route exact path='/' render = { () => (
          <div className="container">
            <Shelves
              shelves={ this.shelves }
              selectedShelf={ this.state.selectedShelf }
              onSelect={ shelf => this.setState({ selectedShelf: shelf }) } />
            <BookList
              shelves={ this.shelves }
              books={ this.displayBooksFromShelf() }
              onSelectChange={ this.moveBookToShelf } />
          </div>
        )} />

        <Route path='/search' render = { ({ history }) => (
          <div className="container search-container">
            <SearchBar
              searchForBooks={ this.displaySearchBooks }/>
            <BookList
              shelves={ this.shelves }
              books={ this.state.searchPageBooks }
              onSelectChange={ this.moveBookToShelf } />
          </div>
        )} />

      </div>
    );
  }
}

export default App;
