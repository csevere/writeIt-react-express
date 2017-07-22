import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';




class About extends Component{

	render(){
		return(
			<div>
				<Grid id = "about">
					<Row>
						<div className = "dividing-line"></div>
						<Col md = {12}>
							<p><h2>What is writeIT?</h2></p>
							<div>
				        		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
				        		do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				        		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
				        		nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
				        		reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
				        		ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
				        		qui officia deserunt mollit anim id est laborum.
				        		</p>
				        	</div>/

			        		<div>
								<a href="http://placeholder.com"><img src="http://via.placeholder.com/350x250"/></a>
							</div>	
						</Col>

						<Row>
							<Col md = {12}>

								<p>TOOLS:</p>
			        			<div>
									<a href="http://placeholder.com"><img src="http://via.placeholder.com/350x250"/></a>
								</div>
			        			
			        			<div>
			        				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
			        					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			        					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
			        					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
			        					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
			        					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
			        					qui officia deserunt mollit anim id est laborum.
			        					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
			        					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			        					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
			        					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
			        				</p>
			        			</div>
							</Col>
						</Row>

					</Row>
		        </Grid>   
		    </div>
		)
	}
}

export default About; 

	 