import React, {Component} from 'react'
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import tChapterDisplay from './tChapterDisplay'; 
// import ChapterAction from '..../actions/ChaptersAction';


class tChapterBoard extends Component{
	constructor(props) {
		super(props);
		this.state = {
			chaptersList: [],
		}
		// 
		this.getchapters = this.getChapters.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.getChapters(nextProps);
	}

	componentDidMount() {
		// console.log(this.props.match)
		this.getChapters(this.props);
	}

	getChapters(props){
		const ch = props.match.params.chapters
		// console.log(pl)
		const url = window.hostAddress + `/chapters/${ch}/get`
		$.getJSON(url,(data)=>{
			console.log(data);
			this.setState({
				chaptersList: data
			})
		});		
	}

	
	render(){

    var chaptersArray = [];
		this.state.chaptersList.map((chapters, index)=>{
			chaptersArray.push(<tChapterDisplay 
									key={index} 
									chapters={chapters} 


								/>)
		})

		if(this.state.chaptersList.length == 0){
			var textHeader = "It doesn't exist. Go back and create one!"
		}else{
			var textHeader = "Your Chapter Responses";
		}

    console.log(this.props);

		return(
			<div>
				<h1>{textHeader}</h1> 
				 {chaptersArray} 
		    </div>

		)
	}
}

function mapStateToProps(state){
	return{
		registerResponse: state.registerReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		// chapterAction: ChapterAction
	}, dispatch)
}

// export default tChapterBoard
export default connect(mapStateToProps,mapDispatchToProps)(tChapterBoard);