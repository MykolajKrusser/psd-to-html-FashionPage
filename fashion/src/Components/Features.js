import React, { Component } from 'react';
import './Features.css';

class Features extends Component {
  render() {
    return (
        <div id="Features" className="flex">
            <div className="Features__lookbook flex">
                <h2>2018 lookbook</h2>
                <article>
                    <pre>- it`s the Season 
                        to Renew
                    Your Style with
                    New Colors
                    </pre>
                </article>
            </div>
            <div className="Features__trend flex">
                <h2>Fasion trand</h2>
            </div>
            <div className="Features__featured flex">

            </div>
            <div className="Features__shopNow flex">
                <h2>Summer Sale</h2>
                <article>30% OFF</article>
                <a href="#">Shop Now</a>
            </div>
        </div>
    );
  }
}

export default Features;