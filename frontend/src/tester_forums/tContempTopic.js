import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import  {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import $ from 'jquery';



class tContempTopic extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    }
    
  }



	render(){
     
     
        console.log(this.props)
		return(
			<div>
				<Grid className = "topic-wrapper-main">
					<Row>
                       

                        <Grid className = "cat-topic-wrapper">
                            <div className = "bg-topic">
                                <img src = "https://static.pexels.com/photos/448835/pexels-photo-448835.jpeg"/>
                            </div> 

                            
                            <Col md = {7} className = "topic-message-left">

                                <h2 className = "header"> Contemporary >> UsernameA Thread Topic</h2>

                                <Grid className = "topic-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameA</div>  
                                    </Link>
                                    <div className = "commentbubbleT" style = {{background: "white", color: "black"}} onClick = "">
                                        <div>UsernameA topic message is here:

                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div> 
                                        <div><Link to = "/home">Report</Link></div>
                                    </div> 
                                </Grid>


                                <Grid className = "topic-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameB</div>  
                                    </Link>
                                    <div className = "commentbubbleT" onClick = "">
                                        <div>UsernameB comments are here</div> 
                                        <div><Link to = "/home">Report</Link></div>
                                    </div> 
                                </Grid>


                                <Grid className = "topic-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameC</div>  
                                    </Link>
                                    <div className = "commentbubbleT" onClick = "">
                                        <div>UsernameC comments are here</div> 
                                        <div><Link to = "/home">Report</Link></div>
                                    </div> 
                                </Grid>


                                <Grid className = "topic-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameX</div>  
                                    </Link>
                                    <div className = "commentbubbleT" onClick = "">
                                        <div>UsernameX comments are here</div> 
                                        <div><Link to = "/home">Report</Link></div>
                                    </div> 
                                </Grid>


                                <Grid className = "comment-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameX</div>  
                                    </Link>
                                    
                                    <Form>

                                        <FormGroup controlId="formControlsTextarea">
                                            <FormControl id="message" componentClass="textarea" />
                                        </FormGroup>

                                        <Link to = "/contemptopic"><Button className = "btn-default btn" type="submit">Post Comment</Button></Link> 

                                        <Link to ="/contemp" type="submit">Cancel</Link> 

                                    </Form> 
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
//     contemptopicResponse: state.contemptopicReducer

//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     contempTopicAction: ContempTopicAction
//   }, dispatch)
// }

export default tContempTopic;
// export default connect(mapStateToProps,mapDispatchToProps)(tContempTopic);