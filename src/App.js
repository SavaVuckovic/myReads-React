import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Categories from './components/categories';
import BookList from './components/booklist';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      categories: ['Currently reading', 'Want to read', 'Read'],
      selectedCategory: ''
    }
  }

  componentDidMount() {
    this.setState({
      selectedCategory: this.state.categories[0]
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
              books={ this.state.books }
              category={ this.state.selectedCategory } />
          </div>
        )} />

        <Route path='/' render = { ({ history }) => (
          <div className="container">
            Search
          </div>
        )} />

      </div>
    );
  }
}

export default App;
