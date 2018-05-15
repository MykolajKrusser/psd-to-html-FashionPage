import React, { Component } from 'react';
import Header from './Components/Header';
import Features from './Components/Features';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <section id="header" className="content-wr flex">
          <Header/>
          <Features/>
        </section>
      </div>
    );
  }
}

export default App;
