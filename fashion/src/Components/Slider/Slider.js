import React, { Component } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import './Slider.css';

class Slider extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          slideCount: 1
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
      }
    nextSlide() {
      this.setState({ slideCount: this.state.slideCount + 1 })
      if(this.state.slideCount === 3){
        this.setState({ slideCount: 1 })
      }
    }
  
    previousSlide() {
      this.setState({ slideCount: this.state.slideCount - 1 })
      if(this.state.slideCount === 1){
        this.setState({ slideCount: 3 })
      }
    }
    
      render() {
        return (
          <div className="slider">
            { this.state.slideCount === 1 ? <SlideOne /> : null }
            { this.state.slideCount === 2 ? <SlideTwo /> : null }
            { this.state.slideCount === 3 ? <SlideThree /> : null }
            <div className="flex slider_nav">
              <div className="slider_nav_slideCount">{this.state.slideCount}/3</div>
              <div className="flex slider_nav_arrows">
                <LeftArrow previousSlide={this.previousSlide} />
                <span className="slider_nav_arrows_dec">/</span>
                <RightArrow nextSlide={this.nextSlide} />
              </div>
            </div>
          </div>
        );
    }
}

export default Slider;