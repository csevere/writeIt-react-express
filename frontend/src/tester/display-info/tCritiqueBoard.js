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
        var username = this.props.registerResponse.name;
        $.getJSON(`http://localhost:5000/critique?action=${critiqueId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        $.getJSON(`http://localhost:5000/critique?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                critiqueData: serverData
            })
        });
        this.props.history.push(`/critboard/${book}`);
    }



    render(){

        var writeMenu = '/write/' + this.props.match.params.book;
        var critique = '/critique/' + this.props.match.params.book;
        var critiqueArray = [];

        this.state.critiqueData.map((critiques, index)=>{
            console.log(critiques);

            var edit = '/critique/' + this.props.match.params.book +'?id=' + critiques.id;

            critiqueArray.push(
                <div>
                    <Grid className="view-width">
                        <Col sm = {5} className="view-card">

                            <div>
                                <div className="questions"> 1. Are there any parts in the sample that you found confusing?</div>
                                <div>{critiques.critique_clarity}</div>
                            </div>

                            <div>
                                <div className = "questions">2. Did you find any section boring or repetitious?</div>
                                <div>{critiques.critique_boring}</div>
                            </div>

                            <div>
                                <div className = "questions">3. Is there a right balance of action, dialogue, and description?</div>
                                <div>{critiques.critique_balance}</div>
                            </div>

                            <div>
                                <div className = "questions">4. Does the sample, scene, or chapter advance the story or develop character?</div>
                                <div>{critiques.critique_advance}</div>
                            </div>

                            <div>
                                <div className = "questions"> 5. Are more plot questions raised before a plot question is resolved?</div>
                                <div>{critiques.critique_resolve}</div>
                            </div>



                            <div>
                                <div className = "questions"> 6. Do the characters all sound the same or do they have unique voices?</div>
                                <div>{critiques.critique_voice}</div>
                            </div>

                            <div>
                                <div className = "questions">7. Are the actions of the characters reasonable, fitting with their personalities?</div>
                                <div>{critiques.critique_action}</div>
                            </div>

                            <div>
                                <div className = "questions"> 8. Do the characters have clear strength and weaknesses affected by the plot?</div>
                                <div>{critiques.critique_personality}</div>
                            </div>

                            <div>
                                <div className = "questions">9. If there’s a romantic relationship, is the emotional conflict strong enough for the entire work?</div>
                                <div>{critiques.critique_romance}</div>
                            </div>

                            <div>
                                <div className = "questions">10. Is the conflict between the main character and the antagonist strong enough?</div>
                                <div>{critiques.critique_conflict}</div>
                            </div>



                            <div>
                                <div className = "questions">11. Does the opponent push the main character to his or her limits?</div>
                                <div>{critiques.critique_limit}</div>
                            </div>

                            <div>
                                <div className = "questions">12. Would a scene work better in the point of view of another character?</div>
                                <div>{critiques.critique_pov}</div>
                            </div>

                            <div>
                                <div className = "questions">13. Do the sentences vary in length?</div>
                                <div>{critiques.critique_sent}</div>
                            </div>

                            <div>
                                <div className = "questions">14. Is there more telling than showing?</div>
                                <div>{critiques.critique_lang}</div>
                            </div>

                            <div>
                                <div className = "questions">15. If sci-fi, fantasy, or paranormal element, does the writer build a convincing world?</div>
                                <div>{critiques.critique_element}</div>
                                <br/><br/>
                            </div>


                            <br/>
                            <div><br/><Link to = {edit} className = "chboard">
                                <Button className = "btn btn-info" type="button">
                                    Edit Critique
                                </Button>
                            </Link>	<Button className = "btn btn-danger" type="button" onClick={()=>{this.deleteCritique(critiques.id)}}>
                                Delete Critique
                            </Button></div>

                        </Col>
                    </Grid>
                                
                </div>


            )
        });

        if(critiqueArray.length === 0){
            var textHeader = "You have no critiques to view. Return and create one."
        }else{
            var textHeader = "Your Critiques";
        }



        return(
            <div>
                <Grid className = "view-board">
                    <Row>
                        <Col sm = {12} className = "display-resp">
                            <h1>{textHeader}</h1> 
                                {critiqueArray}
                        </Col> 
                    </Row>

                    <Row>
                        <Grid className = "fourth-row-left">
                            <Col md = {3}>
                                <Link to = {writeMenu} className = "return-writemenu">
                                    <img src = "https://cdn4.iconfinder.com/data/icons/lifestyle-set-2/100/07a3c3443f894cb3fa7a93ee3c496233-512.png"/>
                                    <div><h5>Return to Write Menu</h5></div>
                                </Link>
                            </Col>


                            <Col md = {3}>
                                <Link to = {critique} className = "return-quest">
                                    <img src = "/images/create-new-icon.png"/>
                                    <div><h5>Create a new Critique Guide</h5></div>
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
export default connect(mapStateToProps,null)(tCritiqueBoard);

// <div>
//  <div className = "questions">Critique Title:</div>
//  <div>{chapters.critique_title}</div>
// </div>