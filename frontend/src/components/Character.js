import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import About from './About';
import ScrollableAnchor from 'react-scrollable-anchor';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';


class Character extends Component{
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
    console.log(this.props)
		return(
			<div>
				<Grid className = "character">
					<Row>
						<Form onSubmit={this.handleCharacters} className = "ch-forms text-center">
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

export default Character;
// export default connect(mapStateToProps,mapDispatchToProps)(Character);