import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class Faqs extends Component{

	render(){

		return(
			<div>
				<Grid>
					<Row>
						<Grid>
							<div className="panel-group" id="accordion">
						        <div className="faqHeader">General Questions</div>
						        
						        <div className="panel panel-default">
						            <div className="panel-heading">
						                <h4 className="panel-title">
						                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">How does writeIT work?</a>
						                </h4>
						            </div>
						            <div id="collapseOne" className="panel-collapse collapse in">
						                <div className="panel-body">
						                    o	writeIT is simple to use. Register and create a user profile. Once you’re registered, you’ll be lead to your profile page or dashboard where you can:
												♣	create a book
												♣	post and read messages on your wall
												♣	edit your profile
												♣	view your twitter timeline.
												♣	View your friends 
											o	To create a book, click on the blue ‘Create’ button and you’ll be prompted to fill in some basic information about your book such as the title or genre. Upon submitting the form, you’ll be lead to the Write Menu. From there you can click on any of the eight “Stickies”: Plot, Character, Chapters, Critiques, Pictures, Notebook, Synopsis, or Query Letter. Clicking on Notebook, allows you to write freely and save your words. The Pictures sticky allows you to upload pictures inspiring your imagination. The other stickies offer guided questions to help structure and write your novel.   
											o	To join the forums, simply click on Community on the home page. You’ll see the forum page with the option to join discussions under five categories. You can also view the most recent comments. Click on any of the five categories and you

						                </div>
						            </div>
						        </div>

						        <div className="panel panel-default">
						            <div className="panel-heading">
						                <h4 className="panel-title">
						                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTen">Is it free?</a>
						                </h4>
						            </div>
						            <div id="collapseTen" className="panel-collapse collapse">
						                <div className="panel-body">
						                    Yes, writeIT is completely free to use. Enjoy! 
						                </div>
						            </div>
						        </div>

						        <div className="panel panel-default">
						            <div className="panel-heading">
						                <h4 className="panel-title">
						                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Do you own my words?</a>
						                </h4>
						            </div>
						            <div id="collapseEleven" className="panel-collapse collapse">
						                <div className="panel-body">
						                    No, definitely not. You own the intellectual property of anything you create on WriteIT. 
						                </div>
						            </div>
						        </div>

						         <div className="panel panel-default">
						            <div className="panel-heading">
						                <h4 className="panel-title">
						                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Can I delete my book?</a>
						                </h4>
						            </div>
						            <div id="collapseEleven" className="panel-collapse collapse">
						                <div className="panel-body">
						                    Yes, but we don’t let you take the decision lightly. You’ll get a warning before deleting your book. 
						                </div>
						            </div>
						        </div>

						         <div className="panel panel-default">
						            <div className="panel-heading">
						                <h4 className="panel-title">
						                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">How do I create a new Chapter or Character in the Write Menu?</a>
						                </h4>
						            </div>
						            <div id="collapseEleven" className="panel-collapse collapse">
						                <div className="panel-body">
						                    Simply click on the “Stickies”, fill out the form, submit, and voila! You have a new Chapter or Character.  
						                </div>
						            </div>
						        </div>


						         <div className="panel panel-default">
						            <div className="panel-heading">
						                <h4 className="panel-title">
						                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Can I delete or edit the answers to categories under the write menu, i.e. Chapters or Plot? </a>
						                </h4>
						            </div>
						            <div id="collapseEleven" className="panel-collapse collapse">
						                <div className="panel-body">
						                    Definitely. Click on view button on the bottom right hand corner to view your answers. Next, select the edit or delete option. 
						                </div>
						            </div>
						        </div>


						         <div className="panel panel-default">
						            <div className="panel-heading">
						                <h4 className="panel-title">
						                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">How do I start a new discussion topic in the forums?</a>
						                </h4>
						            </div>
						            <div id="collapseEleven" className="panel-collapse collapse">
						                <div className="panel-body">
						                    
						                </div>
						            </div>
						        </div>


						         <div className="panel panel-default">
						            <div className="panel-heading">
						                <h4 className="panel-title">
						                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Are my words safe on here?</a>
						                </h4>
						            </div>
						            <div id="collapseEleven" className="panel-collapse collapse">
						                <div className="panel-body">
						                    To join the forums, simply click on Community on the home page. You’ll see the forum page with the option to join discussions under five categories. You can also view the most recent comments. Click on any of the five categories and you will be lead to their individual forum pages where you can start a discussion. 
						                </div>
						            </div>
						        </div>


						         <div className="panel panel-default">
						            <div className="panel-heading">
						                <h4 className="panel-title">
						                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Can I delete a discussion topic?</a>
						                </h4>
						            </div>
						            <div id="collapseEleven" className="panel-collapse collapse">
						                <div className="panel-body">
						                    Sure, as long as you’re the author of a discussion topic, you can most delete a post. The delete button is on the right-hand corner of the topic page.
						                    Once deleted, the page and its comments are gone forever, so be sure to save relevant comments. 
						                </div>
						            </div>
						        </div>


						         <div className="panel panel-default">
						            <div className="panel-heading">
						                <h4 className="panel-title">
						                    <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Can I delete my comment in a discussion?</a>
						                </h4>
						            </div>
						            <div id="collapseEleven" className="panel-collapse collapse">
						                <div className="panel-body">
						                    Sure. Click on the delete button on the right-hand corner of your comment.  
						                </div>
						            </div>
						        </div>

						    </div>

						</Grid>
					</Row>
				</Grid>
			</div>
		)

	}
	
}



export default Faqs;