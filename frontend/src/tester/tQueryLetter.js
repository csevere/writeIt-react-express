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



class tQueryLetter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // registerMessage: "",
      // nameError: null,
      // emailError: null,
      // formError: false
    }
    this.handleQueryLetter = this.handleQueryLetter.bind(this);
    
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
        book: book
      });
      this.props.history.push(`/write/${book}`);
    }
  }

 
    render(){
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    console.log(this.props)

        return(
            <div>
              <Grid className = "writemenucat text-center ch-forms">
                <Row>
                  <Col sm = {8} md = {10} className = "ch-forms-2 col-md-offset-3">
                    <Slider {...settings}>
                      <div className = "slick-form 1">
                        <Form onSubmit={this.handleQueryLetter}>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Have you researched the agent and the type of authods he/she represents?</ControlLabel>
                                <FormControl id="query_clarity" componentClass="textarea" placeholder="query_clarity" />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>In setting up the story, specify exactly what your character wants the most in the world?</ControlLabel>
                                <FormControl id="query_boring" componentClass="textarea" placeholder="query_boring" />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Specify what's getting in the way of your character's goals?</ControlLabel>
                                <FormControl id="query_balance" componentClass="textarea" placeholder="query_balance" />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Whats at stake if your character fails?</ControlLabel>
                                <FormControl id="query_stakes" componentClass="textarea" placeholder="query_stakes" />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>How can you show rather than tell the agent about your main character?</ControlLabel>
                                <FormControl id="query_advance" componentClass="textarea" placeholder="query_advance" />
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
                                  <FormControl id="query_resolve" componentClass="textarea" placeholder="query_resolve" />
                              </FormGroup>
                              <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>What are the stats of your book: Genre,target audience, word count?</ControlLabel>
                                  <FormControl id="query_voice" componentClass="textarea" placeholder="query_voice" />
                              </FormGroup>
                              <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>What comtemporary titles match your book?</ControlLabel>
                                  <FormControl id="query_action" componentClass="textarea" placeholder="query_action" />
                              </FormGroup>
                              <FormGroup controlId= "formControlsTextarea">
                                <ControlLabel>Is your bio too long?</ControlLabel>
                                  <FormControl id="query_personality" componentClass="textarea" placeholder="query_personality" />
                              </FormGroup>
                              <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Which sentences generate multiple questions? Rewrite them here.</ControlLabel>
                                  <FormControl id="query_romance" componentClass="textarea" placeholder= "query_romance" />
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
                            <Link to = "/writeMenu" className = "return-writemenu">
                              <img src = "https://cdn4.iconfinder.com/data/icons/lifestyle-set-2/100/07a3c3443f894cb3fa7a93ee3c496233-512.png"/>
                              <div>Return to Write Menu</div>
                            </Link>
                          </Col> 
                        </Grid>

                        <Grid className = "fourth-row-right">
                          <Col md = {3} className = "col-md-offset-8">
                            <Link to = "/qlboard" className = "qlboard">
                              <img src = "https://cdn4.iconfinder.com/data/icons/office-34/256/10-512.png"/>
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
export default connect(mapStateToProps,mapDispatchToProps)(tQueryLetter);

