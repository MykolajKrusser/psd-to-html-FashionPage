import React, { Component } from 'react';
import NewProduct from './NewProduct/NewProduct';
import './Newarrivales.css';
import NewProducts from '../database/NewProducts';


class Newarrivales extends Component {
  constructor(props){
    super(props)
    this.state = {
        products: [],
        test: [
          {a:1},
          {a:2},
          {a:3}
        ]
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
    const NewProductsList = this.state.products.map((product)=>{
      return <NewProduct
      key={product.id}
      title={product.title}
      cost={product.cost}
      img={product.url}
      />
    })
    return (
      <section id="newArrivals_prod" className="content-wr flex">
        {NewProductsList}
      </section>
    );
  }
}

export default Newarrivales;