import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import DatePicker from 'react-bootstrap-date-picker';
import  {bindActionCreators} from 'redux';
import NewBookAction from '../actions/NewBookAction';
import {connect} from 'react-redux';



class NewBook extends Component{
	constructor(props) {
    super(props);
    this.state = {
     	newBookResponse: ""
    }
    this.handleNewBook = this.handleNewBook.bind(this);
    
  }

  handleNewBook(event){
    event.preventDefault();
    
    var error = false;

    var title = document.getElementById('title').value;
    var genre = document.getElementById('genre').value;
    var word_count = document.getElementById('word_count').value;
    //console.log(event.target);
    // var target_date = document.getElementsByClassName('input-group')[0];
    // console.log(target_date)
   
 
    var username = this.props.registerResponse.name;
    console.log(username);
  
    

   
    if(error){
       console.log("ERROR!!!")
      

    console.log(error);
    }else{    
      this.props.newBookAction({
      	username: username,
        title: title,
        genre: genre,
        word_count: word_count,
        // target_date: target_date
       
        
      });
    }

  }

  componentWillReceiveProps(nextProps) {
		console.log("=======================")
		console.log(nextProps.newBookResponse)
		console.log("=======================")

		if(nextProps.newBookResponse.msg == 'newBookInserted'){
			this.props.history.push('/write');
		}else if(nextProps.newBookResponse.msg == 'bookAlreadyExists'){
			console.log("")
			this.setState({
				registerMessage: "Sorry, this book is already taken."
			})
		}		
	}




	render(){
		return(
			<div>
				<Grid>
					<Row>
						<Col md={8} sm= {12} className = "col-md-offset-2 new-book-form text-center" >
							<Form id = 'book' onSubmit={this.handleNewBook}>
								<FormGroup>
									<ControlLabel>What is the title of your book?</ControlLabel>
									<FormControl
										id="title"
										type="text"
										placeholder="Enter Title Here"
									/>
									<ControlLabel>What is the genre? </ControlLabel>
									<FormControl id="genre" componentClass="select" placeholder="select">
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
									<FormControl id="word_count" componentClass="select" placeholder="word count">
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
								<button type="submit" className="btn-primary btn">Submit</button>
							</Form>
						</Col>
					</Row>
				</Grid>
			</div>

		)
	}
}

function mapStateToProps(state){
  return{
    newBookResponse: state.newBookReducer,
    registerResponse: state.registerReducer

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    newBookAction: NewBookAction
  }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(NewBook);
// export default NewBook;