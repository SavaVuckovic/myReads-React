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

    this.displaySearchBooks = this.displaySearchBooks.bind(this);
  }

  componentDidMount() {
    this.setState({
      selectedCategory: this.state.categories[0]
    })
  }

  displaySearchBooks(books) {
    books.then((result) => {
      if (!result.error) {
        let searchBooks = result.map((book) => {
          return {
            title: book.title,
            authors: book.authors,
            img: book.imageLinks.smallThumbnail,
            category: null
          }
        })

        this.setState({
          searchBooks
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
              selectedCategory={ this.state.selectedCategory }
              onCategorySelect={ category => this.setState({ selectedCategory: category }) } />
            <BookList
              books={ this.state.myBooks }
              category={ this.state.selectedCategory }
              onSelectChange={ book => {
                this.setState((prevState) => ({
                  myBooks: prevState.myBooks.push(book)
                }))
              } } />
          </div>
        )} />

        <Route path='/search' render = { ({ history }) => (
          <div className="container search-container">
            <SearchBar
              searchForBooks={ this.displaySearchBooks }/>
            <BookList
              books={ this.state.searchBooks }
              onSelectChange={ book => {
                this.setState((prevState) => ({
                  myBooks: prevState.myBooks.push(book)
                }))
              } } />
          </div>
        )} />

      </div>
    );
  }
}

export default App;
