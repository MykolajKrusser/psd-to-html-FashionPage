import React, { Component } from 'react';
import NewProduct from './NewProduct/NewProduct';
import './Newarrivales.css';
import NewProducts from '../database/NewProducts';


class Newarrivales extends Component {
  state = {
    vizProd: NewProducts.slice(0, 6)
  }
  moreProducts(){
    
  }
  render() {
    const NewProductsList = this.state.vizProd.map((product)=>{
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