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
        $.getJSON(`http://localhost:5000/chapters?action=${chapterId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        this.props.history.push(`/write/${book}`);
	}


	
	render(){

        var writeMenu = '/write/' + this.props.match.params.book;
    	var chaptersArray = [];

		this.state.chapterData.map((chapters, index)=>{
			console.log(chapters)

            var edit = '/chapters/' + this.props.match.params.book +'?id=' + chapters.id;

			chaptersArray.push(
				<div className="text-center">


							<div>
								<div id = "one">What is the point of the chapter in one sentence?</div>
								<div>{chapters.scene_number}</div>
							</div>

							<div>
								<div id = "two">How do the scenes directly affect the plot or subplot?</div>
								<div>{chapters.scene_plot}</div>
							</div>

							<div>
								<div id = "three">How do the scenes directly affect character development?</div>
								<div>{chapters.scene_char1}</div>
							</div>

							<div>
								<div id = "four">How do the characters personalities come out through the dialogue?</div>
								<div>{chapters.scene_dialogue}</div>
							</div>

							<div>
								<div id = "five">What are the major conflicts in the scenes?</div>
								<div>{chapters.relevant_conflict}</div>
							</div>






							<div>
								<div id = "one">Are there places where dialogue could be replaced with action instead?</div>
								<div>{chapters.relevant_dialogue}</div>
							</div>

							<div>
								<div id = "two">How much character thought and reflection is there? Is there too much?</div>
								<div>{chapters.char_thought}</div>
							</div>

							<div>
								<div id = "three">What is the narrative POV? First, second, omniscient?</div>
								<div>{chapters.pov}</div>
							</div>

							<div>
								<div id = "four">What is the POV character for the scenes?Protagonist, antagonist, or ally?</div>
								<div>{chapters.pov_char}</div>
							</div>

							<div>
								<div id = "five">What is the setting for each scene?</div>
								<div>{chapters.setting}</div>
							</div>






							<div>
								<div id = "one">How important is the setting to the character?</div>
								<div>{chapters.setting_char}</div>
							</div>

							<div>
								<div id = "two">How important is the setting to the plot?</div>
								<div>{chapters.setting_plot}</div>
							</div>

							<div>
								<div id = "three">How do the characters interact with the setting?</div>
								<div>{chapters.setting_rev}</div>
							</div>

							<div>
								<div id = "four">What kind of mood do the scenes have?</div>
								<div>{chapters.scene_mood}</div>
							</div>

							<div>
								<div id = "five">Are the characters actions predictable or complex?</div>
								<div>{chapters.scene_char2}</div>
								<br/><br/>


							</div>
							<br/>
					<div><br/><Link to = {edit} className = "chboard">
						<Button className = "btn" type="button">
							Edit Chapter
						</Button>
					</Link>	<Button className = "btn" type="button" onClick={()=>{this.deleteChapter(chapters.id)}}>
						Delete Chapter
					</Button></div>






				</div>


            )
		})

		if(chaptersArray.length === 0){
			var textHeader = "It doesn't exist. Go back and create one!"
		}else{
			var textHeader = "Your Chapter Responses";
		}



		return(
			<div>
				<h1>{textHeader}</h1> 
				 {chaptersArray}


				<Grid className = "fourth-row-left">
					<Col md = {3}>
						<Link to = {writeMenu} className = "return-writemenu">
							<img src = "https://cdn4.iconfinder.com/data/icons/lifestyle-set-2/100/07a3c3443f894cb3fa7a93ee3c496233-512.png"/>
							<div>Return to Write Menu</div>
						</Link>
					</Col>
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