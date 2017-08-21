import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import Impact from './impact';

import { RingLoader } from 'react-spinners';

// component will first check redux store for cached results
// if the store does not contain an entry for the user, an api call
// will be made against the database
class UserProfilePublic extends Component {
  constructor(props) {
    super(props);

    this.handleFollowUser = this.handleFollowUser.bind(this);
  }
  componentDidMount() {
    if (!this._findUserByName()) {
      this.props.fetchUserInfo(this.props.match.params.username);
    }
  }

  handleFollowUser() {
    // TODO: action creator for following current user
    this.props.followUser(this.props.match.params.username);
  }
  _findUserByName() {
    return Object.values(this.props.users).find(
      user => user.username.toLowerCase() === this.props.match.params.username.toLowerCase()
    );
  }

  render() {
    const user = this._findUserByName();
    if (this.props.isLoading) {
      return <RingLoader color={'#123abc'} loading={this.props.isLoading} />;
    }
    if (!user) {
      return <div>User not found</div>;
    }
    return (
      <div>
        <h3>
          {user.username}&#8217;s Stats
        </h3>
        <button onClick={this.handleFollowUser} className="btn btn-primary">
          Follow {user.name}
        </button>
        {user.joinDate &&
          <h4>
            Join date: {user.joinDate}
          </h4>}
        {user.country &&
          <h4>
            Country: {user.country}
          </h4>}
        {user.badges &&
          <h4>
            Badges: {user.badges}
          </h4>}
        {user.organizations &&
          <h4>
            Organizations: {user.organizations}
          </h4>}
        {user.activities &&
          <h4>
            Activities: {user.activities}
          </h4>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users, isLoading: state.isLoading };
};

export default connect(mapStateToProps, actions)(UserProfilePublic);
