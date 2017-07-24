import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, Radio } from 'react-bootstrap';
import About from './About';
import ScrollableAnchor from 'react-scrollable-anchor'


class Character extends Component{

 
	render(){
		return(
			<div>
				<Grid className = "writemenu">
					<Row>
						<form>
							<FormGroup>
								<FormControl type = "text" placeholder = "Enter text"/>
							</FormGroup>


							<FormGroup>

								<Radio name = "radioGroup" inline>
									Dictionary
								</Radio>

								<Radio name = "radioGroup" inline>
									Thesaurus 
								</Radio>

							</FormGroup>

						</form>
					</Row>	
		        </Grid>   
		    </div>

		)
	}
}

export default Character; 