import React, { Component } from 'react';
import { Header, Icon, Button, Step } from 'semantic-ui-react';
import SimpleSlider from './ui/slider.js';

export class Welcome extends Component {
  render() {
    return (
  <div className="main">
   <SimpleSlider />
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

      <div className="row">

    <div className="col-md-12">
    <h2 className="headerText" id="heading1"> How It Works</h2>

    </div>
    </div>
    <div className="row">

    <div className="col-md-12">
    <div className="headerText" id="heading2">
    <Step.Group>
    <Step>
   <img src= "https://s3.amazonaws.com/i7san-test/svg/community.svg" alt="Community"   />
      <Step.Content>
        <Step.Title>Join The Community</Step.Title>
        <Step.Description>Find Volunteering Opportunities & Ideas</Step.Description>
      </Step.Content>
    </Step>

    <Step>
      
      <img src= "https://s3.amazonaws.com/i7san-test/svg/volunteering.svg" alt="Volunteering"   />
      <Step.Content title='Track Your Volunteering Activities' description="Collect points, compete with your friends and stay motivated!" />
    </Step>
  <Step>

<img src= "https://s3.amazonaws.com/i7san-test/svg/impact.svg" alt="Impact"   />
<Step.Content>
<Step.Title>Measure Your Impact</Step.Title>
        <Step.Description>Measure The $ Impact For You & Your Network</Step.Description>
     </Step.Content>

    </Step>
  </Step.Group>
  </div>

    </div>
    </div>

      <div className="row">

    <div className="col-md-12">
       

    <a href="/volunteer">
    <Button animated='vertical' fluid className="button">
      <Button.Content hidden>MAKE A DIFFERENCE!</Button.Content>
      <Button.Content visible> START VOLUNTEERING!
        <Icon name='child' />
      </Button.Content>
    </Button>
    </a>

    
    </div>
    </div>
    	
      </div>

     

    
 

      </div>
    );
  }
}
export default Welcome;