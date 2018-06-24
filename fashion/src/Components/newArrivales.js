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
      special={product.special}
      />
    })
    return (
      <section id="newArrivals_prod">
        <div className="content-wr flex">{NewProductsList}</div>
        <div className="content-wr flex"><button>More Products</button></div>
        
      </section>
    );
  }
}

export default Newarrivales;