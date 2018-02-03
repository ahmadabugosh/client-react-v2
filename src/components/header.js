//class based component

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Image,Label,Dropdown} from 'semantic-ui-react';

const trigger = (
  <span>
    <Image avatar src="https://react.semantic-ui.com/assets/images/avatar/small/stevie.jpg" size="tiny" /> My Profile
  </span>
)

const options = [
  {as:'a', href:'/my-impact', key: 'impact', text: 'My Impact', icon: 'universal access'},
  { as:'a', href:'/signout',key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
]


class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
     
        <li className="nav-item" key={1}>
          <Link to="/start" className="nav-link">
            Volunteer
          </Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/network" className="nav-link">
            Network
          </Link>
        </li>,
              <li className="nav-item dropdown" key={5}>
          <Dropdown trigger={trigger} options={options} pointing='top left' icon={null}  />
        
        </li>

      ];
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link">
            Sign In
          </Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </li>
      ];
    }
  }

  render() {
    return (
    
   
    	 <nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container">

        <Link to="/" className="navbar-brand">
          {' '}<img src="https://s3.ap-south-1.amazonaws.com/i7san/i7san+logo.png" width="65" height="65" /><p id="logo-text">i7san</p>{' '}
        </Link>
        <ul className="nav navbar-nav mr-auto">
          {this.renderLinks()}
        </ul>
             </div>
</nav>


    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);

// export plain unconnected component for testing
export { Header };
