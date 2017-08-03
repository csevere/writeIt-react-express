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
import QueryLetterAction from '../actions/QueryLetterAction';
import $ from 'jquery';



class QueryLetter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            queryLetterData: {
                query_clarity: '',
                query_boring: '',
                query_balance: '',
                query_stakes: '',
                query_advance: '',
                query_resolve: '',
                query_voice: '',
                query_action: '',
                query_personality: '',
                query_romance: '',
            }
            // nameError: null,
            // emailError: null,
            // formError: false
        }
        this.handleQueryLetter = this.handleQueryLetter.bind(this);
        this.changeQueryLetter = this.changeQueryLetter.bind(this);

    }

    handleQueryLetter(event){
        event.preventDefault();

        var error = false;
        var query_clarity = document.getElementById('query_clarity').value;
        var query_boring = document.getElementById('query_boring').value;
        var query_balance = document.getElementById('query_balance').value;
        var query_stakes= document.getElementById('query_stakes').value;
        var query_advance = document.getElementById('query_advance').value;
        var query_resolve = document.getElementById('query_resolve').value;
        var query_voice = document.getElementById('query_voice').value;
        var query_action = document.getElementById('query_action').value;
        var query_personality = document.getElementById('query_personality').value;
        var query_romance = document.getElementById('query_romance').value;
        var username = this.props.registerResponse.name;
        var book = this.props.match.params.book;
        var id = this.props.location.search.slice(4);
        //console.log(book);


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
            this.props.queryLetterAction({
                query_clarity: query_clarity,
                query_boring: query_boring,
                query_balance: query_balance,
                query_stakes: query_stakes,
                query_advance: query_advance,
                query_resolve: query_resolve,
                query_voice: query_voice,
                query_action: query_action,
                query_personality: query_personality,
                query_romance: query_romance,
                username: username,
                book: book,
                id: id
            });
            this.props.history.push(`/queryboard/${book}`);
        }
    }

    componentDidMount(){

        //console.log(this.props.location.search);
        if(this.props.location.search.length !== 0){
            var id = this.props.location.search.slice(4);
            console.log(id);
            $.getJSON(`http://localhost:5000/queryletter?id=${id}`, (serverData)=>{
                // log the JSON response from Express
                //console.log(serverData);
                this.setState({
                    queryLetterData: serverData[0]
                })
            })
        }
    }

    changeQueryLetter(event){
        //console.dir(event.target)
        var propName = event.target.id
        console.dir(event)
        console.dir(propName)
        
        var stateCopy = this.state.queryLetterData;

        stateCopy[propName] = event.target.value

        this.setState({
            queryLetterData: stateCopy

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

        var query_clarity = this.state.queryLetterData.query_clarity;
        var query_boring = this.state.queryLetterData.query_boring;
        var query_balance = this.state.queryLetterData.query_balance;
        var query_stakes = this.state.queryLetterData.query_stakes;
        var query_advance = this.state.queryLetterData.query_advance;
        var query_resolve = this.state.queryLetterData.query_resolve;
        var query_voice = this.state.queryLetterData.query_voice;
        var query_action = this.state.queryLetterData.query_action;
        var query_personality = this.state.queryLetterData.query_personality;
        var query_romance = this.state.queryLetterData.query_romance;

        var writeMenu = '/write/' + this.props.match.params.book;
        var queryLetterBoard = '/queryboard/' + this.props.match.params.book;

        return(
            <div>
                <Grid className = "writemenucat text-center ch-forms">
                    <Row>
                        <Col sm = {8} md = {10} className = "ch-forms-2 col-md-offset-3">
                            <Slider {...settings}>
                                <div className = "slick-form 1">
                                    <Form onSubmit={this.handleQueryLetter}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Have you researched the genres the agent represents?</ControlLabel>
                                            <FormControl value={query_clarity} id="query_clarity" componentClass="textarea" placeholder="query_clarity" onChange={this.changeQueryLetter}/>
                                        </FormGroup>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What does your character want the most in the world?</ControlLabel>
                                            <FormControl value={query_boring} id="query_boring" componentClass="textarea" placeholder="query_boring" onChange={this.changeQueryLetter}/>
                                        </FormGroup>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Specify what&#39;s getting in the way of your character&#39;s goals?</ControlLabel>
                                            <FormControl value={query_balance} id="query_balance" componentClass="textarea" placeholder="query_balance" onChange={this.changeQueryLetter}/>
                                        </FormGroup>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What&#39;s at stake if your character fails?</ControlLabel>
                                            <FormControl value={query_stakes} id="query_stakes" componentClass="textarea" placeholder="query_stakes" onChange={this.changeQueryLetter}/>
                                        </FormGroup>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How can you show rather than tell the agent about your main character?</ControlLabel>
                                            <FormControl value={query_advance} id="query_advance" componentClass="textarea" placeholder="query_advance" onChange={this.changeQueryLetter}/>
                                        </FormGroup>
                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>

                                </div>
                                <div className = "slick-form 2">
                                    <Form onSubmit={this.handleQueryLetter}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How can you show your characters emotional journey from start to end?</ControlLabel>
                                            <FormControl value={query_resolve} id="query_resolve" componentClass="textarea" placeholder="query_resolve" onChange={this.changeQueryLetter}/>
                                        </FormGroup>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What are the stats of your book: Genre,target audience, word count?</ControlLabel>
                                            <FormControl value={query_voice} id="query_voice" componentClass="textarea" placeholder="query_voice" onChange={this.changeQueryLetter}/>
                                        </FormGroup>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What comtemporary titles match your book?</ControlLabel>
                                            <FormControl value={query_action} id="query_action" componentClass="textarea" placeholder="query_action" onChange={this.changeQueryLetter}/>
                                        </FormGroup>
                                        <FormGroup controlId= "formControlsTextarea">
                                            <ControlLabel>Is your bio too long?</ControlLabel>
                                            <FormControl value={query_personality} id="query_personality" componentClass="textarea" placeholder="query_personality" onChange={this.changeQueryLetter}/>
                                        </FormGroup>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Which sentences generate multiple questions? Rewrite them here.</ControlLabel>
                                            <FormControl value={query_romance} id="query_romance" componentClass="textarea" placeholder= "query_romance" onChange={this.changeQueryLetter}/>
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
                                    <Link to = {queryLetterBoard} className = "qlboard">
                                        <img src = "/images/viewboard-icon.png"/>
                                        <div>View Query Letter</div>
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
        queryLetterResponse: state.queryLetterReducer,
        registerResponse: state.registerReducer,
        newBookResponse: state.newBookReducer
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        queryLetterAction: QueryLetterAction
    }, dispatch)
}
// export default tQueryLetter;
export default connect(mapStateToProps,mapDispatchToProps)(QueryLetter);

