import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';
// import tWriteOptionAction from '../actions/tWriteOptionAction';


class tStatsDictThes extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // registerMessage: "",
      // nameError: null,
      // emailError: null,
      // formError: false
    }
    // this.handleSynopsis = this.handleSynopsis.bind(this);
    
  }

  // handleSynopsis(event){
  //   event.preventDefault();
    
   

 
  //   // var username = this.props.registerResponse.name;
  //   // console.log(username);
  //   // //Name
  //   // if(name.length < 1){
  //   //   var nameError = "error"; 
  //   //   error=true;
  //   // }
  //   // else{ 
  //   //   var nameError = "success"
  //   // }

  //   // Email
  //   // if(name.length < 3){var emailError = "error"; error=true}
  //   // else{var emailError = "success"}


  //   // console.log(name);
  //   if(error){
  //      console.log("ERROR!!!")
  //     // this.setState({
  //     //   formError: true,
  //     //   nameError: nameError
  //     // }) 

  //   console.log(error);
  //   }else{    
  //     this.props.synopsisAction({
      
  //   }

  // }


 
	render(){
     
   
  
		return(
			<div>
				<Grid className = "write-menu-option">
					<Row>

            <Col md = {4} className = "write-cat">
              <div>Write Menu Category</div> 
            </Col>


            <Col md = {4} className = "book-title col-md-offset-3">
              <div> MyBook Title </div> 
            </Col> 


            </Row>	
		      </Grid>   
		    </div>

		)
	}
}


// function mapStateToProps(state){
//   return{
//     // characterResponse: state.characterReducer,
//     registerResponse: state.registerReducer,
//     synopsisResponse: state.synopsisReducer

//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     synopsisAction: SynopsisAction
//   }, dispatch)
// }

export default tStatsDictThes;