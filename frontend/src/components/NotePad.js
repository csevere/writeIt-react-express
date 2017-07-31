import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Button,Form } from 'react-bootstrap';
import NotePadAction from '../actions/NotePadAction';
import {connect} from 'react-redux';
import  {bindActionCreators} from 'redux';
import $ from 'jquery';

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

        this.props.history.push(`/write/${book}`);

    }


    componentDidMount(){

        //console.log(this.props.location.search);
        if(this.props.location.search.length !== 0){
            var id = this.props.location.search.slice(4);
            console.log(id);
            $.getJSON(`http://localhost:5000/notepad?id=${id}`, (serverData)=>{
                // log the JSON response from Express
                //console.log(serverData);
                this.setState({
                    notePadData: serverData[0]
                })
            })
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

        var notepad = this.state.notePadData.notepad;
        var writeMenu = '/write/' + this.props.match.params.book;
        var notePadBoard = '/noteboard/' + this.props.match.params.book;

        return(
            <div>
                <Grid>
                    <Row>
                        <Col lg={18} >
                            <h1>Welcome to your Note Pad </h1>
                            <Button className="npButton" bsStyle="success" bsSize="small" type="submit" onClick={this.handleNotes}>
                                Submit
                            </Button>
                            <div className="nptextBox">
								<textarea id="text">
								Feel free to take notes here:
								</textarea>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Grid className = "fourth-row-left">
                            <Col md = {3}>
                                <Link to = {writeMenu} className = "return-writemenu">
                                    <img src = "https://cdn4.iconfinder.com/data/icons/lifestyle-set-2/100/07a3c3443f894cb3fa7a93ee3c496233-512.png"/>
                                    <div>Return to Write Menu</div>
                                </Link>
                            </Col>
                        </Grid>

                        <Grid className = "fourth-row-right">
                            <Col md = {3} className = "col-md-offset-8">
                                <Link to = {notePadBoard} className = "chboard">
                                    <img src = "https://cdn4.iconfinder.com/data/icons/office-34/256/10-512.png"/>
                                    <div>View Notepad</div>
                                </Link>
                            </Col>
                        </Grid>


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
export default connect(mapStateToProps,mapDispatchToProps)(NotePad);
// export default tNotePad;