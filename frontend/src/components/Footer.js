import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItemForm, Grid, Row, Col } from 'react-bootstrap';



class Footer extends Component{
	render(){
		return(
			<div className = "footer-content">

				<nav className="footer">
					<div className="container-fluid">
						<ul>
					  		<li>About Us</li>
					  		<li>&#169;2017 writeIT</li>
					  	</ul> 
					</div>
				</nav>
	    	</div>

		)
  	}
}
	

export default Footer; 

