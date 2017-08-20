import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {
  renderCategories(categories) {
    return categories.map((category, index) => {
      return (
        <li
          className={'category' + ( category === this.props.selectedCategory ? ' selected' : '' )}
          key={ `category_${ index }` }
          onClick={ () => this.props.onCategorySelect(category) }>{ category }</li>
      )
    })
  }

  render() {
    return (
      <nav className='navigation'>
        <h1 className='brand'>MyReads</h1>
        <div className='hamburger-icon'>
          <span />
          <span />
          <span />
        </div>
        <div className='clearfix' />
        <ul className='categories'>
          { this.renderCategories(this.props.categories) }
          <Link
            to='/search'
            className="category">Find more books</Link>
        </ul>
      </nav>
    );
  }
}

export default Categories;
