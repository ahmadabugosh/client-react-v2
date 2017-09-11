import React, { Component } from 'react';
import Slider from 'react-slick';

export class SimpleSlider extends Component {
  
  constructor(props) {
    super(props);
    this.settings = {
       dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  }
 render() {
    return (
      <div>
      <Slider {...this.settings} id="slider1">
        <div className="slide slide--has-caption slick-slide"><img src="https://s3.amazonaws.com/i7san-test/anes-sabitovic-286668.jpg" width="100%"/> <div className="slide__caption">VOLUNTEER!</div>
</div>
      </Slider>
      </div>
    );
  }
}

export default SimpleSlider;