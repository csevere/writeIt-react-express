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
import Twitter from 'twitter'; 
// import UserProfileAction from '../actions/UserProfileAction';


class tTwitter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // registerMessage: "",
      // nameError: null,
      // emailError: null,
      // formError: false
    }
 
	render(){
     
    console.log(this.props)
		return(
			<div>
				<Grid className = "profile">
					<Row>

           

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
//     UserProfileResponse: state.UserProfileReducer

//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     userprofileAction: UserProfileAction
//   }, dispatch)
// }

export default tTwitter;
// export default connect(mapStateToProps,mapDispatchToProps)(tUserProfile);