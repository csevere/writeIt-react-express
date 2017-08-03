/**
 * Created by mephisto on 7/29/17.
 */import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SynopsisAction from '../actions/SynopsisAction';
import $ from 'jquery';


class Synopsis extends Component{
    constructor(props) {
        super(props);
        this.state = {
            synopsisData: {
                synop_beg1: '',
                synop_prot: '',
                synop_prob: '',
                synop_char: '',
                synop_change1: '',
                synop_reader: '',
                synop_impact: '',
                synop_change2: '',
                synop_rel_start: '',
                synop_test: '',
                synop_rel_conflict: '',
                synop_rel_end: '',
                synop_issue: '',
                synop_theme: '',
                synop_message: ''

            }
            // nameError: null,
            // emailError: null,
            // formError: false
        }
        this.handleSynopsis = this.handleSynopsis.bind(this);
        this.changeSynop = this.changeSynop.bind(this);

    }

    handleSynopsis(event){
        event.preventDefault();

        var error = false;

        var synop_beg1 = document.getElementById('synop_beg1').value;
        var synop_prot = document.getElementById('synop_prot').value;
        var synop_prob = document.getElementById('synop_prob').value;
        var synop_char = document.getElementById('synop_char').value;
        var synop_change1= document.getElementById('synop_change1').value;
        var synop_reader = document.getElementById('synop_reader').value;
        var synop_impact = document.getElementById('synop_impact').value;
        var synop_change2 = document.getElementById('synop_change2').value;
        var synop_rel_start = document.getElementById('synop_rel_start').value;
        var synop_test = document.getElementById('synop_test').value;
        var synop_rel_conflict = document.getElementById('synop_rel_conflict').value;
        var synop_rel_end = document.getElementById('synop_rel_end').value;
        var synop_issue = document.getElementById('synop_issue').value
        var synop_theme = document.getElementById('synop_theme').value;
        var synop_message = document.getElementById('synop_message').value;

        var username = this.props.registerResponse.name;
        var book = this.props.match.params.book;
        var id = this.props.location.search.slice(4);



        // var username = this.props.registerResponse.name;
        // console.log(username);
        // //Name
        // if(name.length < 1){
        //   var nameError = "error";
        //   error=true;
        // }
        // else{
        //   var nameError = "success"
        // }

        // Email
        // if(name.length < 3){var emailError = "error"; error=true}
        // else{var emailError = "success"}


        // console.log(name);
        if(error){
            console.log("ERROR!!!")
            // this.setState({
            //   formError: true,
            //   nameError: nameError
            // })

            console.log(error);
        }else{
            this.props.synopsisAction({
                synop_beg1: synop_beg1,
                synop_prot: synop_prot,
                synop_prob: synop_prob,
                synop_char: synop_char,
                synop_change1: synop_change1,
                synop_reader: synop_reader,
                synop_impact: synop_impact,
                synop_change2: synop_change2,
                synop_rel_start: synop_rel_start,
                synop_test: synop_test,
                synop_rel_conflict: synop_rel_conflict,
                synop_rel_end: synop_rel_end,
                synop_issue: synop_issue,
                synop_theme: synop_theme,
                synop_message: synop_message,
                username: username,
                book: book,
                id: id

            });
            this.props.history.push(`/synopboard/${book}`);
        }

    }

    componentDidMount(){

        //console.log(this.props.location.search);
        if(this.props.location.search.length !== 0){
            var id = this.props.location.search.slice(4);
            console.log(id);
            $.getJSON(`http://localhost:5000/synopsis?id=${id}`, (serverData)=>{
                // log the JSON response from Express
                //console.log(serverData);
                this.setState({
                    synopsisData: serverData[0]
                })
            })
        }
    }

    changeSynop(event){
        //console.dir(event.target)
        var propName = event.target.id
        console.dir(event)
        console.dir(propName)
        
        var stateCopy = this.state.synopsisData;

        stateCopy[propName] = event.target.value

        this.setState({
            synopsisData: stateCopy

        })
    }



    render(){
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }


        var synop_beg1 = this.state.synopsisData.synop_beg1;
        var synop_prot = this.state.synopsisData.synop_prot;
        var synop_prob = this.state.synopsisData.synop_prob;
        var synop_char = this.state.synopsisData.synop_char;
        var synop_change1= this.state.synopsisData.synop_change1;
        var synop_reader = this.state.synopsisData.synop_reader;
        var synop_impact = this.state.synopsisData.synop_impact;
        var synop_change2 = this.state.synopsisData.synop_change2;
        var synop_rel_start = this.state.synopsisData.synop_rel_start;
        var synop_test = this.state.synopsisData.synop_test;
        var synop_rel_conflict = this.state.synopsisData.synop_rel_conflict;
        var synop_rel_end = this.state.synopsisData.synop_rel_end;
        var synop_issue = this.state.synopsisData.synop_issue;
        var synop_theme = this.state.synopsisData.synop_theme;
        var synop_message = this.state.synopsisData.synop_message;


        var writeMenu = '/write/' + this.props.match.params.book;
        var synopsisBoard = '/synopBoard/' + this.props.match.params.book;
        return(
            <div>
                <Grid className = "writemenucat text-center ch-forms">
                    <Row>
                        <Col sm = {8} md = {10} className = "ch-forms-2 col-md-offset-3">
                            <Slider {...settings}>

                                <div className = "slick-form 1">
                                    <Form onSubmit={this.handleSynopsis}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Where and when does the story take place?</ControlLabel>
                                            <FormControl value={synop_beg1} id = "synop_beg1" componentClass="textarea" onChange={this.changeSynop} />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Who is the protagonist?</ControlLabel>
                                            <FormControl value={synop_prot} id = "synop_prot" componentClass="textarea" onChange={this.changeSynop} />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What major and immediate problem is the protagonist facing?</ControlLabel>
                                            <FormControl value={synop_prob} id = "synop_prob" componentClass="textarea" onChange={this.changeSynop} />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Does your protagonist decide to take a leap of faith to change?</ControlLabel>
                                            <FormControl value={synop_char} id = "synop_char" componentClass="textarea" onChange={this.changeSynop} />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How has the situation of your protagonist changed at the end of the novel?</ControlLabel>
                                            <FormControl value={synop_change1} id = "synop_change1" componentClass="textarea" onChange={this.changeSynop} />
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className = "slick-form 2">
                                    <Form onSubmit={this.handleSynopsis}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Will readers feel that your protagonist has made the right decision?</ControlLabel>
                                            <FormControl value={synop_reader} id = "synop_reader" componentClass="textarea" onChange={this.changeSynop}/>
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Who is the impact character for the protagonist?</ControlLabel>
                                            <FormControl value={synop_impact} id = "synop_impact" componentClass="textarea" onChange={this.changeSynop}/>
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How does the impact character influence the main character to change?</ControlLabel>
                                            <FormControl value={synop_change2} id = "synop_change2" componentClass="textarea" onChange={this.changeSynop}/>
                                        </FormGroup>


                                        <FormGroup controlId= "formControlsTextarea">
                                            <ControlLabel>Where does the relationship between the protagonist and the impact character stand in the beginning of the work?</ControlLabel>
                                            <FormControl value={synop_rel_start} id = "synop_rel_start" componentClass="textarea" onChange={this.changeSynop}/>
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How is their relationship tested throughout the story?</ControlLabel>
                                            <FormControl value={synop_test} id = "synop_test" componentClass="textarea" onChange={this.changeSynop}/>
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className = "slick-form 3">
                                    <Form onSubmit={this.handleSynopsis}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What is the biggest change in their relationship?</ControlLabel>
                                            <FormControl value={synop_rel_conflict} id = "synop_rel_conflict" componentClass="textarea" onChange={this.changeSynop}/>
                                        </FormGroup>

                                        <FormGroup controlId= "formControlsTextarea">
                                            <ControlLabel>How is their relationship different by the end of the story?</ControlLabel>
                                            <FormControl value={synop_rel_end} id = "synop_rel_end" componentClass="textarea" onChange={this.changeSynop}/>
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What issues does your character struggle with throughout the story?</ControlLabel>
                                            <FormControl value={synop_issue} id = "synop_issue" componentClass="textarea" onChange={this.changeSynop}/>
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What are the themes of your story?</ControlLabel>
                                            <FormControl value={synop_theme} id = "synop_theme" componentClass="textarea" onChange={this.changeSynop}/>
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What is the message or moral of your story?</ControlLabel>
                                            <FormControl value={synop_message} id = "synop_message" componentClass="textarea" onChange={this.changeSynop}/>
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
                                <Col md = {3} className = "col-md-offset-8">
                                    <Link to = {synopsisBoard} className = "sboard">
                                        <img src = "/images/viewboard-icon.png"/>
                                        <div>View Synopsis</div>
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
        // characterResponse: state.characterReducer,
        registerResponse: state.registerReducer,
        synopsisResponse: state.synopsisReducer,
        newBookResponse: state.newBookReducer

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        synopsisAction: SynopsisAction
    }, dispatch)
}

// export default tPlot;
export default connect(mapStateToProps,mapDispatchToProps)(Synopsis);


// export default tSynopsis;