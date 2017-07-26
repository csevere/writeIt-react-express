import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';



let tBook = function statelessFunctionComponentClass(props){
	let title = props.title;

	let style = {
		width: '50px',
		margin: '10px 5px 0px 5px'
	} 
}



// class tBook extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       handleCreateBook: true
//     }
//     this.handleCreateBook = this.CreateBook.bind(this);
    
//   }

//   handleCreateBook(){
//   	let BookObj = {}

//   }



//   render(){
     
//     console.log(this.props)
// 		return(
// 			<div>
				   
// 		  </div>

// 		)
// 	}
// }


// function mapStateToProps(state){
//   return{
//     // characterResponse: state.characterReducer,
//     registerResponse: state.registerReducer,
//     UserProfileResponse: state.UserProfileReducer

//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     userprofileAction: UserProfileAction
//   }, dispatch)
// }

export default tUserProfile;
// export default connect(mapStateToProps,mapDispatchToProps)(tUserProfile);