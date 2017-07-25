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





class tCharacter extends Component{
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
             							<ControlLabel>Name:</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="name" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Race:</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="race" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Age:</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="age" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Birthday:</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="birthday" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>General Physical Description:</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="description" />
            						</FormGroup>

            						<Button className = "btn" type="submit">
              							submit
            						</Button>  		   	    
        						  </Form>
                    </div> 

                    <div className = "slick-form 2">
                      <Form onSubmit={this.handleCharacters}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Hometown:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="hometown" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Neighborhood Type:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="neighborhood" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Name and Occupation of Father:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="father" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Name and Occupation of Mother:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="mother" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Siblings:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="siblings" />
                          </FormGroup>

                          <Button className = "btn" type="submit">
                              submit
                          </Button>             
                        </Form>
                      </div> 

                      <div className = "slick-form 3">
                        <Form onSubmit={this.handleCharacters}>
                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Close Relatives:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="relatives" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Best Friends:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="friends" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Enemies:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="enemies" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Mentor:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="mentor" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Hobbies:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="hobbies" />
                          </FormGroup>

                          <Button className = "btn" type="submit">
                              submit
                          </Button>             
                        </Form>
                      </div> 

                      <div className = "slick-form 4">
                        <Form onSubmit={this.handleCharacters}>
                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Dress Style:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="dress-style" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Leader or Follower:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="leader or follower?" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Strongest Postive Trait:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="strongest positive" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Strongest Negative Trait:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="strongest negative" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Temper:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="chill, hot-headed, etc" />
                          </FormGroup>

                          <Button className = "btn" type="submit">
                              submit
                          </Button>             
                        </Form>
                      </div> 

                      <div className = "slick-form 5">
                        <Form onSubmit={this.handleCharacters}>
                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Star Sign:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="Aries, Capricorn, etc" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Personality Type:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="INFP, ESTP, etc" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Life Philosopy:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="zen, nihilism, etc" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Ambitions:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="goals, dreams, etc" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Likeable or unlikeable:</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="Will readers like or dislike? Why?" />
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

export default tCharacter;