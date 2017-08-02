import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, Radio } from 'react-bootstrap';
import About from './About';
import  {bindActionCreators} from 'redux';
import ScrollableAnchor from 'react-scrollable-anchor';
import {connect} from 'react-redux';
import $ from 'jquery';


class writeMenu extends Component{
	 constructor(props) {
			super(props);
			this.state = {
				bookData: {
					title: "",
					genre: "",
					word_count: "",
					target_date: ""
				}
			}
			
		}

	    componentDidMount(){

        //console.log(this.props.location.search);
        
        	var username = this.props.registerResponse.name;
        	var book = this.props.match.params.book;
            $.getJSON(`http://localhost:5000/book?username=${username}&book=${book}`, (serverData)=>{
                // log the JSON response from Express
                console.log(serverData);
                this.setState({
                    bookData: serverData.bookData[0]
                })
            })
        }




    
 
	render(){


		var bookTitle = this.state.bookData.title;
		var bookGenre = this.state.bookData.genre;	
		var bookWordCount = this.state.bookData.word_count;
		var bookTargetDate = this.state.bookData.target_date;

		



		var book = this.props.match.params.book;	

		console.log(this.props.match.params.book);
		var character = '/character/' + this.props.match.params.book;
        var plot = '/plot/' + this.props.match.params.book;
        var chapters = '/chapters/' + this.props.match.params.book;
        var critique = '/critique/' + this.props.match.params.book;
        var pictures = '/pictures/' + this.props.match.params.book;
        var notepad = '/notepad/' + this.props.match.params.book;
        var synopsis = '/synopsis/' + this.props.match.params.book;
        var qletter = '/q-letter/' + this.props.match.params.book;

		return(
			<div>
				<Grid className = "writemenu">
					<Row>
						
					
						<div className ="container writeNav">
							<Row>
								<ul>
									<li><Link to ={character}>
										<div className="post1 text-center"><h3>CHARACTER</h3></div>
										</Link>
									</li>

									<li>
										<Link to ={plot}>
											<div className="post2 text-center"><h3>PLOT</h3></div>
										</Link>
									</li>


									<li>
										<Link to ={chapters}>
											<div className="post3 text-center"><h3>CHAPTERS</h3></div>
										</Link>
									</li>


									<li>
										<Link to ={critique}>
											<div className="post4 text-center"><h3>CRITIQUES</h3></div>
										</Link>
									</li>


									<li>
										<Link to ={pictures}>
											<div className="post5 text-center"><h3>PICTURES</h3></div>
										</Link>
									</li>


									<li>
										<Link to ={notepad}>
											<div className="post6 text-center"><h3>NOTEPAD</h3></div>
										</Link>
									</li>

									<li>
										<Link to ={synopsis}>
											<div className="post7 text-center"><h3>SYNOPSIS</h3></div>
										</Link>
									</li>

									<li>
										<Link to ={qletter}>
											<div className="post8 text-center"><h3>QUERY LETTER</h3></div>
										</Link>
									</li>
								</ul>
							</Row>
						</div>

						<div className = "container right-db">
							<Row>
								<div className = "stats"> <h3>STATS:</h3></div> 
								<ul>
									<li><div className="genre"><h3>Title: {book}</h3></div></li>
									<li><div className="genre"><h3>Genre: {bookGenre}</h3></div></li>
									<li><div className="wordcount"><h3>Word Count: {bookWordCount} </h3></div></li>
									<li><div className="t-date"><h3>Target Date: {bookTargetDate}</h3></div></li>

								</ul>

								<form>

									<FormGroup>
										<FormControl type = "text" placeholder = "Enter text"/>
									</FormGroup>


									<FormGroup>

										<Radio name = "radioGroup" inline>
											<h4>Dictionary</h4>
										</Radio>

										<Radio name = "radioGroup" inline>
											<h4>Thesaurus</h4> 
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

function mapStateToProps(state){
    return{
        
        registerResponse: state.registerReducer,
        newBookResponse: state.newBookReducer

    }
}

//export default writeMenu; 

export default connect(mapStateToProps,null)(writeMenu);