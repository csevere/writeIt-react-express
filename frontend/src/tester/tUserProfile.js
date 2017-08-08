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


class tUserProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // registerMessage: "",
      // nameError: null,
      // emailError: null,
      // formError: false
    }
    // this.handleUserProfile = this.UserProfile.bind(this);
    
  }

  // handleUserProfile(event){
  //   event.preventDefault();
    
  //   var error = false;

  //   // var main_plot = document.getElementById('main_plot').value;
  //   // var subplot = document.getElementById('subplot').value;
  //   // var subplot_reasons = document.getElementById('subplot_reasons').value;
  //   // var direct_actions = document.getElementById('direct_actions').value;
  //   // var indirect_actions = document.getElementById('indirect_actions').value;
  //   // var motivation = document.getElementById('motivation').value;
  //   // var plot_type = document.getElementById('plot_type').value;
  //   // var plot_order = document.getElementById('plot_order').value;
  //   // var foreshadow = document.getElementById('foreshadow').value;
  //   // var credibility = document.getElementById('credibility').value;
  //   // var flashbacks = document.getElementById('flashbacks').value;
  //   // var journey = document.getElementById('journey').value;
  //   // var stakes = document.getElementById('stakes').value;
  //   // var antagonist = document.getElementById('antagonist').value;
  //   // var summary = document.getElementById('summary').value;

 

  //   console.log(this.props.registerResponse)

  //   var username = this.props.registerResponse.name;
  //   console.log(username);
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
  //     this.props.plotAction({
  //       // username: username,
  //       // main_plot: main_plot,
  //       // subplot: subplot,
  //       // subplot_reasons: subplot_reasons,
  //       // direct_actions: direct_actions,
  //       // indirect_actions: indirect_actions,
  //       // motivation: motivation,
  //       // plot_type: plot_type,
  //       // plot_order: plot_order,
  //       // foreshadow: foreshadow,
  //       // credibility: credibility,
  //       // flashbacks: flashbacks,
  //       // journey: journey,
  //       // stakes: stakes,
  //       // antagonist: antagonist,
  //       // summary: summary
        
  //     });
  //   }

  // }

 
	render(){
     
    console.log(this.props)
		return(
			<div>
				<Grid className = "profile">
					<Row>

            <div className = "container-fluid header">
              <Col md={12}>

                  <Col md ={4} className = "col-md-offset-4 left">

                    <div className = "prof-pic">
                      <a href="https://placeholder.com"><img src="http://via.placeholder.com/200x200"/></a>
                    </div>

                    <div className = "username text-center">
                      <h3>Username</h3>
                      <h4>Location</h4>
                    </div>
                  </Col>


                  <Col md = {4}>
                   <div className = "stats-right">
                        <div>
                          <ul>
                            <li style = {{background: "white"}}><div id= "friends"><h4>0 Friends</h4></div></li>
                            <li style = {{background: "blue", color: "white", cursor: "pointer"}}><div id = "addfriend"><h4> + Add Friend</h4></div></li>
                          </ul>
                        </div>
                    </div>
                  </Col>

                </Col>
            </div>

            <Row className = "second-row">
              <Grid className = "col-md-12">

                <Col md = {3} className = "about-left">
                  <div><h4>About</h4></div>
                </Col>

                <Col md = {7} className = "mybooks-right">
                  <div><h4>My Books</h4></div>

                  <Col md = {3}>
                      <div className = "createbook">

                        <div className = "book">Create Book</div>

                        <div>
                          <form>
                            <Link to="/newbook"><button className="btn-primary btn btn-book">Create</button></Link>
                          </form>
                        </div>
                      </div>

                  </Col>



                </Col>
              </Grid>

            </Row>

            <Row className = "third-row">
              <Grid className = "col-md-12">
                <Col md = {3} className = "twitter-left">
                  <div><h4>Twitter</h4></div>
                </Col>

                 <Col md = {7} className = "messages-left">
                  <div>
                      <Form >
                        <FormGroup controlId="formControlsTextarea">
                          <FormControl id = "post-message" componentClass="textarea" placeholder="post a message" />
                        </FormGroup>
                      </Form>
                  </div>

                  <div className = "display-message">
                    <div>(Username)(theDate):</div>
                    <div>(Posted Message Lorem ipsum dolor sit amet,
                      graeci pertinacia est at, essent iisque sea an.
                      Eos autem molestiae id, ad vim quot evertitur
                      quaerendum. Eligendi patrioque et nec, tritani
                      referrentur no sit. Vis graece virtute feugait)
                    </div>
                  </div>

                  <div className = "write-message-box">
                      <Form>
                        <FormGroup controlId="formControlsTextarea">
                          <FormControl id = "post-reply" componentClass="textarea" placeholder="write a reply..." />
                        </FormGroup>
                      </Form>
                  </div>
                </Col>
              </Grid>
            </Row>

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

export default tUserProfile;
// export default connect(mapStateToProps,mapDispatchToProps)(tUserProfile);