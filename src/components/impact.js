import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

import { RingLoader } from 'react-spinners';

class MyImpact extends Component {
  componentDidMount() {
    if (!this.props.loggedInUser.username) {
      this.props.fetchMyUserInfo();
    }
    this.props.fetchMyImpact();
  }

  render() {
    if (!this.props.loggedInUser.username || this.props.myImpact.totalHours === 'undefined') {
      return <RingLoader color={'#123abc'} />;
    }

    const { totalHours, totalPoints } = this.props.myImpact;
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
      <div style={{ textAlign: 'left', minWidth: 800 }}>
        <h4>
          {username}&#8217;s Impact
        </h4>
        <div>
          <img src={loremIpsumImageUrl} />
          <div style={tempDivStyle}>
            <h4>
              {totalHours} Volunteering Hours
            </h4>
            <h4>You rank *Implement Rank* in Saudi Arabia</h4>
          </div>
          <div style={tempDivStyle}>
            {/* Render Dynamically */}
            That&#8217;s enough time to watch 900 movies!
          </div>
        </div>
        <div>
          <img src={loremIpsumImageUrl} />
          <div style={tempDivStyle}>
            <h4>
              {followers.length} Friends
            </h4>
            <h5>
              {/* You rank {friends.rank} among your friends */}
            </h5>
          </div>
          <div style={tempDivStyle}>
            {/* Render Dynamically */}
            That&#8217;s enough people to make 10 football teams!
          </div>
        </div>
        <div>
          <img src={loremIpsumImageUrl} />
          <div style={tempDivStyle}>
            <h4>
              {/* Your work impact is {workImpact.amount} {workImpact.currency} */}
            </h4>
            <h5>
              {/* You rank ${volunteering.rank} in Saudi Arabia */}
            </h5>
          </div>
          <div style={tempDivStyle}>
            {/* Render Dynamically */}
            That&#8217;s enough to buy a Mercedes!
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
