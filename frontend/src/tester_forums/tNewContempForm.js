import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, Table, FormGroup, FormControl, Button, ControlLabel, Form} from 'react-bootstrap';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';



class tNewContempForm extends Component{
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
				<Grid className = "form-wrapper">
					<Row>
                        
                        <Col md = {8} className = "col-md-offset-2 contemp-form">

                            <Form>

                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Title:</ControlLabel>
                                    <FormControl id="title" componentClass="textarea" />
                                </FormGroup>


                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Message:</ControlLabel>
                                    <FormControl id="message" componentClass="textarea" />
                                </FormGroup>

                                <Button className = "btn-default btn" type="submit">Post</Button> 

                                <Link to ="/contemp" type="submit">Cancel</Link> 

                            </Form> 
                        </Col>
                        
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
//     newcontempformResponse: state.newcontempformReducer

//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     newcontempformAction: NewContempFormAction
//   }, dispatch)
// }

export default tNewContempForm;
// export default connect(mapStateToProps,mapDispatchToProps)(tNewContempFomr);