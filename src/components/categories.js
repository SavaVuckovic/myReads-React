import React, { Component } from 'react';

class Categories extends Component {

  renderCategories(categories) {
    return categories.map((category, index) => {
      return (<li className='category' key={ `category_${ index }` }>{ category }</li>)
    })
  }

  render() {
    console.log(this.props.categories)
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
        </ul>
      </nav>
    );
  }
}

export default Categories;
