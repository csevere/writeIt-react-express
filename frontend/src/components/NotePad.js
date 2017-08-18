import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Button,Form,FormGroup,ControlLabel,FormControl,Image } from 'react-bootstrap';
import NotePadAction from '../actions/NotePadAction';
import {connect} from 'react-redux';
import  {bindActionCreators} from 'redux';
import $ from 'jquery';
import writeMenu from '../components/writeMenu';
import notePadBoard from '../tester/display-info/tNotePadBoard';

class NotePad extends Component{
    constructor(props) {
        super(props);
        this.state = {
            notePadData: {
                notepad: ''
            }

        }
        this.handleNotes = this.handleNotes.bind(this);

    }

    handleNotes(event){
        event.preventDefault();


        var username = this.props.registerResponse.name;

        var book = this.props.match.params.book;

        var notepad = document.getElementById('text').value;
        var id = this.props.location.search.slice(4);



        this.props.notePadAction({
            username: username,
            book: book,
            notepad: notepad,
            id: id
        });

        this.props.history.push(`/write/${this.props.match.params.book}`);

    }


    componentDidMount(){

        //console.log(this.props.location.search);
        if(this.props.location.search.length !== 0){
            var id = this.props.location.search.slice(4);
            console.log(id);
            $.getJSON(`${window.hostAddress}/notepad?id=${id}`, (serverData)=>{
                // log the JSON response from Express
                //console.log(serverData);
                this.setState({
                    notePadData: serverData[0]
                })
            })
        }

    }


    render(){


        console.log(this.props.match.params.book)


        var notepad = this.state.notePadData.notepad;
        var writeMenu = '/write/' + this.props.match.params.book;
        var notePadBoard = '/noteboard/' + this.props.match.params.book;

        return(
             <div>
                 <Grid className = "writemenucat text-center ch-forms">
                    <Row>

                        <Col md = {8} className = "col-md-offset-4 notepad-form">

                            <Form>

                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel id="titleLabel">Title:</ControlLabel>
                                    <FormControl id="title" componentClass="textarea" />
                                </FormGroup>


                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel id="notesLabel">Notes:</ControlLabel>
                                    <FormControl id="notes" componentClass="textarea" />
                                </FormGroup>

                                <Link to = "/"><Button id = "notepad-btn" bsStyle="primary" bsSize="small"
                                type="submit">Submit</Button></Link> 

                            </Form> 
                        </Col>
                        
                    </Row>

                </Grid>
                     <Row>
                            <Grid className = "fourth-row-left">
                                <Col md = {3}>
                                    <Link to = {writeMenu} className = "return-writemenu">
                                        <img src = "/images/writemenu-icon.png"/>
                                        <div>Return to Write Menu</div>
                                    </Link>
                                </Col>
                            </Grid>

                            <Grid className = "fourth-row-right">
                                <Col md = {3} className = "col-md-offset-8">
                                        <img src = "/images/viewboard-icon.png"/>
                                        <div>View Notebook</div>
                                </Col>
                            </Grid>
                    </Row>
            </div>
        )}
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
export default connect(mapStateToProps,mapDispatchToProps)(NotePad);
// export default tNotePad;