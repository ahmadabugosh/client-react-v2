import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { RingLoader } from 'react-spinners';
import {Icon, Button} from 'semantic-ui-react';
import axios from 'axios';

const ROOT_URL = 'https://i7san-api.herokuapp.com';

class MyImpact extends Component {
  componentDidMount() {
    if (!this.props.loggedInUser.username) {
      this.props.fetchMyUserInfo();
    }
       this.props.fetchImpact();
    this.props.fetchMyImpact();
    this.props.fetchFollowers();

    
  }

  render() {
    if (!this.props.loggedInUser.username || this.props.myImpact.totalHours === 'undefined' || this.props.impact.following === 'undefined' || this.props.followerCount.followers==='undefined') {
      return <RingLoader color={'#123abc'} />;
    }

       function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

    let { totalPoints, totalHours,economicImpact,currency } = this.props.myImpact[0];

    let {followersHours, followersPoints, economicImpactFollowers}=this.props.impact[0];
    const { username} = this.props.loggedInUser;
    const {following,followers}= this.props.followerCount;
    const {followerCurrency}=this.props.impact[0].currency;
    const x=parseFloat(economicImpact);
    const y=parseFloat(economicImpactFollowers);

    economicImpact=numberWithCommas(economicImpact);
    economicImpactFollowers=numberWithCommas(economicImpactFollowers);

  let totalImpact= x+y;
totalImpact=numberWithCommas(totalImpact);

   


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
        <h4>
          {username}&#8217;s Impact
        </h4>
        </div>


           <div className="row">
          <img src= "https://s3.amazonaws.com/i7san-test/svg/volunteering.svg" alt="Volunteering" id="impactImage"  />
          <div style={tempDivStyle}>
        
              <h4>You volunteered <div className="impact">{totalHours}</div> Hours</h4>
      
            <h4>You have <div className="impact">{totalPoints}</div> Points </h4>
            <h4>
             The economic impact of your volunteering is equivalent to <div className="impact">{currency} {economicImpact}</div> 
            </h4>
          </div>

        </div>

          <div className="row">
          <h3 style={h3Style}> Volunteer more to increase your impact!</h3>
          <a href="/volunteer">
       <Button animated color='green' size='large'>
      <Button.Content visible>VOLUNTEER MORE!</Button.Content>
      <Button.Content hidden>
        <Icon name='like outline' />
      </Button.Content>
    </Button>
    </a>
    </div>
     <br/>
    <br/>
            <div className="row">
   <img src= "https://s3.amazonaws.com/i7san-test/svg/impact.svg" alt="Impact" id="impactImage"  />
          <div style={tempDivStyle}>
           
            <h4>
       Following <div className="impact"> {following}</div> 
            </h4>
             <h4>
          Followers <div className="impact"> {followers}</div>
            </h4>

             <h4>
          Followers Hours <div className="impact"> {followersHours}</div>
            </h4>
            <h4>
          Followers Point <div className="impact"> {followersPoints}</div>
            </h4>
            <h4>
             The economic impact of your followers network is equivalent to <div className="impact">{currency} {economicImpactFollowers}</div> 
            </h4>

             <h4>
             Your total economic impact is equivalent to <div className="impact">{currency} {totalImpact}</div> 
            </h4>
            
          </div>
          
         
        </div>
        <div className="row">
        <h3 style={h3Style}> Grow your network to increase your impact!</h3>
        <a href="/network">
        <Button animated color='blue' size='large'>
      <Button.Content visible>INCREASE YOUR NETWORK!</Button.Content>
      <Button.Content hidden>
        <Icon name='like outline' />
      </Button.Content>
    </Button>
    </a>
    </div>
    <br/>
    <br/>


             <div className="row">
   <img src= "https://s3.amazonaws.com/i7san-test/svg/badge.svg" alt="Badge" id="impactImage"  />
          <div style={tempDivStyle}>
            <h4>
              You have <div className="impact">0</div> Badges
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
  return { loggedInUser: state.loggedInUser, myImpact: state.myImpact, impact:state.impact, followerCount:state.followerCount };
};

export default connect(mapStateToProps, actions)(MyImpact);
