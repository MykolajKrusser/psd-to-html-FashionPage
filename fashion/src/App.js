import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="content-wr flex">
        <header className="header flex">
          <div className="logo">W/Fashion</div>
          <nav className="nav flex">
            <a href="#">New</a>
            <a href="#">Sale</a>
            <a href="#">My Cart</a>
            <a href="#">Login/Register</a>
          </nav>
        </header>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    );
  }
}

export default App;
