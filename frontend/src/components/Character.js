import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import About from './About';
import ScrollableAnchor from 'react-scrollable-anchor'


class Character extends Component{

 
	render(){
		return(
			<div>
				<Grid className = "character">
					<Row>
						<form className = "ch-forms text-center">
							<FormGroup controlId="formControlsTextarea">
     							<ControlLabel>Name:</ControlLabel>
      							<FormControl componentClass="textarea" placeholder="name" />
    						</FormGroup>

    						<FormGroup controlId="formControlsTextarea">
     							<ControlLabel>Race:</ControlLabel>
      							<FormControl componentClass="textarea" placeholder="race" />
    						</FormGroup>


    						<FormGroup controlId="formControlsTextarea">
     							<ControlLabel>Age:</ControlLabel>
      							<FormControl componentClass="textarea" placeholder="age" />
    						</FormGroup>


    						<FormGroup controlId="formControlsTextarea">
     							<ControlLabel>Birthday:</ControlLabel>
      							<FormControl componentClass="textarea" placeholder="birthday" />
    						</FormGroup>

    						<FormGroup controlId="formControlsTextarea">
     							<ControlLabel>General Physical Description:</ControlLabel>
      							<FormControl componentClass="textarea" placeholder="description" />
    						</FormGroup>

    						<Button className = "btn" type="submit">
      							Submit
    						</Button>
								    
								   	    
						</form>
					</Row>	
		        </Grid>   
		    </div>

		)
	}
}

export default Character; 