import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <section id="header" className="content-wr flex">
        <Header/>
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
