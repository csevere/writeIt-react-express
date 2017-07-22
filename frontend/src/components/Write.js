import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
// import About from './About';


class Write extends Component{
	 
	render(){
		return(
			<div>
				<Grid>
					<Row>
						<div className="page-header">
							<h1>Welcome to the Write Page</h1>
						</div>
						<Col md={8} >
							<h2>My Book</h2>
							<a href="https://placeholder.com"><img className="writeBookBackground" src="http://via.placeholder.com/600x600"/></a>
							<Image src="/images/circ-book-icon.png" thumbnail />
							 <Button bsStyle="primary">Edit</Button>
    						 <Button bsStyle="success">Delete</Button>
						</Col>
						<Col md={8}className="newBook">
							<h2>New Book</h2>
							<a href="https://placeholder.com"><img  className="writeBookBackground" src="http://via.placeholder.com/600x600"/></a>
							<Image src="/images/plus-icon2.png" thumbnail />
							 <Button bsStyle="danger">Create</Button>
						</Col>
					</Row>
		        </Grid>   
		    </div>

		)
	}
}

export default Write; 