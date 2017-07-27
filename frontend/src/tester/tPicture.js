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
// import UserProfileAction from '../actions/UserProfileAction';


class tPicture extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // registerMessage: "",
      // nameError: null,
      // emailError: null,
      // formError: false
    }
  }
 
	render(){
     

		return(
			<div>
				<Grid className = "container-fluid picture-main">
					<Row>

            <Grid className = "row-one">
              <Row>

                <Col md = {3}>
                  <div><img src= "http://via.placeholder.com/300x200" /></div>
                </Col>



                <Col md = {3}>
                  <div><img src= "http://via.placeholder.com/300x200" /></div>
                </Col>



                <Col md = {3}>
                  <div><img src= "http://via.placeholder.com/300x200" /></div>
                </Col>
              
              </Row> 
            </Grid>


            <Grid className = "row-two">
              <Row>

                <Col md = {3}>
                  <div><img src= "http://via.placeholder.com/300x200" /></div>
                </Col>



                <Col md = {3}>
                  <div><img src= "http://via.placeholder.com/300x200" /></div>
                </Col>



                <Col md = {3}>
                  <div><img src= "http://via.placeholder.com/300x200" /></div>
                </Col>
              
              </Row> 
            </Grid>


            <Grid className = "row-three">
              <Row>

                <Col md = {3}>
                  <div><img src= "http://via.placeholder.com/300x200" /></div>
                </Col>



                <Col md = {3}>
                  <div><img src= "http://via.placeholder.com/300x200" /></div>
                </Col>



                <Col md = {3}>
                  <div><img src= "http://via.placeholder.com/300x200" /></div>
                </Col>
              
              </Row> 
            </Grid>


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

export default tPicture;
// export default connect(mapStateToProps,mapDispatchToProps)(tUserProfile);