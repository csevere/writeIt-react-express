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
import $ from 'jquery';
import PostAction from '../actions/PostAction';
import  {Timeline} from '../../node_modules/react-twitter-widgets'; 
// import UserProfileAction from '../actions/UserProfileAction';


class UserProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                location: null,
                username: null,
                about: null,
                t_username: null
            },
            bookData: [],
            postData: [],
            picData: {
                picture:"./public/frontend/images/profile-pic.png"
                
            }

            // nameError: null,
            // emailError: null,
            // formError: false
        }
        this.handlePost = this.handlePost.bind(this);
        this.loadPosts = this.loadPosts.bind(this);

    }

    handlePost(event){
        event.preventDefault();


        var username = this.props.registerResponse.name;
        var post = document.getElementById('post').value;
        var from_user = this.props.registerResponse.name;
       



        this.props.postAction({
            username: username,
            post: post,
            from_user: from_user

        });
        
    }

    componentDidMount(){
        $.getJSON(`http://localhost:5000/user?email=${this.props.registerResponse.email}`, (serverData)=>{
            // log the JSON response from Express
            //console.log(serverData.userData)
            this.setState({
                userData: serverData.userData
            })
        })

        $.getJSON(`http://localhost:5000/book?username=${this.props.registerResponse.name}`, (serverData)=>{
            // log the JSON response from Express
            //console.log(serverData.bookData)
            this.setState({
                bookData: serverData.bookData
            })
        });

        this.loadPosts();

        // setInterval(this.loadPosts, 30000);

        $.getJSON(`http://localhost:5000/profilepic?username=${this.props.registerResponse.name}`, (serverData)=>{
            // log the JSON response from Express
            console.log(serverData)
            if(serverData.picData !== undefined){
                this.setState({
                    picData: serverData.picData
                    
            })

            }


        });

        // console.log(this.state.bookData)
    }

    loadPosts(){
        $.getJSON(`http://localhost:5000/post?username=${this.props.registerResponse.name}`, (serverData)=>{
        // log the JSON response from Express
        //console.log(serverData.bookData)
        this.setState({
            postData: serverData.postData
        })
    });
    }


    render(){

        var profilepic = this.state.picData.picture;
        var picLocation;
        if(profilepic.length > 2){
            picLocation = profilepic.slice(18);
            console.log(picLocation)
        }
        console.log('pic path here');
        console.log(profilepic);
        var username = this.state.userData.username;
        var location = this.state.userData.location;
        var about = this.state.userData.about;
        var t_username = this.state.userData.t_username; 
        console.log(location)

        var bookArray = [];
        var postArray = [];

        this.state.bookData.map((book, index)=>{
           var link = '/write/' +  book.title;
           bookArray.push(
               <Col key={index} md = {3}>
                   <div className = "createbook">

                       <div className = "book">{book.title}</div>

                       <div>
                           <form>
                               <Link to={link}><button className="btn-primary btn btn-book">Edit</button></Link>
                           </form>
                       </div>
                   </div>

               </Col>

           )
        });

        this.state.postData.map((post, index)=>{
           postArray.push(
               <div className = "display-message">
                    <div>{post.from_user}{post.time_posted}:</div>
                    <div>{post.post}</div>
                    <br/>
                    <hr/>
                </div>

           )
        });

        console.log(this.props)
        return(
            <div>
                <Grid className = "profile">
                    <Row>

                        <div className = "container-fluid header">
                            <Col md={12}>

                                <Col md ={4} className = "col-md-offset-4 left">

                                    <div className = "prof-pic">
                                        <img src={picLocation}/>
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
                                                <li style = {{background: "white"}}><div id= "friends"><h4>0 Messages</h4></div></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <form method="post" action="http://127.0.0.1:5000/profilepic" encType="multipart/form-data">
                                        <Col md = {4} mdOffset = {2} className="pic-sub">
                                            <input name='username' type='hidden' value={this.state.userData.username} />
                                            <input type='file' name='fileUploaded' />
                                            <input className="btn btn-primary" type="submit" />
                                        </Col>
                                    </form>
                                </Col>

                            </Col>
                        </div>

                        <Row className = "second-row">
                            <Grid className = "col-md-12">

                                <Col sm = {3} className = "about-left">
                                    <div className = "about-user">
                                        <h4>About</h4>
                                        <p><h5>{about}</h5></p>
                                    </div> 
                                </Col>

                                <Col sm = {5} className = "mybooks-right">
                                    <div><h4>{username}&apos;s Books</h4></div>

                                    <Col sm = {3}>
                                        <div className = "createbook">

                                            <div className = "book">Create Book</div>

                                            <div>
                                                <form>
                                                   <Link to="/newbook"><button className="btn-primary btn btn-book">Create</button></Link> 
                                                </form>
                                            </div>
                                        </div>

                                    </Col>
                                    {bookArray}



                                </Col>
                            </Grid>

                        </Row>

                        <Row className = "third-row">
                            <Grid className = "col-md-12">
                                <Col md = {3} className = "twitter-left">
                                    <div>
                                    <h4>Follow {t_username} On Twitter</h4>

                                    <Timeline
                                        dataSource={{

                                        sourceType: 'profile',
                                        screenName: `${t_username}`
                                        }}

                                        options={{

                                        username: `${t_username}`,
                                        height: '400'
                                        }}
                                       

                                        onLoad={() => console.log('Timeline is loaded!')}
                                    />


                                    </div>
                                </Col>

                                <Col md = {5} className = "messages-right">
                                    <div>
                                        {postArray}
                                    </div>

                                    

                                    <div className = "write-message-box">
                                        <Form onSubmit={this.handlePost}>
                                            <FormGroup controlId="formControlsTextarea">
                                                <FormControl id = "post" componentClass="textarea" placeholder="write a reply..." />
                                                <button className="btn-primary btn btn-book" type='submit'>Post</button>
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
    characterResponse: state.characterReducer,
    registerResponse: state.registerReducer,
    postResponse: state.postReducer

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    postAction: PostAction
  }, dispatch)
}

// export default UserProfile;
export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);




