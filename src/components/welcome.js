import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import SimpleSlider from './ui/slider.js';

export class Welcome extends Component {
  render() {
    return (
  <div>
   <SimpleSlider />
   <h2 id="sliderText">
        MAKE AN IMPACT VOLUNTEERING IN YOUR COMMUNITY!
</h2>
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-4">
    	

      <Header as='h2' icon>
    <Icon name='users' />
    The Largest Online Volunteering Community
    
  </Header>
  </div>
  <div className="col-md-4">
    	

      <Header as='h2' icon>
    <Icon name='heartbeat' />
   Find Organization & Causes You Care About
   
  </Header>
  </div>
  <div className="col-md-4">
    	

      <Header as='h2' icon>
    <Icon name='line graph' />
   Track Your Volunteering & Social Impact

  </Header>
  </div>
      </div>
      </div>

      </div>
    );
  }
}
export default Welcome;