import React, { Component } from 'react';
import './Features.css';

class Features extends Component {
  render() {
    return (
        <div id="Features" className="flex">
            <div className="Features__lookbook flex col">
                <h2>2018 Lookbook</h2>
                <article className="Features__lookbook__text flex">
                    <span>- it`s the Season to Renew</span>
                    <span>Your Style with</span>
                    <span>New Colors</span>
                </article>
            </div>
             <div className="Features__shopNow flex">
                <h2>Summer Sale</h2>
                <article>30% OFF</article>
                <a href="#">Shop Now</a>
            </div>
            <div className="Features__trend flex col">
                <h2>Fashion trend</h2>
            </div>
            <div className="Features__featured flex col">

            </div>
        </div>
    );
  }
}

export default Features;