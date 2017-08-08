import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {Router} from 'react-router-dom'
import {connect} from 'react-redux';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';



class tResultsPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
        resultsData:[]
    }
    
  }

    componentDidMount(){
        var specificUser = this.props.location.search.slice(6);
        console.log(specificUser);
        if(specificUser !== undefined){
            $.getJSON(`http://localhost:5000/results?specificUser=${specificUser}`, (serverData)=>{
                console.log(serverData);
                this.setState({
                    resultsData: serverData.resultsData
                })
            })


        }else{
            $.getJSON(`http://localhost:5000/results`, (serverData)=>{
                console.log(serverData);
                this.setState({
                    resultsData: serverData.resultsData
                })
            })

        }



        
    }

    componentWillReceiveProps(){
        var specificUser = this.props.location.search.slice(6);
        console.log(specificUser);
        if(specificUser !== undefined){
            $.getJSON(`http://localhost:5000/results?specificUser=${specificUser}`, (serverData)=>{
                console.log(serverData);
                this.setState({
                    resultsData: serverData.resultsData
                })
            })


        }else{
            $.getJSON(`http://localhost:5000/results`, (serverData)=>{
                console.log(serverData);
                this.setState({
                    resultsData: serverData.resultsData
                })
            })

        }


    }



    followUser(username){



        console.log(username);
        var userFollowed = username;
        var userFollowing = this.props.registerResponse.name;
        $.getJSON(`http://localhost:5000/follow?userFollowed=${userFollowed}&userFollowing=${userFollowing}`, (serverData)=>{
            console.log(serverData);
            
        })
        this.props.history.push(`/profile/${userFollowed}`);

    }


 
	render(){


        if(this.props.registerResponse.name === undefined){
            this.props.history.push('/login')
        }

        var resultsArray = [];
        var linkToUser = "/profile/"

        this.state.resultsData.map((user, index)=>{
            var imageLocation = '../public/frontend/images/profile-pic.png'
            if(user.picture !== null){
                imageLocation = user.picture.slice(18);
            }else{
                imageLocation = imageLocation.slice(18);
            }

           resultsArray.push(
               <div className = "user-results text-center">


                            <div><img className="user-image" src={imageLocation} /></div>


                            <div>{user.username}</div>
                            <div className = "userbubble" onClick = "">
                                <div>{user.about}</div>
                            </div>

                            <div>
                                <button id='follow-button' onClick={()=>this.followUser(user.username)} className="btn-primary btn " type='submit'>Follow</button>
                            <br/><br/><hr/>
                            </div>




                        


                </div>

           )
        });
     
		return(
			<div>
				<Grid className = "search-wrapper-main">
					<Row>
                        <Grid className = "search-wrapper">

                            
                            <Col md = {7} mdOffset = {3} className = "results">
                                
                                {resultsArray}
                               

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
    registerResponse: state.registerReducer
    

  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     resultspageAction: ResultsPageAction
//   }, dispatch)
// }


//
// export default tResultsPage;

export default connect(mapStateToProps,null)(tResultsPage);

