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



class tResultsPage extends Component{
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
				<Grid className = "search-wrapper-main">
					<Row>
                        <Grid className = "search-wrapper">

                            
                            <Col md = {7} mdOffset = {3} className = "results">

                                <h2 className = "header">The input search field</h2>

                                <Grid className = "user-view">
                                    <Link to = "/otheruser">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div> UsernameA</div>  
                                    </Link>
                                    <div className = "userbubble" onClick = "">
                                        <div>About UsernameA</div> 
                                    </div> 
                                </Grid>


                                <Grid className = "user-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameB</div>  
                                    </Link>
                                    <div className = "userbubble" onClick = "">
                                        <div>About UsernameB</div> 
                                    </div> 
                                </Grid>


                                <Grid className = "user-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameC</div>  
                                    </Link>
                                    <div className = "userbubble" onClick = "">
                                        <div>About UsernameC</div> 
                                    </div> 
                                </Grid>


                                <Grid className = "user-view">
                                    <Link to = "/user">
                                        <img src = "http://via.placeholder.com/64x64"/>
                                        <div>UsernameX</div>  
                                    </Link>
                                    <div className = "userbubble" onClick = "">
                                        <div>About UsernameX</div> 
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
//     resultspage: state.resultspageReducer

//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     resultspageAction: ResultsPageAction
//   }, dispatch)
// }



export default tResultsPage;

// export default connect(mapStateToProps,mapDispatchToProps)(tResultsPage);