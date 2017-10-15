import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { RingLoader } from 'react-spinners';
import axios from 'axios';

const ROOT_URL = 'https://i7san-api.herokuapp.com';

class MyImpact extends Component {
  componentDidMount() {
    if (!this.props.loggedInUser.username) {
      this.props.fetchMyUserInfo();
    }
    this.props.fetchMyImpact();
    console.log("testing",this.props.fetchMyUserInfo());
  }

  render() {
    if (!this.props.loggedInUser.username || this.props.myImpact.totalHours === 'undefined') {
      return <RingLoader color={'#123abc'} />;
    }

    const { totalHours, totalPoints,economicImpact } = this.props.myImpact[0];
    const { username, followers } = this.props.loggedInUser;

    // TEMP ***************
    const tempDivStyle = {
      display: 'inline-block',
      verticalAlign: 'top',
      marginLeft: '10px',
      marginRight: '10px',
      marginBottom: '50px'
    };

    const loremIpsumImageUrl = 'http://lorempixel.com/80/80';
    //**********************

    return (
      // TODO: remove inline styles
      <div className="container-fluid">

    <div className="row">
        <h4>
          {username}&#8217;s Impact
        </h4>
        </div>


        <div>
          <img src= "https://s3.amazonaws.com/i7san-test/svg/volunteering.svg" alt="Volunteering" id="impactImage"  />
          <div style={tempDivStyle}>
        
              <h4>You volunteered <div className="impact">{totalHours}</div> Hours</h4>
      
            <h4>You have <div className="impact">{totalPoints}</div> Points </h4>
            <h4>
             The economic impact of your volunteering is equivalent to <div className="impact">${economicImpact}</div> 
            </h4>
          </div>
      
        </div>
        <div>
   <img src= "https://s3.amazonaws.com/i7san-test/svg/impact.svg" alt="Impact" id="impactImage"  />
          <div style={tempDivStyle}>
            <h4>
              You have <div className="impact"> {followers.length}</div> Followers 
            </h4>
            <h5>
             
            </h5>
          </div>
         
        </div>
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loggedInUser: state.loggedInUser, myImpact: state.myImpact };
};

export default connect(mapStateToProps, actions)(MyImpact);
