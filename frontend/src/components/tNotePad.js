import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Button,Form } from 'react-bootstrap';

class tNotePad extends Component{
		render(){
		return(
			<div>
				<Grid>
					<Row>
						<Col lg={12} >
							<h1>Welcome to your Note Pad </h1>
							<Button className="npButton" bsStyle="success" bsSize="small" type="submit">
								Submit
							</Button>
							<div className="nptextBox">
								<textarea>
								Feel free to take notes here:
								</textarea>
							</div>

						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}


export default tNotePad;