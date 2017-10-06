import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AlertContainer from 'react-alert';

class VolunteerRecord extends Component {
  constructor(props) {
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  componentDidMount() {
    this.showAlert();
  }

  showAlert() {
    this.msg.show('Volunteering Recorded!', {
      time: 4000,
      type: 'success',
      icon: <img src="https://image.flaticon.com/icons/png/128/477/477801.png" />
    });
  }

  //  <button onClick={this.showAlert.bind(this)}>Show Alert</button>

  render() {
    return (
      <div>
        <h3> Success! You just recorded a volunteering activity! </h3>
        <h3>
          {' '}<a href="./volunteer"> Volunteer More!</a>
        </h3>
        <h3>
          {' '}Or <a href="./userprofile"> View Your Impact!</a>
        </h3>
        <AlertContainer ref={a => (this.msg = a)} {...this.alertOptions} />
      </div>
    );
  }
}

export default VolunteerRecord;
