import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import DatePicker from 'react-bootstrap-date-picker';

class NewBook extends Component{
	render(){
		return(
			<div>
				<Grid>
					<Row>
						<Col md={8} sm= {12} className = "col-md-offset-2 new-book-form text-center" >
							<form>
								<FormGroup>
									<ControlLabel>What is the title of your book?</ControlLabel>
									<FormControl
										type="text"
										placeholder="Enter Title Here"
									/>
									<ControlLabel>What is the genre? </ControlLabel>
									<FormControl  componentClass="select" placeholder="select">
										<option value="Select">Select </option>
										<option value="action">Action </option>
										<option value="adventure">Adventure </option>
										<option value="chicklit">ChickLit</option>
										<option value="classics">Classics </option>
										<option value="fanfiction">FanFiction </option>
										<option value="fantasy">Fantasy </option>
										<option value="general-fiction">GeneralFiction </option>
										<option value="historical-fiction">HistoricalFiction </option>
										<option value="horror">Horror</option>
										<option value="mystery/thriller">Mystery/Thriller</option>
										<option value="nonfiction">NonFiction </option>
										<option value="paranormal">Paranormal</option>
										<option value="random">Random </option>
										<option value="romance">Romance </option>
										<option value="sciencefiction">ScienceFiction</option>
										<option value="shortstory">ShortStory</option>
										<option value="spiritual">Spiritual</option>
										<option value="teenfiction">TeenFiction</option>
										<option value="Vampire">Vampire</option>
										<option value="other">...</option>	
									</FormControl>	
									<ControlLabel>What is the word count? </ControlLabel>
									<FormControl  componentClass="select" placeholder="word count">
										<option value="Select">Select </option>
										<option value="20">20,000 - 35,000</option>
										<option value="35">35,000 - 55,000</option>
										<option value="55">55,000 - 80,000</option>
										<option value="80">80,000 -89,999 </option>
										<option value="90">90,000 - 99,999 </option>
										<option value="100">100,000 - 109,999</option>
										<option value="110">110,000 or above </option>
									</FormControl>
									<ControlLabel>What is the target completion date? </ControlLabel>
										<DatePicker />
								</FormGroup>
								<Link to="/writeMenu"><button className="btn-primary btn">Submit</button></Link>
							</form>
						</Col>
					</Row>
				</Grid>
			</div>

		)
	}
}

export default NewBook;