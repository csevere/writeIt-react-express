import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button} from 'react-bootstrap';
import  {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import $ from 'jquery';



class Conversations extends Component{


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
