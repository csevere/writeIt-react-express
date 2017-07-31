import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';




class About extends Component{

	render(){
		return(
			<div>
				<Grid  id = "about">
					<Row>
						<div className = "dividing-line"></div>
						<Col xs = {12}>
							<h2>What is writeIT?</h2>
							<hr id='title' />
						</Col>
					</Row>
					<Row className="about-row1">
						<Col xs={6}>
							<div>
				        		<h3> Simplicity </h3><hr id="simplicity" />
				        		<p>
				        		Writing a book can be an intimidating, complex endeavor.<br /> With writeIT, we give you simple tools to break the task into easy, manageable parts.<br />
					        	You’ll spend more time creating your story rather than stressing out about how you’ll do it.<br />
								Just think of writeIT as the bridge getting you from only thinking about a book idea to actually writing it. <br />
								<br />If you’re already a seasoned writer, you’ll appreciate how writeIT simplifies your writing dashboard by putting the 
								essential tools in one, easily-accessible place.
				        		</p>
				        	</div>
				        </Col>
				        <Col xs={6}>
				        	<div>
				        		<h3>Safety</h3><hr id="safety" />

				        			<p>We don’t and will never own any of the words you produce on writeIT. 
				        			It’s all yours.<br /> Feel free to delete, edit, or move any parts of your work elsewhere.<br />
				        			You can trust your words to stay safe in our system.
				        			</p>
				        	</div>	
				        </Col>
					</Row>
						<Row className="about-row2">
						<Col xs={4}>
							<div class="organization">
				        		<h3> Organization </h3><hr id='organization' />
				        		<p>
				        		Some people write best without structure, freely typing words from beginning to end.  
				        		And that’s totally cool! Others need organization.
				        		 If you’re in the latter group, you’ll love writeIT for the way it helps you keep tabs<br />
				        		  on essential components such as characters or the plot. <br />

				        		  <br />You’ll also find suggestions for critiquing other writers’ work and yours,<br />
				        		   along with writing a query letter and the dreaded synopsis for literary agents. <br />
				        		</p>
				        	</div>
				        </Col>
				        <Col xs={4}>
				        	<div>
				        		<h3>Fun</h3><hr id="fun" /> 

				        			<p>
				        			Writing a story is fun. Yes, fun. 
				        			The process of creating characters and placing them in new worlds to battle enemies
				        			 or overcome great challenges should bring excitement to any writer.
				        			 But sometimes working on a manuscript that once brought joy can become a chore or a slow slog to the finish line. <br />
				        			 <br />Our tools aim to keep that positive energy alive whether you’re writing the dire middle parts, difficult chapters or scenes,<br />
				        			  or producing a satisfying ending to your book. <br />

				        			</p>
				        	</div>	
				        </Col>
				         <Col xs={4}>
				        	<div>
				        		<h3>Social</h3><hr id="social" />

				        			<p>Writing a book shouldn’t have to be a solitary endeavor.<br />
				        			 Writers need other writers. We understand that at writeIT 
				        			</p>
				        	</div>	
				        </Col>
					</Row>
		        </Grid>   
		    </div>
		)
	}
}

export default About; 

	 