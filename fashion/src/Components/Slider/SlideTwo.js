import React, { Component } from 'react';
import './Slides.css';

const SlideTwo= (props) => {
    return(
       <div className="slides slide2 fade">
            <h2 className="slides_header">Featured</h2>
            <h3 className="slides_descript">Tropical Floral Collection</h3>
            <a href="#" className="slides_btn">View All</a>
        </div> 
    );
}

export default SlideTwo;