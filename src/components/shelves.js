import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Shelves extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if(this.refs.hamburger.classList.value.indexOf('open') === -1) {
      this.refs.hamburger.classList += ' open';
      this.refs.shelves.style.display = 'block';
    } else {
      this.refs.hamburger.classList.value = this.refs.hamburger.classList.value.replace(' open', '');
      this.refs.shelves.style.display = 'none';
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
        <ul className='shelves' ref='shelves'>
          { this.props.shelves.map((shelf, index) => {
            return (
              <li
                className={'shelf' + ( shelf.value === this.props.selectedShelf ? ' selected' : '' )}
                key={ `shelf_${ index }` }
                onClick={ () => this.props.onSelect(shelf.value) }>{ shelf.name }</li>
            )
          }) }
          <Link
            to='/search'
            className="shelf">Find more books</Link>
        </ul>
      </nav>
    );
  }
}

export default Shelves;
