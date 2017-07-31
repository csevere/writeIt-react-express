import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, Button, Collapse, Well } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class Faqs extends Component{
	constructor(props) {
		super(props);
		this.state = {}
	}

	render(){

		return(
			<div>
				<Grid>
					<Row>

						<Grid className = "faq-wrapper">
							<div className = "header">General Questions</div> 
							<Button onClick = {()=> this.setState({open: !this.state.open})}>
								How does writeIT work?
							</Button>


							<Collapse in = {this.state.open}>
								<div>
									<Well>
											writeIT is easy to use the moment you register and create a user profile. Once registered, you’ll be lead to your profile page or dashboard where you can:
												<br/>
												▪︎ create a book
												<br/>
												▪︎ post and read messages on your wall
												<br/>
												▪︎ edit your profile and change your profile picture
												<br/>
												▪︎ view your twitter timeline
												<br/>
												▪︎ view your friends 
												<br/>
												<br/> 
											To create a book, click on the blue ‘Create’ button and you’ll be prompted to fill in some basic information about your book such as the title or genre. Upon submitting the form, you’ll enter the Write Menu page. 
											<br/>
											<br/> 
											From there you can click on any of the eight “Stickies”: Plot, Character, Chapters, Critiques, Pictures, Notebook, Synopsis, or Query Letter. Clicking on Notebook, allows you to write freely and save your words. The Pictures sticky allows you to upload pictures inspiring your imagination. The other stickies offer guided questions to help structure and write your novel.   
											To join the forums, simply click on Community on the home page. You’ll see the forum page with the option to join discussions under five categories. You can also view the most recent comments. Click on any of the five categories and you

									</Well>
								</div>
							</Collapse> 
						
						        
						</Grid>
					</Row>
				</Grid>
			</div>
		)

	}
	
}



export default Faqs;