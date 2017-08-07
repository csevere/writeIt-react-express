import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlotAction from '../actions/PlotAction';
import ChapterAction from '../actions/ChaptersAction';
import $ from 'jquery';


class Chapters extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chapterData: {
                scene_number: '',
                scene_plot: '',
                scene_char1: '',
                scene_dialogue: '',
                scene_conflict: '',
                relevant_dialogue: '',
                char_thought: '',
                pov: '',
                pov_char: '',
                setting: '',
                setting_char: '',
                setting_plot: '',
                setting_rev: '',
                scene_mood: '',
                scene_char2: '',
            }
        }
        this.handleChapters = this.handleChapters.bind(this);
        this.changeChapter = this.changeChapter.bind(this);

    }

    handleChapters(event){
        event.preventDefault();

        var error = false;

        var scene_number = document.getElementById('scene_number').value;
        var scene_plot = document.getElementById('scene_plot').value;
        var scene_char1 = document.getElementById('scene_char1').value;
        var scene_dialogue = document.getElementById('scene_dialogue').value;
        var scene_conflict = document.getElementById('scene_conflict').value;
        var relevant_dialogue = document.getElementById('relevant_dialogue').value;
        var char_thought = document.getElementById('char_thought').value;
        var pov = document.getElementById('pov').value;
        var pov_char= document.getElementById('pov_char').value;
        var setting = document.getElementById('setting').value;
        var setting_char = document.getElementById('setting_char').value;
        var setting_plot = document.getElementById('setting_plot').value;
        var setting_rev = document.getElementById('setting_rev').value;
        var scene_mood = document.getElementById('scene_mood').value;
        var scene_char2 = document.getElementById('scene_char2').value;

        var username = this.props.registerResponse.name;
        var book = this.props.match.params.book;
        var id = this.props.location.search.slice(4);






        // console.log(name);
        if(error){
            console.log("ERROR!!!")
            // this.setState({
            //   formError: true,
            //   nameError: nameError
            // })
            console.log(error);
        }else{
            this.props.chapterAction({
                scene_number: scene_number,
                scene_plot: scene_plot,
                scene_char1: scene_char1,
                scene_dialogue: scene_dialogue,
                scene_conflict: scene_conflict,
                relevant_dialogue: relevant_dialogue,
                char_thought: char_thought,
                pov: pov,
                pov_char: pov_char,
                setting: setting_char,
                setting_plot: setting_plot,
                setting_rev: setting_rev,
                setting_char: setting_char,
                scene_mood: scene_mood,
                scene_char2: scene_char2,
                username: username,
                book: book,
                id: id


            });
            this.props.history.push(`/chapboard/${book}`);
        }

    }

    componentDidMount(){

        //console.log(this.props.location.search);
        if(this.props.location.search.length !== 0){
            var id = this.props.location.search.slice(4);
            console.log(id);
            $.getJSON(`http://localhost:5000/chapters?id=${id}`, (serverData)=>{
                // log the JSON response from Express
                //console.log(serverData);
                this.setState({
                    chapterData: serverData[0]
                })
            })
        }
    }

    changeChapter(event){
        //console.dir(event.target)

        var propName = event.target.id
        console.dir(event)
        console.dir(propName)
        

        var stateCopy = this.state.chapterData;

        stateCopy[propName] = event.target.value

        this.setState({
            chapterData: stateCopy

        })
    }



    render(){
        console.log(this.state.chapterData)
        var scene_number = this.state.chapterData.scene_number;
        console.log(scene_number);
        var scene_plot = this.state.chapterData.scene_plot;
        var scene_char1 = this.state.chapterData.scene_char1;
        var scene_dialogue = this.state.chapterData.scene_dialogue;
        var scene_conflict = this.state.chapterData.scene_conflict;
        var relevant_dialogue = this.state.chapterData.relevant_dialogue;
        var char_thought = this.state.chapterData.char_thought;
        var pov = this.state.chapterData.pov;
        var pov_char= this.state.chapterData.pov_char;
        var setting = this.state.chapterData.setting;
        var setting_char = this.state.chapterData.setting_char;
        var setting_plot = this.state.chapterData.setting_plot;
        var setting_rev = this.state.chapterData.setting_rev;
        var scene_mood = this.state.chapterData.scene_mood;
        var scene_char2 = this.state.chapterData.scene_char2;


        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        var writeMenu = '/write/' + this.props.match.params.book;
        var chapterBoard = '/chapboard/' + this.props.match.params.book;
        return(
            <div>
                <Grid className = "writemenucat text-center ch-forms">
                    <Row>
                        <Col sm = {8} md = {10} className = "ch-forms-2 col-md-offset-3">
                            <Slider {...settings}>

                                <div className = "slick-form 1">
                                    <Form onSubmit={this.handleChapters} >
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What is the point of the chapter in one sentence?</ControlLabel>
                                            <FormControl value={scene_number} id='scene_number' componentClass="textarea" placeholder='scene_number' onChange={this.changeChapter}/>

                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea" defaultValue={scene_plot}>
                                            <ControlLabel>How do the scenes directly affect the plot or subplot?</ControlLabel>
                                            <FormControl value={scene_plot} id="scene_plot" type='input'   componentClass="textarea" placeholder="scene_plot" onChange={this.changeChapter}/>
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How do the scenes directly affect character development?</ControlLabel>
                                            <FormControl value={scene_char1} id="scene_char1" componentClass="textarea" placeholder="scene_char1" onChange={this.changeChapter}/>
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How do the characters personalities come out through the dialogue?</ControlLabel>
                                            <FormControl value={scene_dialogue} id="scene_dialogue" componentClass="textarea" placeholder="scene_dialogue" onChange={this.changeChapter}/>

                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What are the major conflicts in the scenes?</ControlLabel>
                                            <FormControl value={scene_conflict} id="scene_conflict" componentClass="textarea" placeholder="scene_conflict" onChange={this.changeChapter}/>
                                                {scene_conflict}
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className = "slick-form 2">
                                    <Form onSubmit={this.handleChapters}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Are there places where dialogue could be replaced with action instead?</ControlLabel>
                                            <FormControl value={relevant_dialogue} id="relevant_dialogue" componentClass="textarea" placeholder="relevant_dialogue" onChange={this.changeChapter}/>
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How much character thought and reflection is there? Is there too much?</ControlLabel>
                                            <FormControl value={char_thought} id="char_thought" componentClass="textarea" placeholder="char_thought" onChange={this.changeChapter}/>
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What is the narrative POV? First, second, omniscient?</ControlLabel>
                                            <FormControl value={pov} id="pov" componentClass="textarea" placeholder="pov" onChange={this.changeChapter}/>
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What is the POV character for the scenes?Protagonist, antagonist, or ally?</ControlLabel>
                                            <FormControl value={pov_char} id="pov_char" componentClass="textarea" placeholder="pov_char" onChange={this.changeChapter}/>
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What is the setting for each scene?</ControlLabel>
                                            <FormControl value={setting} id="setting" componentClass="textarea" placeholder="setting" onChange={this.changeChapter}/>
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className = "slick-form 3">
                                    <Form onSubmit={this.handleChapters}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How important is the setting to the character?</ControlLabel>
                                            <FormControl value={setting_char} id="setting_char" componentClass="textarea" placeholder="setting_char" onChange={this.changeChapter}/>
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How important is the setting to the plot?</ControlLabel>
                                            <FormControl value={setting_plot} id="setting_plot" componentClass="textarea" placeholder="setting_plot" onChange={this.changeChapter}/>
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How do the characters interact with the setting?</ControlLabel>
                                            <FormControl value={setting_rev} id="setting_rev" componentClass="textarea" placeholder="setting_rev" onChange={this.changeChapter}/>
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What kind of mood do the scenes have?</ControlLabel>
                                            <FormControl value={scene_mood} id="scene_mood" componentClass="textarea" placeholder="scene_mood" onChange={this.changeChapter}/>
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Are the characters actions predictable or complex?</ControlLabel>
                                            <FormControl value={scene_char2} id="scene_char2" componentClass="textarea" placeholder="scene_char2" onChange={this.changeChapter}/>
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>
                            </Slider>

                        </Col>

                        <Row>
                            <Grid className = "fourth-row-left">
                                <Col md = {3}>
                                    <Link to = {writeMenu} className = "return-writemenu">
                                        <img src = "/images/writemenu-icon.png"/>
                                        <div>Return to Write Menu</div>
                                    </Link>
                                </Col>
                            </Grid>

                            <Grid className = "fourth-row-right">
                                <Col md = {3}>
                                    <Link to = {chapterBoard} className = "chboard">
                                        <img src = "/images/viewboard-icon.png"/>
                                        <div>View Chapter</div>
                                    </Link>
                                </Col>
                            </Grid>


                        </Row>

                    </Row>
                </Grid>
            </div>

        )
    }
}


function mapStateToProps(state){
    return{
        chapterResponse: state.chapterReducer,
        registerResponse: state.registerReducer,
        newBookResponse: state.newBookReducer

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        chapterAction: ChapterAction
    }, dispatch)
}

// export default tChapters;
export default connect(mapStateToProps,mapDispatchToProps)(Chapters);



