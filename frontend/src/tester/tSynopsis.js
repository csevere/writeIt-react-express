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


class tSynopsis extends Component{
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
        						<Form onSubmit={this.handleSynopsis}>
        							<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Where and when does the story take place?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="confusing sections" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Who is the protagonist?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="repetitious sections" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>What major and immediate problem is the protagonist facing?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="balance" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>Does your protagonist decide to take a leap of faith to change?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="advancing the story" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>How has the situation of your protagonist changed at the end of the novel?</ControlLabel>
              							<FormControl componentClass="textarea" placeholder="too many plot questions raised?" />
            						</FormGroup>

            						<Button className = "btn" type="submit">
              							submit
            						</Button>  		   	    
        						  </Form>
                    </div> 

                    <div className = "slick-form 2">
                      <Form onSubmit={this.handleSynopsis}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>6</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="unique voices for characters" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>7</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="character personality fit" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>8</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="real strengths and weaknesses" />
                          </FormGroup>


                          <FormGroup controlId= "formControlsTextarea">
                            <ControlLabel>9</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="romance arc strong?" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>10</ControlLabel>
                              <FormControl componentClass="textarea" placeholder= "conflit strong?" />
                          </FormGroup>

                          <Button className = "btn" type="submit">
                              submit
                          </Button>             
                        </Form>
                      </div> 

                      <div className = "slick-form 3">
                        <Form onSubmit={this.handleSynopsis}>
                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>11</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="protagonist pushed to limits?" />
                          </FormGroup>

                          <FormGroup controlId= "formControlsTextarea">
                            <ControlLabel>12</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="character pov" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>13</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="sentence length" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>14</ControlLabel>
                              <FormControl componentClass="textarea" placeholder="show don't tell" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>15</ControlLabel>
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

export default tSynopsis;