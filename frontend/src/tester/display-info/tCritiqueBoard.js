/**
 * Created by mephisto on 8/1/17.
 */
import React, {Component} from 'react'
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';


class tCritiqueBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            critiqueData: [],
        }
        //
        //this.delete = this.getChapters.bind(this);
    }



    componentDidMount(){
        var username = this.props.registerResponse.name;
        var book = this.props.match.params.book;

        $.getJSON(`http://localhost:5000/critique?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                critiqueData: serverData
            })
        });


        //console.log(this.state.chapterData)
    }

    deleteCritique(critiqueId){
        var book = this.props.match.params.book;
        $.getJSON(`http://localhost:5000/critique?action=${critiqueId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        this.props.history.push(`/write/${book}`);
    }



    render(){

        var writeMenu = '/write/' + this.props.match.params.book;
        var critiqueArray = [];

        this.state.critiqueData.map((critiques, index)=>{
            console.log(critiques);

            var edit = '/critique/' + this.props.match.params.book +'?id=' + critiques.id;

            critiqueArray.push(
                <div className="text-center">


                    <div>
                        <div id = "one">Are there any parts in the sample that you found confusing?</div>
                        <div>{critiques.critique_clarity}</div>
                    </div>

                    <div>
                        <div id = "two">Did you find any section boring or repetitious?</div>
                        <div>{critiques.critique_boring}</div>
                    </div>

                    <div>
                        <div id = "three">HIs there a right balance of action, dialogue, and description?</div>
                        <div>{critiques.critique_balance}</div>
                    </div>

                    <div>
                        <div id = "four">Does the sample, scene, or chapter advance the story or develop character?</div>
                        <div>{critiques.critique_advance}</div>
                    </div>

                    <div>
                        <div id = "five">Are more plot questions raised before a plot question is resolved?</div>
                        <div>{critiques.critique_resolve}</div>
                    </div>






                    <div>
                        <div id = "one">Do the characters all sound the same or do they have unique voices?</div>
                        <div>{critiques.critique_voice}</div>
                    </div>

                    <div>
                        <div id = "two">Are the actions of the characters reasonable, fitting with their personalities?</div>
                        <div>{critiques.critique_action}</div>
                    </div>

                    <div>
                        <div id = "three">Do the characters have clear strength and weaknesses affected by the plot?</div>
                        <div>{critiques.critique_personality}</div>
                    </div>

                    <div>
                        <div id = "four">If there’s a romantic relationship, is the emotional conflict strong enough for the entire work?</div>
                        <div>{critiques.critique_romance}</div>
                    </div>

                    <div>
                        <div id = "five">Is the conflict between the main character and the antagonist strong enough?</div>
                        <div>{critiques.critique_conflict}</div>
                    </div>






                    <div>
                        <div id = "one">Does the opponent push the main character to his or her limits?</div>
                        <div>{critiques.critique_limit}</div>
                    </div>

                    <div>
                        <div id = "two">Would a scene work better in the point of view of another character?</div>
                        <div>{critiques.critique_pov}</div>
                    </div>

                    <div>
                        <div id = "three">Do the sentences vary in length?</div>
                        <div>{critiques.critique_sent}</div>
                    </div>

                    <div>
                        <div id = "four">Is there more telling than showing?</div>
                        <div>{critiques.critique_lang}</div>
                    </div>

                    <div>
                        <div id = "five">If sci-fi, fantasy, or paranormal element, does the writer build a convincing world?</div>
                        <div>{critiques.critique_element}</div>
                        <br/><br/>


                    </div>
                    <br/>
                    <div><br/><Link to = {edit} className = "chboard">
                        <Button className = "btn" type="button">
                            Edit Critique
                        </Button>
                    </Link>	<Button className = "btn" type="button" onClick={()=>{this.deleteCritique(critiques.id)}}>
                        Delete Critique
                    </Button></div>






                </div>


            )
        });

        if(critiqueArray.length === 0){
            var textHeader = "It doesn't exist. Go back and create one!"
        }else{
            var textHeader = "Your Chapter Responses";
        }



        return(
            <div>
                <h1>{textHeader}</h1>
                {critiqueArray}


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
export default connect(mapStateToProps,null)(tCritiqueBoard);