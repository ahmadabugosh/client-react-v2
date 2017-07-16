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

    this.state = {
      loading: false
    }
    this.startLoading = this.startLoading.bind(this);
  }

  startLoading(){
  	this.setState({
        loading: true
    });
setTimeout(() => {
  this.setState({
        loading: false
    });
}, 3000)





  }
    handleFormSubmit({ email, password }) {    
        this.props.signinUser({ email, password }, this.props.history);
    }

    renderAlert()
    {
    	
    	if(this.props.errorMessage) {
    		
    		return (

    		<div className="alert alert-danger">
    		<strong>Oops!</strong> {this.props.errorMessage}
    		</div>


    		);


    	}

    }

    render(){
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
                <RingLoader color={'#123abc'} loading={this.state.loading} />
                <button action="submit" className="btn btn-primary" onClick={this.startLoading}>Sign in</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { form: state.form, errorMessage:state.auth.error };
}

Signin = connect(mapStateToProps, actions)(Signin);
Signin = reduxForm({
 form: 'signin'
})(Signin);
export default Signin;