import React, { Component } from 'react';
import Header from './Components/Header';
import Features from './Components/Features';
import newArrivales from './Components/newArrivales';
import moreProdacts from './Components/moreProdacts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <section id="header" className="content-wr flex">
          <Header/>
          <Features/>
        </section>
        <section id="newArrivals">
          <newArrivales/>
          <moreProdacts/>
        </section>
      </div>
    );
  }
}

export default App;
