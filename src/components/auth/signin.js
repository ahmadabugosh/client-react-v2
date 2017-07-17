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
}

class Signin extends Component {
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
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render(){
    console.log(this.props.isLoading);
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

        <div className="form-group">
          <label>Email:</label>
          <Field name="email" 
              type="email" component={renderInput} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <Field name="password" 
              type="password" component={renderInput} />
        </div>
        {this.renderAlert()}
        <RingLoader color={'#123abc'} loading={this.props.isLoading} />
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { isLoading: state.isLoading, form: state.form, errorMessage:state.auth.error };
}

Signin = connect(mapStateToProps, actions)(Signin);
Signin = reduxForm({
  form: 'signin'
})(Signin);

export default Signin;