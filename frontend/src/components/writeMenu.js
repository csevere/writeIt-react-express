import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Radio, Button } from 'react-bootstrap';
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
				},
				definition: [],
				thesaurus: []
			}
			this.handleDict = this.handleDict.bind(this);
			
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

        handleDict(event){
        	event.preventDefault();

        	var input = document.getElementById('dict-input').value
        	// console.log(input);
        	// console.log(document.getElementById('dictionary').checked);
        	// console.log(document.getElementById('thesaurus').checked);
        	var dictRequest = document.getElementById('dictionary').checked;
			var thesRequest = document.getElementById('thesaurus').checked;

			

			if(thesRequest){
				$.getJSON(`http://api.wordnik.com:80/v4/word.json/${input}/relatedWords?useCanonical=false&
				relationshipTypes=synonym&limitPerRelationshipType=10&api_key=bd7b9ca31317e1142010a015fb505cd1eea03a91c0d74beb9`, (serverData)=>{
					console.log(serverData[0].words);
					this.setState({
                    	thesaurus: serverData[0].words
                	})
				})
			}else if(dictRequest){
				$.getJSON(`http://api.wordnik.com:80/v4/word.json/${input}/definitions?limit=200&includeRelated=false&
				useCanonical=false&includeTags=false&api_key=bd7b9ca31317e1142010a015fb505cd1eea03a91c0d74beb9`,(serverData)=>{
					console.log(serverData);
					this.setState({
                    	definition: serverData
                	})
				})
			}
        }




    
 
	render(){

		console.log(bookTitle)
		var bookTitle = this.state.bookData.title;
		var bookGenre = this.state.bookData.genre;	
		var bookWordCount = this.state.bookData.word_count;
		var bookTargetDate = this.state.bookData.target_date;

		var book = this.props.match.params.book;	

		var definition = this.state.definition;
		
		var synonymArray = [];
		var definitionArray = [];

		this.state.thesaurus.map((synonym, index)=>{
			synonymArray.push(

				<div>{synonym}</div>
				)

		});

		this.state.definition.map((definition, index)=>{
			definitionArray.push(

				<div>{definition.partOfSpeech}: {definition.text}</div>
				)

		});





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
											<div className="post6 text-center"><h3>NOTEBOOK</h3></div>
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

							<div className = "your-book col-sm-4"> <h3>Your Book</h3>

								<ul className="yourBookInfo">
									<li><div className="title"><h3>Title: {book}</h3></div></li>
									<li><div className="genre"><h3>Genre: {bookGenre}</h3></div></li>
									<li><div className="wordcount"><h3>Word Count: {bookWordCount} </h3></div></li>
									<li><div className="t-date"><h3>Target Date: {bookTargetDate}</h3></div></li>
								</ul>
							</div>
								<div>
									<Form onSubmit={this.handleDict}>


										<FormGroup >
											<FormControl id="dict-input" type = "text" placeholder = "Enter text"/>
											<Radio id="dictionary" name="radioGroup" value="dictionary" inline>
												<h4 className="dict-options">Dictionary</h4>
											</Radio>

											<Radio id="thesaurus" name="radioGroup" value="thesaurus" inline>
												<h4 className="dict-options">Thesaurus</h4>
											</Radio>
										</FormGroup>

										<FormGroup>
											<Button id='dict-button' className="btn-primary btn btn-book" type='submit'>Search</Button>


										</FormGroup>

									</Form>
								</div>

								{synonymArray}
								{definitionArray}


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