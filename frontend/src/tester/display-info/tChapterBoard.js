import React, {Component} from 'react'
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ChapterDisplay from './ChapterDisplay';
// import ChapterAction from '..../actions/ChaptersAction';


class tChapterBoard extends Component{
	constructor(props) {
		super(props);
		this.state = {
			chapterData: [],
		}
		// 
		//this.delete = this.getChapters.bind(this);
	}



    componentDidMount(){
        var username = this.props.registerResponse.name;
        var book = this.props.match.params.book;

        $.getJSON(`http://localhost:5000/chapters?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                chapterData: serverData
            })
        });


        //console.log(this.state.chapterData)
    }

	deleteChapter(chapterId){
        var book = this.props.match.params.book;
        var username = this.props.registerResponse.name;
        $.getJSON(`http://localhost:5000/chapters?action=${chapterId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        $.getJSON(`http://localhost:5000/chapters?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                chapterData: serverData
            })
        });
        this.props.history.push(`/chapboard/${book}`);
	}


	
	render(){

        var writeMenu = '/write/' + this.props.match.params.book;
        var chapters = '/chapters/' + this.props.match.params.book;
    	var chaptersArray = [];

		this.state.chapterData.map((chapters, index)=>{
			console.log(chapters)

            var edit = '/chapters/' + this.props.match.params.book +'?id=' + chapters.id;

			chaptersArray.push(
				<div>

					<Grid className="view-width">
						<Col sm = {5} className="view-card">

							<div>
								<div className = "questions">1. What is the point of the chapter in one sentence?</div>
								<div>{chapters.scene_number}</div>
							</div>

							<div>
								<div className = "questions"> 2. How do the scenes directly affect the plot or subplot?</div>
								<div>{chapters.scene_plot}</div>
							</div>

							<div>
								<div className = "questions"> 3. How do the scenes directly affect character development?</div>
								<div>{chapters.scene_char1}</div>
							</div>

							<div>
								<div className = "questions"> 4.How do the characters personalities come out through the dialogue?</div>
								<div>{chapters.scene_dialogue}</div>
							</div>

							<div>
								<div className = "questions"> 5.What are the major conflicts in the scenes?</div>
								<div>{chapters.relevant_conflict}</div>
							</div>






							<div>
								<div className = "questions"> 6. Are there places where dialogue could be replaced with action instead?</div>
								<div>{chapters.relevant_dialogue}</div>
							</div>

							<div>
								<div className = "questions"> 7. How much character thought and reflection is there? Is there too much?</div>
								<div>{chapters.char_thought}</div>
							</div>

							<div>
								<div className = "questions"> 8. What is the narrative POV? First, second, omniscient?</div>
								<div>{chapters.pov}</div>
							</div>

							<div>
								<div className = "questions"> 9. What is the POV character for the scenes?Protagonist, antagonist, or ally?</div>
								<div>{chapters.pov_char}</div>
							</div>

							<div>
								<div className = "questions"> 10. What is the setting for each scene?</div>
								<div>{chapters.setting}</div>
							</div>






							<div>
								<div className = "questions"> 11. How important is the setting to the character?</div>
								<div>{chapters.setting_char}</div>
							</div>

							<div>
								<div className = "questions">12. How important is the setting to the plot?</div>
								<div>{chapters.setting_plot}</div>
							</div>

							<div>
								<div className = "questions"> 13. How do the characters interact with the setting?</div>
								<div>{chapters.setting_rev}</div>
							</div>

							<div>
								<div className = "questions"> 14. What kind of mood do the scenes have?</div>
								<div>{chapters.scene_mood}</div>
							</div>

							<div>
								<div className = "questions"> 15. Are the characters actions predictable or complex?</div>
								<div>{chapters.scene_char2}</div>
								<br/><br/>

							</div>

							<br/>
							<div><br/>
								<Link to = {edit} className = "chboard">
									<Button className = "btn btn-info" type="button">
										Edit Chapter
									</Button>
								</Link>
									<Button className = "btn btn-danger" type="button" onClick={()=>{this.deleteChapter(chapters.id)}}>
										Delete Chapter
									</Button>
							</div>

						</Col>

					</Grid> 

				</div>


            )
		})

		if(chaptersArray.length === 0){
			var textHeader = "You have no chapters to view. Return and create one."
		}else{
			var textHeader = "Your Chapters";
		}



		return(
			<div>
				<Grid className = "view-board">
					<Row>
						<Col sm = {12} className = "display-resp">
							<h1>{textHeader}</h1> 
							 {chaptersArray}
						</Col>
					</Row>
						
				
					<Row>
						<Grid className = "fourth-row-left">
							<Col md = {3}>
								<Link to = {writeMenu} className = "return-writemenu">
									<img src = "/images/writemenu-icon.png"/>
									<div><h5>Return to Write Menu</h5></div>
								</Link>
							</Col>

							<Col md = {3}>
								<Link to = {chapters} className = "return-quest">
									<img src = "/images/create-new-icon.png"/>
									<div><h5>Create a new Chapter</h5></div>
								</Link>
							</Col>
						</Grid>	
					</Row>
				</Grid>

		    </div>


		)
	}
}

function mapStateToProps(state){
	return{
		registerResponse: state.registerReducer
	}
}

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({
// 		// chapterAction: ChapterAction
// 	}, dispatch)
// }

// export default tChapterBoard
export default connect(mapStateToProps,null)(tChapterBoard);



// <div>
// 	<div className = "questions">Chapter Title:</div>
// 	<div>{chapters.chapter_title}</div>
// </div>