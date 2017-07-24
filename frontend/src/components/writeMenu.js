import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import About from './About';
import ScrollableAnchor from 'react-scrollable-anchor'


class writeMenu extends Component{
	 
	render(){
		return(
			<div>
				<Grid className = "home">
					<Row>
						<div className = "overlay"></div> 
						<div className = "container">
							<Col sm = {8} className = "subtitle">
								<div><h3>WRITE</h3></div> 
							</Col>
						</div> 
					
						<div className ="container homeNav">
							<Row>
								<ul>
									<li><Link to ="/"><div className="hex hexagon text-center"><h3>PLOT</h3></div></Link></li>
									<li><Link to ="/community"><div className="hex hex3 text-center"><h3>CHARACTER</h3></div></Link></li>
									<li><Link to ="/tools"><div className="hex hex4 text-center"><h3>CHAPTERS</h3></div></Link></li>
									<li><a href ="#about"><div className="hex hex5 text-center"><h3>SCENES</h3></div></a></li>
									<li><Link to ="/faq"><div className="hex hex6 text-center"><h3>PICTURES</h3></div></Link></li>
									<li><Link to ="/write"><div className="hex hex2 text-center"><h3>OTHER</h3></div></Link></li>
									<li><Link to ="/community"><div className="hex hex3 text-center"><h3>SYNOPSIS</h3></div></Link></li>
									<li><Link to ="/tools"><div className="hex hex4 text-center"><h3>QUERY LETTR</h3></div></Link></li>
								</ul>
							</Row>
						</div>

						

				

					</Row>	
		        </Grid>   
		    </div>

		)
	}
}

export default writeMenu; 