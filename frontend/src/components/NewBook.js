import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';

class NewBook extends Component{
	render(){
		return(
			<div>
				<Grid>
					<Row>
						<Col md={12} >
							<h1>Welcome to the New Book Page </h1>
							<form>
								<FormGroup>
									<ControlLabel>What is the title of your book?</ControlLabel>
									<FormControl
										type="text"
										placeholder="Enter Title Here"
									/>
								</FormGroup>
							</form>
						</Col>
					</Row>
				</Grid>
			</div>

		)
	}
}

export default NewBook;