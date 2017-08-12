import React, { Component } from 'react';
import Impact from './impact';

class UserProfilePublic extends Component {
  render() {
    console.log(this.props.match.params.user);
    return (
      <div>
        Test from user profile public
        {/* <Impact user={this.props.match.params.user} /> */}
      </div>
    );
  }
}

export default UserProfilePublic;
