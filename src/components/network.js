import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { RingLoader } from 'react-spinners';
import {Icon, Button} from 'semantic-ui-react';
import axios from 'axios';

const ROOT_URL = 'https://i7san-api.herokuapp.com';

class Network extends Component {


  render() {
    
    



    // TEMP ***************
    const tempDivStyle = {
      display: 'inline-block',
      verticalAlign: 'top',
      marginLeft: '10px',
      marginRight: '10px',
      marginBottom: '50px'
    };

    var h3Style = {
  color: 'red'
};

    const loremIpsumImageUrl = 'http://lorempixel.com/80/80';
    //**********************

    return (
      // TODO: remove inline styles
      <div className="container-fluid">

    <div className="row">
        <h1>
          Connect with members of the community to grow your network!
        </h1>
        </div>


           <div className="row">
          <img src= "https://s3.amazonaws.com/i7san-test/svg/impact.svg" alt="Volunteering" id="impactImage"  />
          <div style={tempDivStyle}>
        
             
          </div>

        </div>

          
   

            

      
      </div>
    );
  }
}
export default Network;

