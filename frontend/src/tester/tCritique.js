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


class tCritique extends Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     registerMessage: "",
  //     nameError: null,
  //     emailError: null,
  //     formError: false
  //   }
  //   this.handlePlot = this.handlePlot.bind(this);
    
  // }

  // handlePlot(event){
  //   event.preventDefault();
    
  //   var error = false;

  //   var name = event.target[0].value;
  //   var race = event.target[1].value;
  //   var age = event.target[2].value;
  //   var birthday = event.target[3].value;
  //   // var physical_desc = event.target[4].value;
 
  //   var username = this.props.registerResponse.name;
  //   console.log(username);
  //   //Name
  //   if(name.length < 1){
  //     var nameError = "error"; 
  //     error=true;
  //   }
  //   else{ 
  //     var nameError = "success"
  //   }

  //   Email
  //   if(name.length < 3){var emailError = "error"; error=true}
  //   else{var emailError = "success"}


  //   // console.log(name);
  //   if(error){
  //      console.log("HERE!!!")
  //     this.setState({
  //       formError: true,
  //       nameError: nameError
  //     }) 

  //   console.log(error);
  //   }else{    
  //     this.props.characterAction({
  //       name: name,
  //       age: age,
  //       race: race,
  //       birthday: birthday,
  //       // physical_desc: physical_desc,
  //       username: username
        
  //     });
  //   }

  // }

 
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
				<Grid className = "character text-center ch-forms">
					<Row>
              <Col sm = {8} md = {10} className = "ch-forms-2 col-md-offset-3">
                <Slider {...settings}>

                  <div className = "slick-form 1">
        						<Form onSubmit={this.handleCritqiue}>
        							<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Are there any parts in the sample that you found confusing?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="confusing sections" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Did you find any section boring or repetitious?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="repetitious sections" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Is there a right balance of action, dialogue, and description?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="balance" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Does the sample, scene, or chapter advance the story or develop character?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="advancing the story" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Are more plot questions raised before a plot question is resolved?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="too many plot questions raised?" />
            						</FormGroup>

            						<Button className = "btn" type="submit">
              							submit
            						</Button>  		   	    
        						  </Form>
                    </div> 

                    <div className = "slick-form 2">
                      <Form onSubmit={this.handleCritqiue}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Do the characters all sound the same or do they have unique voices?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="unique voices for characters" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Are the actions of the characters reasonable, fitting with their personalities?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="character personality fit" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Do the characters have clear strength and weaknesses affected by the plot?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="real strengths and weaknesses" />
                          </FormGroup>


                          <FormGroup controlId= "formControlsTextarea">
                            <ControlLabel>If there’s a romantic relationship, is the emotional conflict strong enough for the entire work?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="romance arc strong?" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Is the conflict between the main character and the antagonist strong enough?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder= "conflit strong?" />
                          </FormGroup>

                          <Button className = "btn" type="submit">
                              submit
                          </Button>             
                        </Form>
                      </div> 

                      <div className = "slick-form 3">
                        <Form onSubmit={this.handleCritqiue}>
                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Does the opponent push the main character to his or her limits?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="protagonist pushed to limits?" />
                          </FormGroup>

                          <FormGroup controlId= "formControlsTextarea">
                            <ControlLabel>Would a scene work better in the point of view of another character?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="character pov" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Do the sentences vary in length?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="sentence length" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Is there more telling than showing?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="show don't tell" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>If sci-fi, fantasy, or paranormal element, does the writer build a convincing world?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="good world-building?" />
                          </FormGroup>


                          <Button className = "btn" type="submit">
                              submit
                          </Button>             
                        </Form>
                      </div> 

                  </Slider> 

                </Col> 
            </Row>	
		      </Grid>   
		    </div>

		)
	}
}


// function mapStateToProps(state){
//   return{
//     characterResponse: state.characterReducer,
//     registerResponse: state.registerReducer

//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     characterAction: CharacterAction
//   }, dispatch)
// }

export default tCritique;