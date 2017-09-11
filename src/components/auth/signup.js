import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderInput = field => {
  const { input, type, meta: { touched, error } } = field;
  return (
    <div>
      <input {...input} type={type} className="form-control" />
      {touched &&
        error &&
        <span className="error">
          {error}
        </span>}
    </div>
  );
};

class Signup extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signupUser({ email, password }, this.props.history);
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
    	   <div className="container-fluid">
    <div className="row">
    <div className="col-md-4">
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <label>Email:</label>
          <Field name="email" type="email" component={renderInput} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <Field name="password" type="password" component={renderInput} />
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <Field name="passwordConfirmation" type="password" component={renderInput} />
        </div>
        {this.renderAlert()}

        <button action="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      </div>
      </div>
      </div>

    );
  }
}

function validate(formProps) {
  const errors = {};
  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }
  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirmation) {
    errors.passwordConfirmation = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirmation) {
    errors.password = 'Passwords must match';
  }

  console.log(formProps);
  return errors;
}

function mapStateToProps(state) {
  return { form: state.form, errorMessage: state.auth.error };
}

Signup = connect(mapStateToProps, actions)(Signup);
Signup = reduxForm({
  form: 'signup',
  validate
})(Signup);
export default Signup;
