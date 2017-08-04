import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, FormGroup, ControlLabel, FormControl, Button, Col ,MenuItem, Grid} from 'react-bootstrap'
// Our action needs bindActionCreators from redux
import  {bindActionCreators} from 'redux';
// Get the registerAction function which runs on submission
import RegisterAction from '../actions/RegisterAction';
// import LoginAction from '..actions/LoginAction';
// Because this is a container, we need connect from react-redux!
import {connect} from 'react-redux';

class Register extends Component{
	constructor(props) {
		super(props);
		this.state = {
			registerMessage: "",
			nameError: null,
			emailError: null,
			formError: false
		}
		this.handleRegistration = this.handleRegistration.bind(this);
	}

	handleRegistration(event){
		event.preventDefault();
		// console.log("User SUbmitted the form!!")
		var name = event.target[0].value;
		var email = event.target[1].value;
		var username = event.target[2].value;
		var t_username = event.target[3].value;
		var password = event.target[4].value;
		var occupation = event.target[5].value;
		var about = event.target[6].value;
		var location = event.target[7].value;
		

		var error = false;

		//Name
		if(name.length < 3){
			var nameError = "error"; 
			error=true;
		}
		else{ 
			var nameError = "success"
		}

		//Email
		if(email.length < 3){var emailError = "error"; error=true}
		else{var emailError = "success"}


		// console.log(name);
		if(error){
			this.setState({
				formError: true,
				emailError: emailError,
				nameError: nameError
			}) 

		console.log(error);
		}else{
			this.props.registerAction({
				name: name,
				email: email,
				username: username,
				password: password,
				occupation: occupation,
				about: about,
				location: location,
				t_username: t_username 
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log("=======================")
		console.log(nextProps.registerResponse)
		console.log("=======================")

		if(nextProps.registerResponse.msg == 'userInserted'){
			this.props.history.push('/user');
		}else if(nextProps.registerResponse.msg == 'userAlreadyExists'){
			console.log("User name taken!")
			this.setState({
				registerMessage: "This email is already linked to an account."
			})
		}		
	}

	render(){

		return(
			<div>
				<Grid className = "register-wrapperb">
					<Col md = {5} mdOffset = {3} className = "register">
						<div className = "text-center"><h2>Sign up for writeIT</h2><br/>
							<h3>Write, organize, and interact with other writers on writeIT.</h3>
						</div>
						<h4>{this.state.registerMessage}</h4>
							<Col md = {12}>

								<Form horizontal onSubmit={this.handleRegistration}>
									<FormGroup controlId="formHorizontalName" validationState={this.state.nameError}>
										<Col componentClass={ControlLabel} sm={2}>
											Name
										</Col>
										<Col sm={6}>
											<FormControl type="text" name="Name" placeholder="Name" />
										</Col>
									</FormGroup>


									<FormGroup controlId="formHorizontalName" validationState={this.state.emailError}>
										<Col componentClass={ControlLabel} sm={2}>
											Email
										</Col>
										<Col sm={6}>
											<FormControl type="email" name="email" placeholder="Email" />
										</Col>
									</FormGroup>


									<FormGroup controlId="formHorizontalName">
										<Col componentClass={ControlLabel} sm={2}>
											Username
										</Col>
										<Col sm={6}>
											<FormControl type="text" name="username" placeholder="Username"/>
										</Col>
									</FormGroup>


									<FormGroup controlId="formHorizontalName">
										<Col componentClass={ControlLabel} sm={2}>
											Twitter Handle 
										</Col>
										<Col sm={6}>
											<FormControl type="text" name="t_username" placeholder="don't include @"/>
										</Col>
									</FormGroup>


									<FormGroup controlId="formHorizontalName">
										<Col componentClass={ControlLabel} sm={2}>
											Password
										</Col>
										<Col sm={6}>
											<FormControl type="password" name="password" placeholder="Password" />
										</Col>
									</FormGroup>


									<FormGroup controlId="formHorizontalName">
										<Col componentClass={ControlLabel} sm={2}>
											Occupation
										</Col>
										<Col sm={6}>
											<FormControl type="text" name="occupation" placeholder="Occupation" />
										</Col>
									</FormGroup>


									<FormGroup controlId="formHorizontalName">
										<Col componentClass={ControlLabel} sm={2}>
											About
										</Col>
										<Col sm={6}>
											<FormControl type="text" name="state" placeholder="About" />
										</Col>
									</FormGroup>


									<FormGroup controlId="formHorizontalName">
										<Col componentClass={ControlLabel} sm={2}>
											Location
										</Col>
										<Col sm={6}>
											<FormControl type="text" name="state" placeholder="Location" />
										</Col>
									</FormGroup>


									<FormGroup>
										<Col smOffset={2} sm={6}>
											<Button className="button" bsStyle="primary" bsSize="small" type="submit">
												Register
											</Button>
										</Col>
									</FormGroup>
									
								</Form>
								<div><h4 className = "text-center">Already have an account? <Link to = "/login">Log in!</Link></h4></div>
							</Col>
						
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
		registerAction: RegisterAction
	}, dispatch)
}

// export default Register;
export default connect(mapStateToProps,mapDispatchToProps)(Register);




