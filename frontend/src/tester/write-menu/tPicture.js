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
// import UserProfileAction from '../actions/UserProfileAction';
import $ from 'jquery';


class tPicture extends Component{
  constructor(props) {
    super(props);
    this.state = {
      picData: []
    }
    this.handlePictureSubmit = this.handlePictureSubmit.bind(this);
  }

componentDidMount(){
  var username = this.props.registerResponse.name;
  var book = this.props.match.params.book;

  $.getJSON(`http://localhost:5000/bookpic?username=${username}&book=${book}`, (serverData)=>{
      // log the JSON response from Express
      console.log(serverData);
      this.setState({
          picData: serverData
      })
  })
  
}

    deleteImage(imageId){
        var book = this.props.match.params.book;
        $.getJSON(`http://localhost:5000/bookpic?action=${imageId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        this.props.history.push(`/write/${book}`);
    }

    handlePictureSubmit(event){
      event.preventDefault();
      event.stopPropagation();
      console.log(event.target);
      var bookTitle = document.getElementById('pic-id').value;
      var bookPicture = document.getElementById('pic-id2').files[0];
      var formData = new FormData();
      formData.append('book', bookTitle);
      formData.append('bookPicture', bookPicture);
      formData.append('username', this.props.registerResponse.name);

      var thePromise = $.ajax({
        method: "POST",
        url: "http://localhost:5000/bookpic",
        processData: false,
        dataType: 'json',
        cache: false,
        data: formData,
        contentType: false
      });
        //this.props.history.push(`/write/${this.props.match.params.book}`)
    }
 
	render(){

  var bookPicArray = [];

    this.state.picData.map((image, index)=>{
      bookPicArray.push(
        <div>
          <img src={image.book_image.slice(18)}/>
          <Button className = "btn" type="button" onClick={()=>{this.deleteImage(image.id)}}>
                        Delete Picture
          </Button>
        </div>

      )
    });

  var username = this.props.registerResponse.name;
  var book = this.props.match.params.book;
     

		return(
			<div>
        <div className = "prof-pic">
            {bookPicArray}
        </div>
        <div><br/> 

        </div>
        <p><br/><br/><br/><br/><br/><br/></p>
        <form onSubmit={this.handlePictureSubmit} encType="multipart/form-data">
            <div class="md-col-4 md-col-offset-2">
                <input name='username' type='hidden' value={username} />
                <input id='pic-id' name='book' type='hidden' value={book} />
                <input id='pic-id2' type='file' name='fileUploaded' />
                <input class="btn btn-primary" type="submit" />
            </div>
        </form> 
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
  }, dispatch)
}

// export default tPicture;
export default connect(mapStateToProps,mapDispatchToProps)(tPicture);