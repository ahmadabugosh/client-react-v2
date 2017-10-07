import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AlertContainer from 'react-alert';
import { Header, Icon, Button, Step } from 'semantic-ui-react';

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
    <div className="container-fluid">
        <h2> Success! You just recorded a volunteering activity! </h2>

        <div className="row">

           <div className="col-md-6" id="column1">
         <img src= "https://s3.amazonaws.com/i7san-test/svg/report.svg" id="image1"  />
         <a href="./my-impact">
          <Button animated color='blue' size='huge' id="button2">
      <Button.Content visible>VIEW YOUR SOCIAL IMPACT!</Button.Content>
      <Button.Content hidden>
        <Icon name='line graph' /> IMPACT
      </Button.Content>
    </Button>
    </a>
        </div>


      <div className="col-md-6" id="column1">
         <img src= "https://s3.amazonaws.com/i7san-test/svg/success.svg" id="image1" />
         <a href="./volunteer">
          <Button animated color='green' size='huge' id="button2">
      <Button.Content visible>RECORD MORE VOLUNTEERING!</Button.Content>
      <Button.Content hidden>
        <Icon name='child' /> VOLUNTEER
      </Button.Content>
    </Button>
    </a>
        </div>
        </div>
        <AlertContainer ref={a => (this.msg = a)} {...this.alertOptions} />
      </div>
    );
  }
}

export default VolunteerRecord;
