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
    const background = {

    }
    const NewProductsList = this.state.products.map(()=>{
      return <NewProduct
      style={background}
      key={this.state.products.id} 
      title={this.state.products.title}
      cost={this.state.products.cost}/>
    })
    return (
      <section id="newArrivels_prod" className="content-wr flex">
        {NewProductsList}
      </section>
    );
  }
}

export default Newarrivales;