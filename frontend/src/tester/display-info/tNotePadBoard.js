/**
 * Created by mephisto on 7/31/17.
 */
import React, {Component} from 'react'
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';

// import ChapterAction from '..../actions/ChaptersAction';


class tNotePadBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            notePadData: [],
        }
        //
        //this.delete = this.getChapters.bind(this);
    }



    componentDidMount(){
        var username = this.props.registerResponse.name;
        var book = this.props.match.params.book;

        $.getJSON(`http://localhost:5000/notepad?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                notePadData: serverData
            })
        });


        //console.log(this.state.chapterData)
    }

    deleteNotePad(notePadId){
        var username = this.props.registerResponse.name;
        var book = this.props.match.params.book;
        $.getJSON(`http://localhost:5000/notepad?action=${notePadId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        $.getJSON(`http://localhost:5000/notepad?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                notePadData: serverData
            })
        });
        this.props.history.push(`/noteboard/${book}`);
    }



    render(){

        var writeMenu = '/write/' + this.props.match.params.book;
        var notepad  = '/notepad/' + this.props.match.params.book;
        var notePadArray = [];

        this.state.notePadData.map((notepad, index)=>{
            console.log(notepad);

            var edit = '/notepad/' + this.props.match.params.book +'?id=' + notepad.id;

            notePadArray.push(
                <div>
                    <Grid>

                        <div>
                            <div className = "notebook">Notebook</div>
                            <div>{notepad.notepad}</div>
                            <br/><br/>
                        </div>


                        <br/>
                        <div><br/><Link to = {edit} className = "chboard">
                            <Button className = "btn btn-info" type="button">
                                Edit NotePad
                            </Button>
                        </Link>	<Button className = "btn btn-danger" type="button" onClick={()=>{this.deleteNotePad(notepad.id)}}>
                            Delete NotePad
                        </Button></div>
                    </Grid> 

                </div>


            )
        })

        if(notePadArray.length === 0){
            var textHeader = "You have no notebook pages to view. Return and create one."
        }else{
            var textHeader = "Your Notebook pages";
        }



        return(
            <div>
                <Grid>
                    <Row className = "view-board">
                        <Col sm = {12} className = "display-note">

                            <h1>{textHeader}</h1>
                            {notePadArray}
                        </Col>
                    </Row> 


                    <Row>
                        <Grid className = "fourth-row-left">
                            <Col md = {3}>
                                <Link to = {writeMenu} className = "return-writemenu">
                                    <img src = "images/writemenu-icon.png"/>
                                    <div>Return to Write Menu</div>
                                </Link>
                            </Col>

                            <Col md = {3}>
                                <Link to = {notepad} className = "return-quest">
                                    <img src = "/images/create-new-icon.png"/>
                                    <div>Create a new Notebook Page</div>
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
        registerResponse: state.registerReducer
    }
}

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({
// 		// chapterAction: ChapterAction
// 	}, dispatch)
// }

// export default tChapterBoard
export default connect(mapStateToProps,null)(tNotePadBoard);