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





class tChapters extends Component{
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
             							<ControlLabel>What is the point of the chapter in one sentence?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="scene-number" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>How do the scenes directly affect the plot or subplot?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="scene-plot" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>How do the scenes directly affect character development?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="scene-char1" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>How do the characters personalities come out through the dialogue?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="scene-dialogue" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>What are the major conflicts in the scenes?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="scene-conflict" />
            						</FormGroup>

            						<Button className = "btn" type="submit">
              							submit
            						</Button>  		   	    
        						  </Form>
                    </div> 

                    <div className = "slick-form 2">
                      <Form onSubmit={this.handleCharacters}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Are there places where dialogue could be replaced with action instead?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="relevant-dialogue" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>How much character thought and reflection is there? Is there too much?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="char-thought" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What is the narrative POV? First, second, omniscient?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="pov" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What is the POV character for the scenes?Protagonist, antagonist, or ally?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="pov-char" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What is the setting for each scene?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="setting" />
                          </FormGroup>

                          <Button className = "btn" type="submit">
                              submit
                          </Button>             
                        </Form>
                      </div> 

                      <div className = "slick-form 3">
                        <Form onSubmit={this.handleCharacters}>
                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>How important is the setting to the character?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="setting-char" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>How important is the setting to the plot?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="setting-plot" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>How do the characters interact with the setting?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="setting-rev" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What kind of mood do the scenes have?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="scene-mood" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Are the characters actions predictable or complex?</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="scene-char2" />
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

export default tChapters;