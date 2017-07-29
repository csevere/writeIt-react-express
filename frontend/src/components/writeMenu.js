import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, Radio } from 'react-bootstrap';
import About from './About';
import ScrollableAnchor from 'react-scrollable-anchor'


class writeMenu extends Component{
 
	render(){
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
								<div className = "stats"> STATS:</div> 
								<ul>
									<li><div className="genre"><h3>Genre: {}</h3></div></li>
									<li><div className="wordcount"><h3>Word Count: {} </h3></div></li>
									<li><div className="t-date"><h3>Target Date: {}</h3></div></li>

								</ul>

								<form>

									<FormGroup>
										<FormControl type = "text" placeholder = "Enter text"/>
									</FormGroup>


									<FormGroup>

										<Radio name = "radioGroup" inline>
											Dictionary
										</Radio>

										<Radio name = "radioGroup" inline>
											Thesaurus 
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

export default writeMenu; 