import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import Impact from './impact';

// component will first check redux store for cached results
// if the store does not contain an entry for the user, an api call
// will be made against the database
class UserProfilePublic extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this._findUserByName()) {
      this.props.fetchUserInfo(this.props.match.params.user);
    }
  }

  _findUserByName() {
    return Object.values(this.props.users).find(
      user => user.name.toLowerCase() === this.props.match.params.user.toLowerCase()
    );
  }

  render() {
    const user = this._findUserByName();
    console.log(user);
    return (
      <div>
        {user
          ? <div>
              Hello {user.name}
            </div>
          : <div>loading</div>}
        {/* <Impact user={this.props.match.params.user} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(mapStateToProps, actions)(UserProfilePublic);
