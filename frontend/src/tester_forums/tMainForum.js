import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';



class tMainForum extends Component{
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

 
	render(){
     
    console.log(this.props)
		return(
			<div>
				<Grid className = "forum-wrapper-main">
					<Row>
                        <Grid className = "mainforum-wrapper">

                            
                            <Col md = {7} className = "latest-comments-left">

                                <h2 className = "header"> MOST RECENT COMMENTS</h2>

                                <Grid className = "comments-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameA</div>  
                                    </Link>
                                    <div className = "commentbubble" onClick = "">
                                        <div>UsernameA comments are here</div> 
                                        <div><Link to ="/home">Category Name ex SCIFI</Link></div>
                                        <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
                                    </div> 
                                </Grid>


                                <Grid className = "comments-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameB</div>  
                                    </Link>
                                    <div className = "commentbubble" onClick = "">
                                        <div>UsernameB comments are here</div> 
                                        <div><Link to ="/home">Category Name ex SCIFI</Link></div>
                                        <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
                                    </div> 
                                </Grid>


                                <Grid className = "comments-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameC</div>  
                                    </Link>
                                    <div className = "commentbubble" onClick = "">
                                        <div>UsernameC comments are here</div> 
                                        <div><Link to ="/home">Category Name ex SCIFI</Link></div>
                                        <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
                                    </div> 
                                </Grid>


                                <Grid className = "comments-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameX</div>  
                                    </Link>
                                    <div className = "commentbubble" onClick = "">
                                        <div>UsernameX comments are here</div> 
                                        <div><Link to ="/home">Category Name ex SCIFI</Link></div>
                                        <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
                                    </div> 
                                </Grid>


                                <Grid className = "comments-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameY</div>  
                                    </Link>
                                    <div className = "commentbubble" onClick = "">
                                        <div>UsernameY comments are here</div> 
                                        <div><Link to ="/home">Category Name ex SCIFI</Link></div>
                                        <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
                                    </div> 
                                </Grid>


                                <Grid className = "comments-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameZ</div>  
                                    </Link>
                                    <div className = "commentbubble" onClick = "">
                                        <div>UsernameZ comments are here</div> 
                                        <div><Link to ="/home">Category Name ex SCIFI</Link></div>
                                        <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
                                    </div> 
                                </Grid>
                            </Col> 
                          

                             

                            <Col  md = {4} className = "categories-right">
                                <h2 className = "cat-header"> FORUM CATEGORIES</h2>

                               
                                <Grid className = "cat-view">
                                    <Link to = "/contemp">
                                        <img src = "images/gen-fic-icon.png"/> 
                                    </Link>
                                    <div className = "cat-info" onClick = "">
                                        <div><Link to ="/contemp">Contemporary Fiction</Link></div>
                                        <div>Join discussions for plot-driven fiction set in modern times.</div>
                                    </div> 
                                </Grid>


                                <Grid className = "cat-view">
                                    <Link to = "/romance">
                                        <img src = "images/romance-icon.png"/>
                                    </Link>
                                    <div className = "cat-info" onClick = "">
                                        <div><Link to ="/home">Romance</Link></div>
                                        <div>Join discussions for fiction that places the primary focus on the relationship and romantic love...</div>
                                    </div> 
                                </Grid>

                                 <Grid className = "cat-view">
                                    <Link to = "/sf">
                                        <img src = "images/sf-icon.png"/> 
                                    </Link>
                                    <div className = "cat-info" onClick = "">
                                        <div><Link to ="/sf">Science Fiction</Link></div>
                                        <div>Join discussions for fiction based on future scientific or technological advances and major social...</div>
                                    </div> 
                                </Grid>


                                <Grid className = "cat-view">
                                    <Link to = "/fantasy">
                                        <img src = "images/fantasy-icon.png"/>
                                    </Link>
                                    <div className = "cat-info" onClick = "">
                                        <div><Link to ="/fantasy">Fantasy</Link></div>
                                        <div>Join discussions for fiction that contains unrealistic settings, or magic, often set in a...</div>
                                    </div> 
                                </Grid>


                                <Grid className = "cat-view">
                                    <Link to = "/mystery">
                                        <img src = "images/mystery-icon.png"/>  
                                    </Link>
                                    <div className = "cat-info" onClick = ""> 
                                        <div><Link to ="/mystery">Mystery/Thriller</Link></div>
                                        <div>Join discussions for fiction defined by the moods they elicit, giving viewers heightened feelings...</div>
                                    </div> 
                                </Grid>


                                <Grid className = "cat-view">
                                    <Link to = "/horror">
                                        <img src = "images/horror-icon.png"/>
                                    </Link>
                                    <div className = "cat-info" onClick = "">
                                        <div><Link to ="/horror">Horror</Link></div>
                                        <div>Join discussions for fiction intended to, or has the capacity to frighten, scare, disgust...</div>
                                    </div> 
                                </Grid>  
                                
                            </Col>
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
//     mainforumResponse: state.mainforumReducer

//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     mainforumAction: MainForumAction
//   }, dispatch)
// }


// export default tMainForum;

export default tMainForum;

// export default connect(mapStateToProps,mapDispatchToProps)(tMainForum);