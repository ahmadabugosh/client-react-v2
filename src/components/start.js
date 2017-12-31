import React, { Component } from 'react';
import { Header, Icon, Button, Step } from 'semantic-ui-react';
import SimpleSlider from './ui/slider.js';

export class Start extends Component {
  render() {
    return (
  <div className="main">
   
   <h2 className="headerText">
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
export default Start;