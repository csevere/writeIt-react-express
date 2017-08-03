import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col ,MenuItem, Grid} from 'react-bootstrap'
// Our action needs bindActionCreators from redux
import  {bindActionCreators} from 'redux';
// Get the registerAction function which runs on submission
import LoginAction from '../actions/LoginAction';
// Because this is a container, we need connect from react-redux!
import {connect} from 'react-redux';


class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			registerMessage: "",
			passwordError: null,
			emailError: null,
			formError: false
		}
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(event){
		event.preventDefault();
		// console.log("User SUbmitted the form!!")
		var email = event.target[0].value
		var password = event.target[1].value
		var error = false;

		//Password
		if(password.length == 0){
			var passwordError = "error";
			error=true;
		}
		else{ 
			var passwordError = "null"
		}

		//Email
		if(email.length < 3){var emailError = "error"; error=true}
		else{var emailError = "success"}


		// console.log(name);
		if(error){
			this.setState({
				formError: true,
				emailError: emailError,
				passwordError: passwordError
			}) 
		}else{
			this.props.loginAction({
				email: email,
				password: password
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log("=======================")
		console.log(nextProps.registerResponse)
		console.log("=======================")

		if(nextProps.registerResponse.msg == 'loginSuccess'){
			// this.props.getCart(nextProps.registerResponse.token)
			this.props.history.push('/user');
		}else if(nextProps.registerResponse.msg == 'userAlreadyExists'){
			console.log("User name taken!")
			this.setState({
				registerMessage: "Sorry, this username is already taken."
			})
		}		
	}

	render(){

		// this.setState({
		// 	bad: ""
		// })

		return(
			<div>
				<Grid className = "register-wrapper">
					<Col md = {6} mdOffset={3} className = "login">
						<div className = "text-center"><h2>Log in to writeIT</h2><br/>
							<h3>Write, organize, and interact with other writers on writeIT.</h3>
						</div> 
						<h4 className="text-danger">{this.state.registerMessage}</h4>
						<Form horizontal onSubmit={this.handleLogin}>
							<FormGroup controlId="formHorizontalName" validationState={this.state.nameError}>
								<Col componentClass={ControlLabel} sm={2}>
									Email
								</Col>
								<Col sm={10}>
									<FormControl type="email" name="email" placeholder="Email" />
								</Col>
							</FormGroup>
							<FormGroup controlId="formHorizontalName" validationState={this.state.emailError}>
								<Col componentClass={ControlLabel} sm={2}>
									Password
								</Col>
								<Col sm={10}>
									<FormControl type="password" name="password" placeholder="Password" />
								</Col>
							</FormGroup>
							<FormGroup>
								<Col smOffset={2} sm={10}>
									<Button bsStyle="primary" bsSize="small" type="submit">
										Login
									</Button>
								</Col>
							</FormGroup>
						</Form>
						<div><h4 className = "text-center">Don&#39;t have an account? <Link to = "/signup">Create one!</Link></h4></div>
					</Col>
				</Grid>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		registerResponse: state.registerReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction
	}, dispatch)
}

// export default Register;
export default connect(mapStateToProps,mapDispatchToProps)(Login);







