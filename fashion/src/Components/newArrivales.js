import React, { Component } from 'react';
import NewProduct from './NewProduct/NewProduct';
import './Newarrivales.css';
import NewProducts from '../database/NewProducts';


class Newarrivales extends Component {
  constructor(props){
    super(props)
    this.state = {
        products: [],
        visibleProducts: 6
    }
  }

  getProd(){
    this.setState({products: NewProducts.slice(0, this.state.visibleProducts)})
  }
  componentWillMount(){
    this.getProd()
  }
  componentDidMount(){
    this.getProd()
  }
  moreProducts(){
    this.setState({visibleProducts: this.state.visibleProducts + 1})
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
        <div className="content-wr flex"><button onClick={this.moreProducts}>More Products</button></div>
      </section>
    );
  }
}

export default Newarrivales;