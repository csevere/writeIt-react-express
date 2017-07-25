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
									<li><Link to ="/tcharacter">
										<div className="post1 text-center"><h3>CHARACTER</h3></div>
										</Link>
									</li>

									<li>
										<Link to ="/tplot">
											<div className="post2 text-center"><h3>PLOT</h3></div>
										</Link>
									</li>


									<li>
										<Link to ="/chapters">
											<div className="post3 text-center"><h3>CHAPTERS</h3></div>
										</Link>
									</li>


									<li>
										<Link to ="/critiques">
											<div className="post4 text-center"><h3>CRITIQUES</h3></div>
										</Link>
									</li>


									<li>
										<Link to ="/pictures">
											<div className="post5 text-center"><h3>PICTURES</h3></div>
										</Link>
									</li>


									<li>
										<Link to ="/other">
											<div className="post6 text-center"><h3>OTHER</h3></div>
										</Link>
									</li>

									<li>
										<Link to ="/synopsis">
											<div className="post7 text-center"><h3>SYNOPSIS</h3></div>
										</Link>
									</li>

									<li>
										<Link to ="/q-letter">
											<div className="post8 text-center"><h3>QUERY LETTER</h3></div>
										</Link>
									</li>
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