import React, { Component } from 'react';

const SlideOne= (props) => {
    let background = {
        background: 'url(../../img/Image1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return <div style={background} className="slide"></div>
}

export default SlideOne;