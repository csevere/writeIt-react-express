import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

// import About from './About';


class Home extends Component{
	 
	render(){
		return(
			<div>
				<Grid className = "home">
					<Row >
						<div className = "overlay"></div> 
						<div className = "container">
							<Col sm = {8} className = "subtitle">
								<div><h3>Because writing a novel should be fun and easy for everyone</h3></div> 
							</Col>
						</div> 
					
						<div className ="container homeNav">
							<Row>
								<ul>
									<li><Link to ="/"><div className="hex hexagon text-center"><h3>HOME</h3></div></Link></li>
									<li><Link to ="/write"><div className="hex hex2 text-center"><h3>WRITE</h3></div></Link></li>
									<li><Link to ="/tools"><div className="hex hex3 text-center"><h3>COMMUNITY</h3></div></Link></li>
									<li><Link to ="/forum"><div className="hex hex4 text-center"><h3>TOOLS</h3></div></Link></li>
									<li><Link to ="/about"><div className="hex hex5 text-center"><h3>ABOUT</h3></div></Link></li>
									<li><Link to ="/faq"><div className="hex hex6 text-center"><h3>FAQ</h3></div></Link></li>
								</ul>
							</Row>
						</div>

						<span class="scroll-btn">
							<a href="#">
								<span className="mouse">
									<span>
									</span>
								</span>
							</a>
						</span>
					
					</Row>

		        </Grid>   
		    </div>

		)
	}
}

export default Home; 
