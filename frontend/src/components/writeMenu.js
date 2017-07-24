import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, Radio } from 'react-bootstrap';
import About from './About';
import ScrollableAnchor from 'react-scrollable-anchor'


class writeMenu extends Component{

 
	render(){
		return(
			<div>
				<Grid className = "writemenu">
					<Row>
						
					
						<div className ="container writeNav">
							<Row>
								<ul>
									<li><Link to ="/plot"><div className="hex hexagon text-center"><h3>PLOT</h3></div></Link></li>
									<li><Link to ="/character"><div className="hex hex3 text-center"><h3>CHARACTER</h3></div></Link></li>
									<li><Link to ="/chapters"><div className="hex hex4 text-center"><h3>CHAPTERS</h3></div></Link></li>
									<li><Link to ="/scenes"><div className="hex hex5 text-center"><h3>SCENES</h3></div></Link></li>
									<li><Link to ="/pictures"><div className="hex hex6 text-center"><h3>PICTURES</h3></div></Link></li>
									<li><Link to ="/other"><div className="hex hex2 text-center"><h3>OTHER</h3></div></Link></li>
									<li><Link to ="/synopsis"><div className="hex hex3 text-center"><h3>SYNOPSIS</h3></div></Link></li>
									<li><Link to ="/q-letter"><div className="hex hex4 text-center"><h3>QUERY LETTR</h3></div></Link></li>
								</ul>
							</Row>
						</div>

						<div className = "container right-db">
							<Row>
								<div className = "stats"> STATS:</div> 
								<ul>
									<li><div className="genre"><h3>Genre: {}</h3></div></li>
									<li><div className="wordcount"><h3>Word Count: {} </h3></div></li>
									<li><div className="t-date"><h3>Target Date: {}</h3></div></li>

								</ul>

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
						</div> 

					</Row>	
		        </Grid>   
		    </div>

		)
	}
}

export default writeMenu; 