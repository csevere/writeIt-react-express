/**
 * Created by mephisto on 7/31/17.
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
// import ChapterAction from '..../actions/ChaptersAction';


class tCharacterBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            characterData: [],
        }
        //
        //this.delete = this.getChapters.bind(this);
    }



    componentDidMount(){
        var username = this.props.registerResponse.name;
        var book = this.props.match.params.book;

        $.getJSON(`http://localhost:5000/characters?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                characterData: serverData
            })
        });


        //console.log(this.state.chapterData)
    }

    deleteCharacter(characterId){
        var book = this.props.match.params.book;
        $.getJSON(`http://localhost:5000/characters?action=${characterId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        this.props.history.push(`/write/${book}`);
    }



    render(){

        var writeMenu = '/write/' + this.props.match.params.book;
        var charactersArray = [];

        this.state.characterData.map((characters, index)=>{
            console.log(characters);

            var edit = '/character/' + this.props.match.params.book +'?id=' + characters.id;

            charactersArray.push(
                <div>
                    <Grid className="view-width">
                 
                        <Col sm = {2} className="view-card">

                            <div>
                                <div className = "questions">1. Name:&nbsp;{characters.name}</div>
                            </div>

                            <div>
                                <div className = "questions">2. Race:&nbsp;{characters.race}</div>
                            </div>

                            <div>
                                <div className = "questions">3. Age:&nbsp;{characters.age}</div>
                                
                            </div>

                            <div>
                                <div className = "questions">4. Birthday:&nbsp;{characters.birthday}</div>
                            </div>

                            <div>
                                <div className = "questions">5.General Physical Description:&nbsp;{characters.physical_desc}</div>
                            </div>






                            <div>
                                <div id = "one">6. Hometown:&nbsp;{characters.hometown}</div>
                            </div>

                            <div>
                                <div id = "two">7. Neighborhood Type:&nbsp;{characters.type_of_home}</div>
                            </div>

                            <div>
                                <div id = "three">8. Name and Occupation of Father:&nbsp;{characters.father_info}</div>
                            </div>

                            <div>
                                <div id = "four">9. Name and Occupation of Mother:&nbsp;{characters.mother_info}</div>
                            </div>

                            <div>
                                <div id = "five"> 10. Siblings:&nbsp;{characters.sibling_info}</div>
                            </div>






                            <div>
                                <div className = "questions"> 11.Close Relatives:&nbsp;{characters.relatives}</div>
                            </div>

                            <div>
                                <div className = "questions"> 12. Best Friends:&nbsp;{characters.friends}</div>
                            </div>

                            <div>
                                <div className = "questions">13. Enemies:&nbsp;{characters.enemies}</div>
                            </div>

                            <div>
                                <div className = "questions">14.Mentor:&nbsp;{characters.mentor}</div>
                            </div>

                            <div>
                                <div className = "questions">15. Hobbies:&nbsp;{characters.hobbies}</div>



                            </div>

                            <div>
                                <div id = "one">16. Dress Style:&nbsp;{characters.dress}</div>
                            </div>

                            <div>
                                <div id = "two"> 17. Leader or Follower:&nbsp;{characters.leader_follower}</div>
                            </div>

                            <div>
                                <div id = "three"> 18. Strongest Postive Trait:&nbsp;{characters.positive_traits}</div>
                            </div>

                            <div>
                                <div id = "four">19. Strongest Negative Trait:&nbsp;{characters.negative_traits}</div>
                            </div>

                            <div>
                                <div id = "five">20. Temper:&nbsp;{characters.temper}</div>



                            </div>



                            <div>
                                <div className = "questions">21. Star Sign:&nbsp;{characters.star_sign}</div>
                            </div>

                            <div>
                                <div className = "questions"> 22. Personality Type:&nbsp;{characters.personality}</div>
                            </div>

                            <div>
                                <div className = "questions"> 23. Life Philosopy:&nbsp;{characters.philosophy}</div>
                            </div>

                            <div>
                                <div className = "questions">24. Ambitions:&nbsp;{characters.ambitions}</div>
                            </div>

                            <div>
                                <div className = "questions">25. Likeable or unlikeable:&nbsp;{characters.liked_disliked}</div>
                             
                            </div>


                            <br/>
                            <div><br/><Link to = {edit} className = "chboard">
                                <Button className = "btn" type="button">
                                    Edit Character
                                </Button>
                            </Link>	<Button className = "btn" type="button" onClick={()=>{this.deleteCharacter(characters.id)}}>
                                Delete Character
                            </Button></div>
                        </Col>
                    </Grid> 


                </div>


            )
        })

        if(charactersArray.length === 0){
            var textHeader = "You have no characters to view. Go back and create one!"
        }else{
            var textHeader = "Your Characters";
        }



        return(
            <div>
                <Grid className = "view-board">

                    <Row>
                        <Col sm ={12} className = "display-resp">
                            <h1>{textHeader}</h1>
                            {charactersArray}
                        </Col>
                    </Row> 

                    <Row>
                        <Grid className = "fourth-row-left">
                            <Col md = {3}>
                                <Link to = {writeMenu} className = "return-writemenu">
                                    <img src = "https://cdn4.iconfinder.com/data/icons/lifestyle-set-2/100/07a3c3443f894cb3fa7a93ee3c496233-512.png"/>
                                    <div>Return to Write Menu</div>
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
export default connect(mapStateToProps,null)(tCharacterBoard);