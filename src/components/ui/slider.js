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
        <div className="slide slide--has-caption slick-slide"><a href="/start"><img src="https://s3.ap-south-1.amazonaws.com/i7san/i7san-slider.png" width="100%" /></a> <div className="slide__caption">


        </div>
</div>
      </Slider>
      </div>
    );
  }
}

export default SimpleSlider;