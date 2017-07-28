import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class Resources extends Component{
	render(){
		return(
			<div>
				<Grid>
					<Row>
						<Col lg={12} >
								<h1>Resources Page</h1>
						</Col>
					</Row>
				</Grid>
			</div>

		)
	}
}

export default Resources;