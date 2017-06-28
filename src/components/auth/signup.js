import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';


const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
        </div>
    );
}

class Signup extends Component {
	 handleFormSubmit({ email, password }) {    
        this.props.signinUser({ email, password, passwordConfirmation }, this.props.history);
    }

render(){

	const { handleSubmit } = this.props;

return(

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

                <div className="form-group">
                    <label>Confirm Password:</label>
                    <Field name="passwordConfirmation" 
                        type="password" component={renderInput} />
                </div>
                
                <button action="submit" className="btn btn-primary">Sign Up</button>
            </form>





	);

}


	}

	function mapStateToProps(state) {
    return { form: state.form, errorMessage:state.auth.error };
}

Signup = connect(mapStateToProps, actions)(Signup);
Signup = reduxForm({
 form: 'signup'
})(Signup);
export default Signup;