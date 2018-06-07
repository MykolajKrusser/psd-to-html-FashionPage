import React, { Component } from 'react';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;