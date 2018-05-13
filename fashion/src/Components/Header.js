import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="header flex">
          <div className="menuBtns">
            <div className="menuBtnsWrapper flex">
              <a href="#" className="menuBtn"></a>
              <a href="#" className="menuBtn menuBtnActive"></a>
              <a href="#" className="menuBtn"></a>
              <a href="#" className="menuBtn"></a>
              <a href="#" className="menuBtn"></a>
            </div>
          </div>
          <div className="logo">W/Fashion</div>
          <nav className="nav flex">
            <a href="#">New</a>
            <a href="#">Sale</a>
            <a href="#"><span className="myCards">2</span> My Cart</a>
            <a href="#">Login/Register</a>
          </nav>
        </header>
    );
  }
}

export default Header;