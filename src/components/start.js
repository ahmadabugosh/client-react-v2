import React, { Component } from 'react';
import { Header, Icon, Button, Step } from 'semantic-ui-react';
import SimpleSlider from './ui/slider.js';
import axios from 'axios';
const ROOT_URL = 'https://i7san-api.herokuapp.com';

export class Start extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

    componentWillMount() {
    axios.get(`${ROOT_URL}/categories`).then(response => {
      this.setState({ categories: response.data });
    });
  }


  render() {
    return (
  <div>
   
   <h2 className="startHeader">
        MAKE AN IMPACT VOLUNTEERING IN YOUR COMMUNITY!
</h2>


 <div className="myGrid">
<div>

      <Header as='h2' icon>
    <Icon name='users' />
    The Largest Online Volunteering Community
    
  </Header>

  </div>
<div>
      <Header as='h2' icon>
    <Icon name='heartbeat' />
   Find Organization & Causes You Care About
   
  </Header>
</div>

<div>

      <Header as='h2' icon>
    <Icon name='line graph' />
   Track Your Volunteering & Social Impact
  </Header>
</div>
</div>

{this.state.categories}
      </div>
    );
  }
}
export default Start;