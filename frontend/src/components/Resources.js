import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col,Table,Button } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class Resources extends Component{
	render(){
		return(
			<div>
				<Grid>
					<Row>
						<Col lg={12} >
								<h1>Resources Page</h1>
								<Table class="resources-table" striped bordered responsive>
								    <thead>
								      <tr>
								        <th>Book</th>
								        <th>Title & Author</th>
								        <th>Description</th>
								      </tr>
								    </thead>
								    <tbody>
								      <tr>
								        <td></td>
								        <td></td>
								        <td></td>

								      </tr>
								      <tr>
								        <td></td>
								        <td></td>
								        <td></td>
								      </tr>
								      <tr>
								        <td></td>
								        <td></td>
								        <td></td>
								      </tr>
								    </tbody>
								</Table>
						</Col>
					</Row>
				</Grid>
			</div>

		)
	}
}

export default Resources;