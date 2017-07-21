import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, NavItem} from "react-bootstrap"; 


class NavBar extends Component{
	

	render(){

		return(
			<div>
				<nav className="navbar navbar-default navbar-fixed-top navbar-wrapper">
				  <div className="container-fluid navbar-white">
				    <ul className="nav navbar-nav">
				    	<li><Link to="/">writeIT</Link></li> 	
				    </ul>
				  </div>
				  <div className="container right">
					   <ul className="nav navbar-nav float-right">
						   	<li><Link to="/login">Log in</Link></li>
					      	<li><Link to="/signup">Sign up</Link></li>
					   </ul>
				  </div>
				</nav>
	    	</div>

		)
  	}
}
	

export default NavBar; 



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
