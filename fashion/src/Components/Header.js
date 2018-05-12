import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="header flex content-wr">
          <div className="menuBtn">a</div>
          <div className="logo">W/Fashion</div>
          <nav className="nav flex">
            <a href="#">New</a>
            <a href="#">Sale</a>
            <a href="#">My Cart</a>
            <a href="#">Login/Register</a>
          </nav>
        </header>
    );
  }
}

export default Header;