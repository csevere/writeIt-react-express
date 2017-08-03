import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends Component{
	 
	render(){
		return(
			<div>
				<Grid className = "home">
					<Row>
						<div className = "overlay"></div> 
						<div className = "container">
							<Col sm = {12} smOffset ={1} className = "subtitle">
								<div><h3>Writing a novel is now fun and easy for everyone.</h3></div> 
							</Col>
						</div> 
					
						<div className ="container homeNav">
							<Row>
								<ul>
									<li><Link to ="/"><div className="hex hexagon text-center"><h3>HOME</h3></div></Link></li>
									<li><Link to ="/user"><div className="hex hex2 text-center"><h3>DASHBOARD</h3></div></Link></li>
									<li><Link to ="/forums"><div className="hex hex3 text-center"><h3>COMMUNITY</h3></div></Link></li>
									<li><Link to ="/resources"><div className="hex hex4 text-center"><h3>RESOURCES</h3></div></Link></li>
									<li><Link to ="/about"><div className="hex hex5 text-center"><h3>ABOUT</h3></div></Link></li>
									<li><Link to ="/faqs"><div className="hex hex6 text-center"><h3>FAQ</h3></div></Link></li>
								</ul>
							</Row>
						</div>				

					</Row>	
		        </Grid>   
		    </div>

		)
	}
}

export default Home; 
