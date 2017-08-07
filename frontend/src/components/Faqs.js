import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, Button, Collapse, Well, Accordion, Panel } from 'react-bootstrap';
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

						  <Accordion>
						    <Panel className="faqsText" header="How does writeIT work?" eventKey="1">
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
											To join the forums, simply click on Community on the home page. You’ll see the forum page with the option to join discussions under five categories. You can also view the most recent comments. Click on any of the five categories and you&apos;ll be lead to their individual discussion pages.
						    
						    </Panel>
						    <Panel header="Is it free?" eventKey="2">
						    	▪︎ Yes, writeIt is completely free to use. Enjoy!
						    </Panel>
						    <Panel header="Are my words safe on here?" eventKey="3">
						    	▪︎ You can be confident your words are secure in our system. We have a backup for the backup of our database. Your words are important to us.  
						    </Panel>
						     <Panel header="Do you own my words?" eventKey="4">
						    	▪︎ No, definitely not. You own the intellectual property of anything you create on WriteIT.  
						    </Panel>
						    <Panel header="Can I delete my book?" eventKey="5">
						    	▪︎ Yes, but we don’t let you take the decision lightly. You’ll get a warning before deleting your book.  
						    </Panel>
						    <Panel header="How do I create new Chapter or Character in the Write Menu, i.e. chapters or plot?" eventKey="6">
						    	▪︎ Simply click on the “Stickies”, fill out the form, submit, and voila! You have a new Chapter, Character, etc.  	 
						    </Panel>
						     <Panel header="Can I edit or delete the answers to categories under the write menu, i.e. chapters or plot?" eventKey="7">
						    	▪︎ Yes! Click on the blue ‘edit’ or red ‘delete’ buttons to either edit or delete your answers to the guided forms.  	 
						    </Panel>
						    <Panel header="How do I start a new discussion topic in the forums?" eventKey="8">
						    	▪︎ Click on Community on the home page. You’ll see the forum page with the option to join discussions under five categories. Click on any of the five categories and you’ll be lead to their individual discussion pages. On the right-hand side, click on ‘Start New Topic.’ From there, fill in the forms, hit submit, and you’ve started a new topic! 	 
						    </Panel>
						    <Panel header="Can I delete a discussion topic?" eventKey="9">
						    	▪︎ Yes! If you are the author of the discussion topic, you can delete it. The red delete button will be on the upper-right hand side of your topic. 	 
						    </Panel>
						  </Accordion>




		
						        
						</Grid>
					</Row>
				</Grid>
			</div>
		)

	}
	
}



export default Faqs;