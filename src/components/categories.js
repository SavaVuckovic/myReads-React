import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if(this.refs.hamburger.classList.value.indexOf('open') === -1) {
      this.refs.hamburger.classList += ' open';
      this.refs.categories.style.display = 'block';
    } else {
      this.refs.hamburger.classList.value = this.refs.hamburger.classList.value.replace(' open', '');
      this.refs.categories.style.display = 'none';
    }
  }

  render() {
    return (
      <nav className='navigation'>
        <h1 className='brand'>MyReads</h1>
        <div
          className='hamburger-icon'
          ref='hamburger'
          onClick={ this.toggle  }>
          <span /><span /><span />
        </div>
        <div className='clearfix' />
        <ul className='categories' ref='categories'>
          { this.props.categories.map((category, index) => {
            return (
              <li
                className={'category' + ( category === this.props.selectedCategory ? ' selected' : '' )}
                key={ `category_${ index }` }
                onClick={ () => this.props.onCategorySelect(category) }>{ category }</li>
            )
          }) }
          <Link
            to='/search'
            className="category">Find more books</Link>
        </ul>
      </nav>
    );
  }
}

export default Categories;
