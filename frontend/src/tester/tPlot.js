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





class tPlot extends Component{
  constructor(props) {
    super(props);
    this.state = {
      registerMessage: "",
      nameError: null,
      emailError: null,
      formError: false
    }
    this.handleCharacters = this.handleCharacters.bind(this);
    
  }

  handleCharacters(event){
    event.preventDefault();
    
    var error = false;

    var name = event.target[0].value;
    var race = event.target[1].value;
    var age = event.target[2].value;
    var birthday = event.target[3].value;
    // var physical_desc = event.target[4].value;
 
    var username = this.props.registerResponse.name;
    console.log(username);
    //Name
    if(name.length < 1){
      var nameError = "error"; 
      error=true;
    }
    else{ 
      var nameError = "success"
    }

    //Email
    // if(name.length < 3){var emailError = "error"; error=true}
    // else{var emailError = "success"}


    // console.log(name);
    if(error){
       console.log("HERE!!!")
      this.setState({
        formError: true,
        nameError: nameError
      }) 

    console.log(error);
    }else{    
      this.props.characterAction({
        name: name,
        age: age,
        race: race,
        birthday: birthday,
        // physical_desc: physical_desc,
        username: username
        
      });
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
				<Grid className = "character text-center ch-forms">
					<Row>
              <Col sm = {8} md = {10} className = "ch-forms-2 col-md-offset-3">
                <Slider {...settings}>

                  <div className = "slick-form 1">
        						<Form onSubmit={this.handleCharacters}>
        							<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Which events in the book are the major ones/the ones advancing the plot?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="main-plot" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>How do the minor events contribute to the main plot?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="subplot" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>What justifies the subplots if there are any?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="subplot-reasons" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>What direct actions from the main characters affect the plot?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="direct-actions" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>What indirect actions from the main character affect the plot?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="indirect-actions" />
            						</FormGroup>

            						<Button className = "btn" type="submit">
              							submit
            						</Button>  		   	    
        						  </Form>
                    </div> 

                    <div className = "slick-form 2">
                      <Form onSubmit={this.handleCharacters}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What are the characters main motivations?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="motivation" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What type of plot?Character,plot, or idea driven?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="plot-type" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Do the events unfold chronologically or non-chronologically?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="plot-order" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What are the critical points of foreshadowing?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="foreshadow" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>How is the plot credible according to the rules of the book's world?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="credibility" />
                          </FormGroup>

                          <Button className = "btn" type="submit">
                              submit
                          </Button>             
                        </Form>
                      </div> 

                      <div className = "slick-form 3">
                        <Form onSubmit={this.handleCharacters}>
                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Are all flashbacks strong or do some lessen the dramatic movement of the story?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="flashbacks" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What is the main character's overall arc or journey?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="journey" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What are the stakes for the main characters?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="stakes" />
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

export default tPlot;