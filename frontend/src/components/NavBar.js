import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavItemForm, Grid, Row, Col, Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
// import {Autocomplete} from 'react-autocomplete';
import {connect} from 'react-redux';
import NavBarTest from '../tester/NavBarTest';

class NavBar extends Component{
	

	render(){

		if(this.props.registerInfo.name == undefined){
			var rightBar = [
				<ul>
					<li><Link className = "home-nav" to="/">Home</Link></li>
				   	<li><Link className = "login" to="/login">Login</Link></li>
			      	<li><Link className = "signup" to="/signup">Sign up</Link></li>	
		      	</ul>
			]
		}else{
			var rightBar = [
				<ul>
					<li className="home-nav2">Welcome, <Link to='/user'>{this.props.registerInfo.name}</Link></li>
					<li><Link className = "home-nav" to="/">Home</Link></li>
				   	<li className = "logout"><a href="http://localhost:3000/">Logout</a></li>
		      	</ul>
			]		
		}

		return(
			<div>
				<nav className="navbar navbar-fixed-top navbar-wrapper">
				  <div className="container-fluid navbar-white">
					    <ul className="nav navbar-nav title">
					    	<li><Link to="/">writeIT</Link></li> 	
					    </ul>

					    <Col sm = {5}>

						    <Form>
						    	<FormGroup>
	      							<Route path='/' component={NavBarTest} />
	      							<datalist>
	      								<option value='mall' />
	      							</datalist>
	    						</FormGroup>
						    </Form>
						</Col>

					  <div className="container right">
						   <ul className="nav navbar-nav float-right">
						   		{rightBar}
						   </ul>
					  </div>
					</div>
				</nav>
	    	</div>

		)
  	}
}

function mapStateToProps(state){
	return{
		registerInfo: state.registerReducer,
	}
}
	

// export default NavBar; 
export default connect(mapStateToProps)(NavBar)



// 	if(this.props.registerInfo.name == undefined){
// 			var rightBar = [
// 				<li key="1" className="text-right"><Link to="/login">Login</Link></li>,
// 				<li key="2" className="text-right"><Link to="/signup">Sign up</Link></li>,
						
// 			]
// 		}else{
// 			var rightBar = [
// 				<li key="1" className="text-right">Hi, {this.props.registerInfo.name}</li>,	
// 				<li key="2" className="text-right"><Link to="/logout">Logout</Link></li>	
// 			]		
// 		}
