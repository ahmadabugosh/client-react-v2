import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import AlertContainer from 'react-alert';




class Feature extends Component{
constructor(props){
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }
	componentWillMount(){

		this.props.fetchMessage();
	

	}

	componentDidMount(){

this.showAlert();

	}
 
 
  showAlert(){
    this.msg.show('Welcome To i7san!', {
      time: 2000,
      type: 'success',
      icon: <img src="https://image.flaticon.com/icons/png/128/477/477801.png" />
    });
  }

 //  <button onClick={this.showAlert.bind(this)}>Show Alert</button>

render(){
	return(

		<div>
		{this.props.message}
<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      
		</div>
		);


}

}

function mapStateToProps(state){

	return {message: state.auth.message};
}

export default connect (mapStateToProps,actions)(Feature);