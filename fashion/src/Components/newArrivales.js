import React, { Component } from 'react';
import NewProduct from './NewProduct/NewProduct';
import './Newarrivales.css';
import NewProducts from '../database/NewProducts';

class Newarrivales extends Component {
  constructor(){
    super();
    this.state = {
        products: []
    }
  }
  getProd(){
    this.setState({products: NewProducts})
  }
  componentWillMount(){
    this.getProd()
  }
  componentDidMount(){
    this.getProd()
  }
  render() {
    return (
      <section id="newArrivels_prod" className="content-wr flex">
        <NewProduct/>
      </section>
    );
  }
}

export default Newarrivales;