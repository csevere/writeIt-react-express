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
import CritiqueAction from '../actions/CritiqueAction';


class tCritique extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // registerMessage: "",
      // nameError: null,
      // emailError: null,
      // formError: false
    }
    this.handleCritique = this.handleCritique.bind(this);
    
  }

  handleCritique(event){
    event.preventDefault();
    
    var error = false;

    var critique_clarity = document.getElementById('critique_clarity').value;
    var critique_boring = document.getElementById('critique_boring').value;
    var critique_balance = document.getElementById('critique_balance').value;
    var critique_advance = document.getElementById('critique_advance').value;
    var critique_resolve = document.getElementById('critique_resolve').value;
    var critique_voice = document.getElementById('critique_voice').value;
    var critique_action = document.getElementById('critique_action').value;
    var critique_personality = document.getElementById('critique_personality').value;
    var critique_romance = document.getElementById('critique_romance').value;
    var critique_conflict = document.getElementById('critique_conflict').value;
    var critique_limit = document.getElementById('critique_limit').value;
    var critique_pov = document.getElementById('critique_pov').value;
    var critique_sent = document.getElementById('critique_sent').value;
    var critique_lang = document.getElementById('critique_lang').value;
    var critique_element = document.getElementById('critique_element').value;

    var username = this.props.registerResponse.name;
    var book = this.props.match.params.book;

 
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
      this.props.critiqueAction({
        critique_clarity: critique_clarity,
        critique_boring: critique_boring,
        critique_balance: critique_balance,
        critique_advance: critique_advance,
        critique_resolve: critique_resolve,
        critique_voice: critique_voice,
        critique_action: critique_action,
        critique_personality: critique_personality,
        critique_romance: critique_romance,
        critique_conflict: critique_conflict,
        critique_limit: critique_limit,
        critique_pov: critique_pov,
        critique_sent: critique_sent,
        critique_lang: critique_lang,
        critique_element: critique_element,
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
      var writeMenu = '/write/' + this.props.match.params.book;
      //console.log(this.props)
		return(
			<div>
				<Grid className = "writemenucat text-center ch-forms">
					<Row>
              <Col sm = {8} md = {10} className = "ch-forms-2 col-md-offset-3">
                <Slider {...settings}>

                  <div className = "slick-form 1">
        						<Form onSubmit={this.handleCritique}>
        							<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Are there any parts in the sample that you found confusing?</ControlLabel>
              							<FormControl id = "critique_clarity"  componentClass="textarea" placeholder="confusing sections" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Did you find any section boring or repetitious?</ControlLabel>
              							<FormControl id = "critique_boring" componentClass="textarea" placeholder="repetitious sections" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Is there a right balance of action, dialogue, and description?</ControlLabel>
              							<FormControl id = "critique_balance" componentClass="textarea" placeholder="balance" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Does the sample, scene, or chapter advance the story or develop character?</ControlLabel>
              							<FormControl id = "critique_advance" componentClass="textarea" placeholder="advancing the story" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Are more plot questions raised before a plot question is resolved?</ControlLabel>
              							<FormControl id = "critique_resolve" componentClass="textarea" placeholder="too many plot questions raised?" />
            						</FormGroup>

            						<Button className = "btn" type="submit">
              							submit
            						</Button>  		   	    
        						  </Form>
                    </div> 

                    <div className = "slick-form 2">
                      <Form onSubmit={this.handleCritique}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Do the characters all sound the same or do they have unique voices?</ControlLabel>
                              <FormControl id = "critique_voice" componentClass="textarea" placeholder="unique voices for characters" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Are the actions of the characters reasonable, fitting with their personalities?</ControlLabel>
                              <FormControl id = "critique_action" componentClass="textarea" placeholder="character personality fit" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Do the characters have clear strength and weaknesses affected by the plot?</ControlLabel>
                              <FormControl id = "critique_personality" componentClass="textarea" placeholder="real strengths and weaknesses" />
                          </FormGroup>


                          <FormGroup controlId= "formControlsTextarea">
                            <ControlLabel>If there’s a romantic relationship, is the emotional conflict strong enough for the entire work?</ControlLabel>
                              <FormControl id = "critique_romance" componentClass="textarea" placeholder="romance arc strong?" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Is the conflict between the main character and the antagonist strong enough?</ControlLabel>
                              <FormControl id = "critique_conflict" componentClass="textarea" placeholder= "conflit strong?" />
                          </FormGroup>

                          <Button className = "btn" type="submit">
                              submit
                          </Button>             
                        </Form>
                      </div> 

                      <div className = "slick-form 3">
                        <Form onSubmit={this.handleCritique}>
                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Does the opponent push the main character to his or her limits?</ControlLabel>
                              <FormControl id = "critique_limit"componentClass="textarea" placeholder="protagonist pushed to limits?" />
                          </FormGroup>

                          <FormGroup controlId= "formControlsTextarea">
                            <ControlLabel>Would a scene work better in the point of view of another character?</ControlLabel>
                              <FormControl id = "critique_pov" componentClass="textarea" placeholder="character pov" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Do the sentences vary in length?</ControlLabel>
                              <FormControl id = "critique_sent" componentClass="textarea" placeholder="sentence length" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Is there more telling than showing?</ControlLabel>
                              <FormControl id = "critique_lang" componentClass="textarea" placeholder="show don't tell" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>If sci-fi, fantasy, or paranormal element, does the writer build a convincing world?</ControlLabel>
                              <FormControl id = "critique_element" componentClass="textarea" placeholder="good world-building?" />
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
                        <img src = "https://cdn4.iconfinder.com/data/icons/lifestyle-set-2/100/07a3c3443f894cb3fa7a93ee3c496233-512.png"/>
                        <div>Return to Write Menu</div>
                      </Link>
                    </Col> 
                  </Grid>

                  <Grid className = "fourth-row-right">
                    <Col md = {3} className = "col-md-offset-8">
                      <Link to = "/critboard" className = "critboard">
                        <img src = "https://cdn4.iconfinder.com/data/icons/office-34/256/10-512.png"/>
                        <div>View Critique</div>
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
    registerResponse: state.registerReducer,
    critiqueResponse: state.critiqueReducer,
    newBookResponse: state.newBookReducer

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    critiqueAction: CritiqueAction
  }, dispatch)
}

// export default tCritique;
export default connect(mapStateToProps,mapDispatchToProps)(tCritique);



