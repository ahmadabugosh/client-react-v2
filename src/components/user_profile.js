// temporary user profile component/page to house Impact component
import React, { Component } from 'react';
import Impact from './impact';
// temp user data
const user = {
  name: 'Jay',
  volunteering: {
    hours: 2000,
    rank: 129
  },
  friends: {
    amount: 102,
    rank: 26
  },
  workImpact: {
    amount: 125000,
    currency: 'AED'
  }
};

class UserProfile extends Component {
  // if getting user data from api/database, call in componentDidMount
  // otherwise, read user data from Redux store
  componentDidMount() {}

  render() {
    return (
      // TODO: remove inline styles
      <div style={{ textAlign: 'center' }}>
        {/* Only display welcome user message if name is known */}
        {user.name
          ? <h2>
              Welcome {user.name}!
            </h2>
          : null}
        <h3>View The Positive Impact You've Been Making in the Community Below</h3>
        <Impact user={user} />
      </div>
    );
  }
}

export default UserProfile;
