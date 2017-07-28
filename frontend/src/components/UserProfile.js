/**
 * Created by mephisto on 7/28/17.
 */
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
import $ from 'jquery'
// import UserProfileAction from '../actions/UserProfileAction';


class UserProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                location: null,
                username: null,
                about: null,
            }
            // nameError: null,
            // emailError: null,
            // formError: false
        }
        // this.handleUserProfile = this.UserProfile.bind(this);

    }

    componentDidMount(){
        $.getJSON(`http://localhost:5000/user?email=${this.props.registerResponse.email}`, (serverData)=>{
            // log the JSON response from Express
            console.log(serverData.userData)
            this.setState({
                userData: serverData.userData
            })
        })



    }


    render(){

        var username = this.state.userData.username;
        var location = this.state.userData.location;
        var about = this.state.userData.about;

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
                                        <h3>{username}</h3>
                                        <h4>{location}</h4>
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
                                    <div><h4>{about}</h4></div>
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


function mapStateToProps(state){
  return{
    // characterResponse: state.characterReducer,
    registerResponse: state.registerReducer
    //UserProfileResponse: state.UserProfileReducer

  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     userprofileAction: UserProfileAction
//   }, dispatch)
// }

// export default UserProfile;
export default connect(mapStateToProps)(UserProfile);