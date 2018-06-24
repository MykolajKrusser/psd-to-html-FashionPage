import React, { Component } from 'react';

class NewProduct extends Component {
  render() {
    return (
      <div className="newArrivales_prod col" key={this.props.key}>
          <img src={this.props.img}/>
          <div className="newArrivales_prod_forhover">
            <h3 className="newArrivales_prod_title">{this.props.title}</h3>
            <div className="newArrivales_prod_price">{this.props.cost}</div>
            <a href="#" className="newArrivales_prod_btn">Show now</a>
            <div className="newArrivales_prod_special">{this.props.special}</div>
          </div>
      </div>
    );
  }
}
  
  export default NewProduct;