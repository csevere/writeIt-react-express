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


class tQueryLetter extends Component{
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
        						<Form onSubmit={this.handlePlot}>
        							<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Have you researched the agent and the type of authods he/she represents?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="query-clarity" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>In setting up the story, specify exactly what your character wants the most in the world?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="query-boring" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Specify what's getting in the way of your character's goals?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="query-balance" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>What's at stake if your character fails?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="Query-stakes" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>How can you show rather than tell the agent about your main character?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="query-advance" />
            						</FormGroup>

            						<Button className = "btn" type="submit">
              							submit
            						</Button>  		   	    
        						  </Form>
                    </div> 

                    <div className = "slick-form 2">
                      <Form onSubmit={this.handlePlot}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>How can you show your character's emotional journey from start to end?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="query-resolve" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What are the stats of your book: Genre,target audience, word count?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="query-voice" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What comtemporary titles match your book?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="query-action" />
                          </FormGroup>


                          <FormGroup controlId= "formControlsTextarea">
                            <ControlLabel>Is your bio too long?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="query-personality" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Which sentences generate multiple questions? Rewrite them here.</ControlLabel>
                              <FormControl componentClass="textarea" placeholder= "query-romance" />
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

export default tQueryLetter;