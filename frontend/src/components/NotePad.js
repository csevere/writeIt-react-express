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


    // componentDidMount(){

    //     //console.log(this.props.location.search);
    //     if(this.props.location.search.length !== 0){
    //         var id = this.props.location.search.slice(4);
    //         console.log(id);
    //         $.getJSON(`http://localhost:5000/notepad?id=${id}`, (serverData)=>{
    //             // log the JSON response from Express
    //             //console.log(serverData);
    //             this.setState({
    //                 notePadData: serverData[0]
    //             })
    //         })
    //     }

    // }


    render(){


        console.log(this.props.match.params.book)


        var notepad = this.state.notePadData.notepad;
        var writeMenu = '/write/' + this.props.match.params.book;
        var notePadBoard = '/noteboard/' + this.props.match.params.book;

        return(
             <div>
                 <Grid className = "notepad-wrapper">
                    <Row>

                        <Col md = {8} className = "col-md-offset-4 notepad-form">

                            <Form>

                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Title:</ControlLabel>
                                    <FormControl id="title" componentClass="textarea" />
                                </FormGroup>


                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Notes:</ControlLabel>
                                    <FormControl id="notes" componentClass="textarea" />
                                </FormGroup>

                                <Link to = "/"><Button className = "btn-default btn" bsStyle="primary" bsSize="large"
                                type="submit">Submit</Button></Link> 

                            </Form> 
                        </Col>
                        
                    </Row>


                </Grid>
                 <Row>
                        <Grid className = "np-row-left">
                            <Col md = {6}>
                                <Link to = {writeMenu} className = "return-writemenu">
                                    <img src = "/images/writemenu-icon.png"/>
                                    <div id="writeMenu"><Link to = {writeMenu}><Button className = "btn-default btn" bsStyle="warning" bsSize="large"
                                    type="submit">Return to Write Menu</Button></Link></div>
                                </Link>
                            </Col>
                        </Grid>

                        <Grid className = "np-row-right">
                            <Col md = {6}>
                                <Link to = {notePadBoard} className = "chboard">
                                    <img src = "/images/viewboard-icon.png"/>
                                    <div id="viewNotePad"><Link to = "/notepad"><Button className = "btn-default btn" bsStyle="danger" bsSize="large"
                                    type="submit">View Notebook</Button></Link></div>
                                </Link>
                            </Col>
                        </Grid>
                    </Row>
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
export default connect(mapStateToProps,mapDispatchToProps)(NotePad);
// export default tNotePad;