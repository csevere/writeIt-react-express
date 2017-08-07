import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, Table, FormGroup, FormControl, Button, ControlLabel, Form} from 'react-bootstrap';
import  {bindActionCreators} from 'redux';
import NewContempFormAction from './actions/NewContempFormAction';
import {connect} from 'react-redux';


class tNewContempForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
        forumData: []  
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleSubmit(event){
      event.preventDefault();

      var username = this.props.registerResponse.name;
      var titlez = document.getElementById('titlez').value;
      var message = document.getElementByClassName('message').value;
     
      this.props.postAction({
          username: username,
          titlez: titlez,
          message: message 

      });
      
    }


	render(){
     
    console.log(this.props)
		return(
			<div>
				<Grid className = "form-wrapper">
					<Row>

                        <Col md = {8} className = "col-md-offset-2 contemp-form">

                              <Form onSubmit={this.handleSubmit}>
                                  <FormGroup controlId="formControlsTextarea">
                                      <ControlLabel>Topic:</ControlLabel>
                                      <FormControl id="titlez" componentClass="textarea" />
                                  </FormGroup>


                                  <FormGroup controlId="formControlsTextarea">
                                      <ControlLabel>Message:</ControlLabel>
                                      <FormControl id="message" componentClass="textarea" />
                                  </FormGroup>

                                  <Link to = "/contemptopic"><Button className = "btn-default btn" type="submit">Post</Button></Link> 

                                  <Link to ="/contemp" type="submit">Cancel</Link> 
                              </Form> 
                        </Col>
                        
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

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    newcontempformAction: NewContempFormAction
  }, dispatch)
}

// export default tNewContempForm;
export default connect(mapStateToProps,mapDispatchToProps)(tNewContempForm);