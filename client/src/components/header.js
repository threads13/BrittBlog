import React from 'react';
import Shop from './shop';
import Email from './email';
import Categories from './categories';
import Sandwich from './sandwich';
import Search from './search';
import './header.css';

const Header = () => {
  return(
    <div className="header">
      <div className="topBar">
        <Email  />
        <span className="title">The Pallete Collector</span>
        <Shop />
      </div>
      <nav className="bottomBar">
        <Sandwich />
        <Categories />
        <Search />
      </nav>
    </div>

  );
}

export default Header;
