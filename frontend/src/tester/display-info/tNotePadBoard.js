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
        var book = this.props.match.params.book;
        $.getJSON(`http://localhost:5000/notepad?action=${notePadId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        this.props.history.push(`/write/${book}`);
    }



    render(){

        var writeMenu = '/write/' + this.props.match.params.book;
        var notePadArray = [];

        this.state.notePadData.map((notepad, index)=>{
            console.log(notepad);

            var edit = '/notepad/' + this.props.match.params.book +'?id=' + notepad.id;

            notePadArray.push(
                <div className="text-center">


                    <div>
                        <div id = "four">NotePad</div>
                        <div>{notepad.notepad}</div>
                        <br/><br/>
                    </div>


                    <br/>
                    <div><br/><Link to = {edit} className = "chboard">
                        <Button className = "btn" type="button">
                            Edit NotePad
                        </Button>
                    </Link>	<Button className = "btn" type="button" onClick={()=>{this.deleteNotePad(notepad.id)}}>
                        Delete NotePad
                    </Button></div>






                </div>


            )
        })

        if(notePadArray.length === 0){
            var textHeader = "It doesn't exist. Go back and create one!"
        }else{
            var textHeader = "Your NotePad Responses";
        }



        return(
            <div>
                <h1>{textHeader}</h1>
                {notePadArray}


                <Grid className = "fourth-row-left">
                    <Col md = {3}>
                        <Link to = {writeMenu} className = "return-writemenu">
                            <img src = "https://cdn4.iconfinder.com/data/icons/lifestyle-set-2/100/07a3c3443f894cb3fa7a93ee3c496233-512.png"/>
                            <div>Return to Write Menu</div>
                        </Link>
                    </Col>
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