import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { Header, Icon, Button, Step } from 'semantic-ui-react';
import SimpleSlider from './ui/slider.js';
import axios from 'axios';
const ROOT_URL = 'https://i7san-api.herokuapp.com';

export class Start extends Component {



      componentDidMount() {

    this.props.storeCategories();
   
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

{this.categories}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { categories: state.categories };
};

export default connect(mapStateToProps, actions)(Start);