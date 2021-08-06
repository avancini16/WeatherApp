import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className='navbar'>

    <div className="info">
        <Link to='/'>
          <span className="info">
          Weather App
        </span>
        </Link>
        <span>|</span>
        <Link to = '/about'>
        <span className="info">About</span>
        </Link>
      </div>

        <SearchBar
          onSearch={onSearch}
        />

    </nav>
  );
};

export default Nav;
