import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Button,Form } from 'react-bootstrap';
import NotePadAction from '../actions/NotePadAction';
import {connect} from 'react-redux';
import  {bindActionCreators} from 'redux';

class tNotePad extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleNotes = this.handleNotes.bind(this);

    }

    handleNotes(event){
    	event.preventDefault();


        var username = this.props.registerResponse.name;

        var book = this.props.match.params.book;

		var notepad = document.getElementById('text').value;



        this.props.notePadAction({
            username: username,
            book: book,
            notepad: notepad,
        });

        this.props.history.push(`/write/${book}`);

	}
		render(){
		return(
			<div>
				<Grid>
					<Row>
						<Col lg={18} >
							<h1>NoteBook</h1>
							<Button className="npButton" bsStyle="success" bsSize="small" type="submit" onClick={this.handleNotes}>
								Submit
							</Button>
							<div className="nptextBox">
								<textarea id="text">
								
								</textarea>
							</div>

						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}


function mapStateToProps(state){
    return{
        notePadResponse: state.notePadReducer,
        registerResponse: state.registerReducer


    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        notePadAction: NotePadAction
    }, dispatch)
}

// export default tCharacter;
export default connect(mapStateToProps,mapDispatchToProps)(tNotePad);
// export default tNotePad;