import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { RingLoader } from 'react-spinners';

const renderInput = field => {
  const { input, type } = field;
  return (
    <div>
      <input {...input} type={type} className="form-control" />
    </div>
  );
};

export class Signin extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    // check if there is an errorMessage displayed to the user,
    // if so, changes isloading(in redux store) to false
    if (props.errorMessage) {
      this.props.endLoading();
    }
  }

  handleFormSubmit({ email, password }) {
    this.props.beginLoading();
    this.props.signinUser({ email, password }, this.props.history);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
    <div>
    <h1> Sign In To i7san</h1>
    <div className="container-fluid">

    <div className="row">

    <div className="col-md-12" id="center">
    <h3>Start Tracking Your Volunteering!</h3>
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <label>Email:</label>
          <Field name="email" type="email" component={renderInput} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <Field name="password" type="password" component={renderInput} />
        </div>
        {this.renderAlert()}
        <RingLoader color={'#123abc'} loading={this.props.isLoading} />
        <button action="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
      Don't have an account? <a href="/signup">Sign up</a> for Free!
      </div>

      </div>
<div className="row">
      <div className="col-md-4">
      <img src= "https://s3.amazonaws.com/i7san-test/svg/planting.svg" alt="Impact" id="side"/>
      </div>

       <div className="col-md-4">
      <img src= "https://s3.amazonaws.com/i7san-test/svg/volunteer_world.svg" alt="Impact" id="side"/>
      </div>

       <div className="col-md-4">
      <img src= "https://s3.amazonaws.com/i7san-test/svg/trend.svg" alt="Impact" id="side"/>
      </div>

      </div>

      </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { isLoading: state.isLoading, form: state.form, errorMessage: state.auth.error };
}

let connectedSignin = connect(mapStateToProps, actions)(Signin);
connectedSignin = reduxForm({
  form: 'signin'
})(connectedSignin);

export default connectedSignin;
