import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import  {bindActionCreators} from 'redux';
import ContempAction from './actions/ContempAction';
import {connect} from 'react-redux';
import $ from 'jquery';



class tContempForum extends Component{
    constructor(props) {
        super(props);
        this.state = {
          forumData: []
        }

    }

    componentDidMount() {

        //  $.getJSON(`http://localhost:5000/book?username=${this.props.registerResponse.name}`, (serverData)=>{
        //     // log the JSON response from Express
        //     //console.log(serverData.bookData)
        //     this.setState({
        //         bookData: serverData.bookData
        //     })
        // });

        $.getJSON(`http://localhost:5000/contemp`, (contempdata)=>{
            // log the JSON response from Express
            //console.log(serverData.bookData)
            this.setState({
                forumData: contempdata.dataz 

            })
            
        });
          
    }

	render(){
        // console.log(postData)

        var postArray = []; 
        this.state.forumData.map((post, index)=>{ 
            postArray.push(
                <div>
                    {this.props.registerResponse.name}
                    {post.username}
                    {post.topic} 
                    {post.message}
                </div>    

            )
            console.log(postArray); 
        });
     
		return(
			<div>
				<Grid className = "forum-wrapper">
                    <div className = "bg">
                        <img src = "https://static.pexels.com/photos/448835/pexels-photo-448835.jpeg"/>
                    </div> 
					<Row>

                        <div className = "test" style = {{background: 'white'}}>
                                {postArray}
                        </div>
                        
                        <Grid className = "cat-forum"> 

                            <Col md = {7} className = "latest-topics-left">
                                <h2>RECENT TOPICS</h2> 

                                <Table className="cat-table" striped bordered responsive>
                                        <thead>
                                          <tr>
                                            <th>Discussion</th>
                                            <th>Author</th>
                                            <th>Replies</th>
                                          </tr>
                                        </thead>

                                        <tbody>

                                          <tr>
                                            <td><img src = "images/pin-icon.png"/>Forum Guidlines</td>
                                            <td>Admin</td>
                                            <td>number of replies</td>
                                          </tr>

                                          <tr>
                                            <td>FORUM TOPIC A</td>
                                            <td><Link to = "/user">UsernameA</Link></td>
                                            <td>number of replies</td>
                                           
                                          </tr>

                                          <tr>
                                            <td>FORUM TOPIC B</td>
                                            <td><Link to = "/user">UsernameB</Link></td>
                                            <td>number of replies</td>
                                          </tr>

                                           <tr>
                                            <td>FORUM TOPIC C</td>
                                            <td><Link to = "/user">UsernameC</Link></td>
                                            <td>number of replies</td>
                                          </tr>


                                           <tr>
                                            <td>FORUM TOPIC X</td>
                                            <td><Link to = "/user">UsernameX</Link></td>
                                            <td>number of replies</td>
                                          </tr>

                                        </tbody>
                                    </Table>

                                    <div className = "all-topics">
                                        <Link to = "/home">All topics</Link> 
                                        <img src = "images/arrow-right.png"/>
                                       
                                    </div>
                            </Col> 
                          

                             

                            <Col  md = {4} className = "forum-cat-right">
                                <h2 className = "forum-cat-header"> CONTEMPORARY FICTION</h2>

                                <Grid className = "forum-cat-view">
                                    <div>
                                        <img src = "images/gen-fic-icon.png"/> 
                                    </div>
                                    <div className = "forum-cat-info" onClick = "">
                                        <div>Join discussions for fiction set in modern times. You can start a discussion or chat with other writers of General Ficiton.</div>
                                    </div>

                                    <div className = "new-topic">
                                        <Link to= "/contempform">Start New Topic  </Link> 
                                        <img src = "images/quote-bubble.png" /> 
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


function mapStateToProps(state){
  return{
    // characterResponse: state.characterReducer,
    registerResponse: state.registerReducer,
    mainforumResponse: state.mainforumReducer

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    contempAction: ContempAction
  }, dispatch)
}

 // <div>{post.topic}</div>
                    // <div>{post.message}</div>
                    // <br/>
                    // <hr/>

// export default tContempForum;
export default connect(mapStateToProps,mapDispatchToProps)(tContempForum);