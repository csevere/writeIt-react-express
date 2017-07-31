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



// class tMainForum extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       // registerMessage: "",
//       // nameError: null,
//       // emailError: null,
//       // formError: false
//     }
//     // this.handleUserProfile = this.UserProfile.bind(this);
    
//   }


 
// 	render(){
     
//     console.log(this.props)
// 		return(
// 			<div>
// 				<Grid className = "forum-wrapper">
// 					<Row>
//                         <Col md={12}>

//                             <Row>
                                    
//                                 <Grid className = "latest-comments left">
//                                     <h2 className = "header" style = {{float: "left", marginleft:"20px"}}> MOST RECENT COMMENTS</h2>

//                                     <Grid className = "comments-view">
//                                         <Link to = "/user" />
//                                             <img src = ""/>
//                                             <div style = {{paddingleft: "4px"}}>UsernameA</div>  
//                                         </Link>
//                                         <div className = "commentbubble" onClick = "">
//                                             <div>UsernameA comments are here</div> 
//                                             <div><Link to ="/home">Category Name ex SCIFI</Link></div>
//                                             <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
//                                         </div> 
//                                 </Grid>


//                                     <Grid className = "comments-view">
//                                         <Link to = "/user" />
//                                             <img src = ""/>
//                                             <div style = {{paddingleft: "4px"}}>UsernameB</div>  
//                                         </Link>
//                                         <div className = "commentbubble" onClick = "">
//                                             <div>UsernameB comments are here</div> 
//                                             <div><Link to ="/home">Category Name ex SCIFI</Link></div>
//                                             <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
//                                         </div> 
//                                     </Grid>


//                                     <Grid className = "comments-view">
//                                         <Link to = "/user" />
//                                             <img src = ""/>
//                                             <div style = {{paddingleft: "4px"}}>UsernameC</div>  
//                                         </Link>
//                                         <div className = "commentbubble" onClick = "">
//                                             <div>UsernameC comments are here</div> 
//                                             <div><Link to ="/home">Category Name ex SCIFI</Link></div>
//                                             <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
//                                         </div> 
//                                     </Grid>


//                                     <Grid className = "comments-view">
//                                         <Link to = "/user" />
//                                             <img src = ""/>
//                                             <div style = {{paddingleft: "4px"}}>UsernameX</div>  
//                                         </Link>
//                                         <div className = "commentbubble" onClick = "">
//                                             <div>UsernameX comments are here</div> 
//                                             <div><Link to ="/home">Category Name ex SCIFI</Link></div>
//                                             <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
//                                         </div> 
//                                     </Grid>


//                                     <Grid className = "comments-view">
//                                         <Link to = "/user" />
//                                             <img src = ""/>
//                                             <div style = {{paddingleft: "4px"}}>UsernameY</div>  
//                                         </Link>
//                                         <div className = "commentbubble" onClick = "">
//                                             <div>UsernameY comments are here</div> 
//                                             <div><Link to ="/home">Category Name ex SCIFI</Link></div>
//                                             <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
//                                         </div> 
//                                     </Grid>


//                                     <Grid className = "comments-view">
//                                         <Link to = "/user" />
//                                             <img src = ""/>
//                                             <div style = {{paddingleft: "4px"}}>UsernameZ</div>  
//                                         </Link>
//                                         <div className = "commentbubble" onClick = "">
//                                             <div>UsernameZ comments are here</div> 
//                                             <div><Link to ="/home">Category Name ex SCIFI</Link></div>
//                                             <div><Link to = "/home">Category Page Title ex Chapter One Critique</Link></div>
//                                         </div> 
//                                     </Grid>
                                 

//                                     <Grid className = "categories right">
//                                         <h2 className = "cat-header"> CATEGORIES</h2>


                                        
//                                     </Grid>
                                 
                                 
                                 
                                 
                                 
                                 

                                         




                                    
//                                 </Grid> 
                            











//                                 <Col md = {4} className = "categories">




//                                 </Col>




//                             </Row>



//                         </Col>


//                     </Row>


//                 </Grid>






                
// 		  </div>

// 		)
// 	}
// }


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
// export default connect(mapStateToProps,mapDispatchToProps)(tMainForum);