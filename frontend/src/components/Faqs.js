import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class Faqs extends Component{
	render(){
		return(
			<div>
				<Grid>
					<Row>
						<Col lg={12} >
								<h1>Faqs Page</h1>
						</Col>
					</Row>
				</Grid>
			</div>

		)
	}
}

export default Faqs;