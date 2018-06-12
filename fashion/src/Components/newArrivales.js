import React, { Component } from 'react';
import './Newarrivales.css';
import data from '../database/NewProducts';

class Newarrivales extends Component {
  constructor(){
    super();
    this.state = {
        products: []
    }
  }
  getProd(){
    this.setState({products: data})
  }
  componentWillMount(){
    this.getProd()
  }
  componentDidMount(){
    this.getProd()
  }
  render() {
    console.log(this.state.products)
    return (
      <section id="newArrivels_prod" className="content-wr flex">
          <div className="newArrivales_prod col"></div>
          <div className="newArrivales_prod col"></div>
          <div className="newArrivales_prod col"></div>
          <div className="newArrivales_prod col"></div>
          <div className="newArrivales_prod col"></div>
          <div className="newArrivales_prod col"></div>
      </section>
    );
  }
}

export default Newarrivales;