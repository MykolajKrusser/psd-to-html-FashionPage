import React, { Component } from 'react';

class NewProduct extends Component {
  render() {
    return (
      <div>
          <img
          key={this.props.key}
          src={this.props.img}
          className="newArrivales_prod col"
          />
      </div>
    );
  }
}
  
  export default NewProduct;