import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlotAction from '../actions/PlotAction';
import ChapterAction from '../actions/ChaptersAction';


class tChapters extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // registerMessage: "",
      // nameError: null,
      // emailError: null,
      // formError: false
    }
    this.handleChapters = this.handleChapters.bind(this);
    
  }

  handleChapters(event){
    event.preventDefault();
    
    var error = false;

    var scene_number = document.getElementById('scene_number').value;
    var scene_plot = document.getElementById('scene_plot').value;
    var scene_char1 = document.getElementById('scene_char1').value;
    var scene_dialogue = document.getElementById('scene_dialogue').value;
    var scene_conflict = document.getElementById('scene_conflict').value;
    var relevant_dialogue = document.getElementById('relevant_dialogue').value;
    var char_thought = document.getElementById('char_thought').value;
    var pov = document.getElementById('pov').value;
    var pov_char= document.getElementById('pov_char').value;
    var setting = document.getElementById('setting').value;
    var setting_char = document.getElementById('setting_char').value;
    var setting_plot = document.getElementById('setting_plot').value;
    var setting_rev = document.getElementById('setting_rev').value;
    var scene_mood = document.getElementById('scene_mood').value;
    var scene_char2 = document.getElementById('scene_char2').value;

    var username = this.props.registerResponse.name;
    var book = this.props.match.params.book;

    // var username = this.props.registerResponse.name;
    // console.log(username);
    // //Name
    // if(name.length < 1){
    //   var nameError = "error"; 
    //   error=true;
    // }
    // else{ 
    //   var nameError = "success"
    // }

    // Email
    // if(name.length < 3){var emailError = "error"; error=true}
    // else{var emailError = "success"}


    // console.log(name);
    if(error){
       console.log("ERROR!!!")
      // this.setState({
      //   formError: true,
      //   nameError: nameError
      // }) 
      console.log(error);
    }else{    
      this.props.chapterAction({
        scene_number: scene_number,
        scene_plot: scene_plot,
        scene_char1: scene_char1,
        scene_dialogue: scene_dialogue,
        scene_conflict: scene_conflict,
        relevant_dialogue: relevant_dialogue,
        char_thought: char_thought,
        pov: pov,
        pov_char: pov_char,
        setting: setting_char,
        setting_plot: setting_plot,
        setting_rev: setting_rev,
        scene_mood: scene_mood,
        scene_char2: scene_char2,
        username: username,
        book: book


      });
      this.props.history.push(`/write/${book}`);
    }

  }
  render(){
    const settings = {
     dots: true,
     infinite: false,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
    };
    console.log(this.props)
		return(
			<div>
				<Grid className = "writemenucat text-center ch-forms">
					<Row>
              <Col sm = {8} md = {10} className = "ch-forms-2 col-md-offset-3">
                <Slider {...settings}>

                  <div className = "slick-form 1">
        						<Form onSubmit={this.handleChapters}>
        							<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>What is the point of the chapter in one sentence?</ControlLabel>
              							<FormControl id='scene_number' componentClass="textarea" placeholder="scene_number" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>How do the scenes directly affect the plot or subplot?</ControlLabel>
              							<FormControl id="scene_plot" componentClass="textarea" placeholder="scene_plot" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>How do the scenes directly affect character development?</ControlLabel>
              							<FormControl id="scene_char1" componentClass="textarea" placeholder="scene_char1" />
            						</FormGroup>


            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>How do the characters personalities come out through the dialogue?</ControlLabel>
              							<FormControl id="scene_dialogue" componentClass="textarea" placeholder="scene_dialogue" />
            						</FormGroup>

            						<FormGroup controlId="formControlsTextarea">
             							<ControlLabel>What are the major conflicts in the scenes?</ControlLabel>
              							<FormControl id="scene_conflict" componentClass="textarea" placeholder="scene_conflict" />
            						</FormGroup>

            						<Button className = "btn" type="submit">
              							submit
            						</Button>  		   	    
        						  </Form>
                    </div> 

                    <div className = "slick-form 2">
                      <Form onSubmit={this.handleChapters}>
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Are there places where dialogue could be replaced with action instead?</ControlLabel>
                              <FormControl id="relevant_dialogue" componentClass="textarea" placeholder="relevant_dialogue" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>How much character thought and reflection is there? Is there too much?</ControlLabel>
                              <FormControl id="char_thought" componentClass="textarea" placeholder="char_thought" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What is the narrative POV? First, second, omniscient?</ControlLabel>
                              <FormControl id="pov" componentClass="textarea" placeholder="pov" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What is the POV character for the scenes?Protagonist, antagonist, or ally?</ControlLabel>
                              <FormControl id="pov_char" componentClass="textarea" placeholder="pov_char" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What is the setting for each scene?</ControlLabel>
                              <FormControl id="setting" componentClass="textarea" placeholder="setting" />
                          </FormGroup>

                          <Button className = "btn" type="submit">
                              submit
                          </Button>             
                        </Form>
                      </div> 

                      <div className = "slick-form 3">
                        <Form onSubmit={this.handleChapters}>
                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>How important is the setting to the character?</ControlLabel>
                              <FormControl id="setting_char" componentClass="textarea" placeholder="setting_char" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>How important is the setting to the plot?</ControlLabel>
                              <FormControl id="setting_plot" componentClass="textarea" placeholder="setting_plot" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>How do the characters interact with the setting?</ControlLabel>
                              <FormControl id="setting_rev" componentClass="textarea" placeholder="setting_rev" />
                          </FormGroup>


                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>What kind of mood do the scenes have?</ControlLabel>
                              <FormControl id="scene_mood" componentClass="textarea" placeholder="scene_mood" />
                          </FormGroup>

                          <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Are the characters actions predictable or complex?</ControlLabel>
                              <FormControl id="scene_char2" componentClass="textarea" placeholder="scene_char2" />
                          </FormGroup>

                          <Button className = "btn" type="submit">
                              submit
                          </Button>             
                        </Form>
                      </div>
                  </Slider> 

                </Col>

                <Row>
                  <Grid className = "fourth-row-left">
                    <Col md = {3}>
                      <Link to = "/writeMenu" className = "return-writemenu">
                        <img src = "https://cdn4.iconfinder.com/data/icons/lifestyle-set-2/100/07a3c3443f894cb3fa7a93ee3c496233-512.png"/>
                        <div>Return to Write Menu</div>
                      </Link>
                    </Col> 
                  </Grid>

                  <Grid className = "fourth-row-right">
                    <Col md = {3} className = "col-md-offset-8">
                      <Link to = "/chboard" className = "chboard">
                        <img src = "https://cdn4.iconfinder.com/data/icons/office-34/256/10-512.png"/>
                        <div>View Chapter</div>
                      </Link>
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
    chapterResponse: state.chapterReducer,
    registerResponse: state.registerReducer,
    newBookResponse: state.newBookReducer

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    chapterAction: ChapterAction
  }, dispatch)
}

// export default tChapters;
export default connect(mapStateToProps,mapDispatchToProps)(tChapters);


