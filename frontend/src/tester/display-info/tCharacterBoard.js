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
                <div className="text-center">


                    <div>
                        <div id = "one">Name:</div>
                        <div>{characters.name}</div>
                    </div>

                    <div>
                        <div id = "two">Race:</div>
                        <div>{characters.race}</div>
                    </div>

                    <div>
                        <div id = "three">Age</div>
                        <div>{characters.age}</div>
                    </div>

                    <div>
                        <div id = "four">Birthday:</div>
                        <div>{characters.birthday}</div>
                    </div>

                    <div>
                        <div id = "five">General Physical Description:</div>
                        <div>{characters.physical_desc}</div>
                    </div>






                    <div>
                        <div id = "one">Hometown:</div>
                        <div>{characters.hometown}</div>
                    </div>

                    <div>
                        <div id = "two">Neighborhood Type:</div>
                        <div>{characters.type_of_home}</div>
                    </div>

                    <div>
                        <div id = "three">Name and Occupation of Father:</div>
                        <div>{characters.father_info}</div>
                    </div>

                    <div>
                        <div id = "four">Name and Occupation of Mother:</div>
                        <div>{characters.mother_info}</div>
                    </div>

                    <div>
                        <div id = "five">Siblings:</div>
                        <div>{characters.sibling_info}</div>
                    </div>






                    <div>
                        <div id = "one">Close Relatives:</div>
                        <div>{characters.relatives}</div>
                    </div>

                    <div>
                        <div id = "two">Best Friends:</div>
                        <div>{characters.friends}</div>
                    </div>

                    <div>
                        <div id = "three">Enemies:</div>
                        <div>{characters.enemies}</div>
                    </div>

                    <div>
                        <div id = "four">Mentor:</div>
                        <div>{characters.mentor}</div>
                    </div>

                    <div>
                        <div id = "five">Hobbies:</div>
                        <div>{characters.hobbies}</div>



                    </div>

                    <div>
                        <div id = "one">Dress Style:</div>
                        <div>{characters.dress}</div>
                    </div>

                    <div>
                        <div id = "two">Leader or Follower:</div>
                        <div>{characters.leader_follower}</div>
                    </div>

                    <div>
                        <div id = "three">Strongest Postive Trait:</div>
                        <div>{characters.positive_traits}</div>
                    </div>

                    <div>
                        <div id = "four">Strongest Negative Trait:</div>
                        <div>{characters.negative_traits}</div>
                    </div>

                    <div>
                        <div id = "five">Temper:</div>
                        <div>{characters.temper}</div>



                    </div>



                    <div>
                        <div id = "one">Star Sign:</div>
                        <div>{characters.star_sign}</div>
                    </div>

                    <div>
                        <div id = "two">Personality Type:</div>
                        <div>{characters.personality}</div>
                    </div>

                    <div>
                        <div id = "three">Life Philosopy:</div>
                        <div>{characters.philosophy}</div>
                    </div>

                    <div>
                        <div id = "four">Ambitions:</div>
                        <div>{characters.ambitions}</div>
                    </div>

                    <div>
                        <div id = "five">Likeable or unlikeable:</div>
                        <div>{characters.liked_disliked}</div>
                        <br/><br/>


                    </div>



                    <br/>
                    <div><br/><Link to = {edit} className = "chboard">
                        <Button className = "btn" type="button">
                            Edit Character
                        </Button>
                    </Link>	<Button className = "btn" type="button" onClick={()=>{this.deleteCharacter(characters.id)}}>
                        Delete Character
                    </Button></div>






                </div>


            )
        })

        if(charactersArray.length === 0){
            var textHeader = "It doesn't exist. Go back and create one!"
        }else{
            var textHeader = "Your Chapter Responses";
        }



        return(
            <div>
                <h1>{textHeader}</h1>
                {charactersArray}


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
export default connect(mapStateToProps,null)(tCharacterBoard);