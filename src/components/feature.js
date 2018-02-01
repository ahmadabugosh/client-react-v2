import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import AlertContainer from "react-alert";
import { Icon, Button} from 'semantic-ui-react';

class Feature extends Component {
	constructor(props) {
		super(props);
		this.alertOptions = {
			offset: 14,
			position: "bottom left",
			theme: "dark",
			time: 5000,
			transition: "scale"
		};
	}
	componentWillMount() {
		this.props.fetchMessage();
	}

	componentDidMount() {
		this.showAlert();
	}

	showAlert() {
		this.msg.show("Welcome To i7san!", {
			time: 2000,
			type: "success",
			icon: (
				<img src="https://image.flaticon.com/icons/png/128/477/477801.png" />
			)
		});
	}

	//  {this.props.message}

	render() {
		return (
			<div>
			<div className="container-fluid">
				<h2>Welcome to i7san!</h2>
<h3> You're one step away from tracking your impact and volunteering! The first step is to record your first volunteering activity. </h3>
				<a href="./start">
				  <Button animated color='blue' size='huge'>
      <Button.Content visible>GET STARTED!</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>
    </a>
				<AlertContainer
					ref={a => (this.msg = a)}
					{...this.alertOptions}
				/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
