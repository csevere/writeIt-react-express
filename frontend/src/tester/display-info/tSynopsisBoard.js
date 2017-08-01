/**
 * Created by mephisto on 8/1/17.
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
import ChapterDisplay from './ChapterDisplay';
// import ChapterAction from '..../actions/ChaptersAction';


class tSynopsisBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            synopsisData: [],
        }
        //
        //this.delete = this.getChapters.bind(this);
    }



    componentDidMount(){
        var username = this.props.registerResponse.name;
        var book = this.props.match.params.book;

        $.getJSON(`http://localhost:5000/synopsis?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                synopsisData: serverData
            })
        });


        //console.log(this.state.chapterData)
    }

    deleteSynopsis(synopsisId){
        var book = this.props.match.params.book;
        $.getJSON(`http://localhost:5000/synopsis?action=${synopsisId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        this.props.history.push(`/write/${book}`);
    }



    render(){

        var writeMenu = '/write/' + this.props.match.params.book;
        var synopsisArray = [];

        this.state.synopsisData.map((synopsis, index)=>{
            console.log(synopsis)

            var edit = '/synopsis/' + this.props.match.params.book +'?id=' + synopsis.id;

            synopsisArray.push(
                <div className="text-center">


                    <div>
                        <div id = "one">Where and when does the story take place?</div>
                        <div>{synopsis.synop_beg1}</div>
                    </div>

                    <div>
                        <div id = "two">Who is the protagonist?</div>
                        <div>{synopsis.synop_prot}</div>
                    </div>

                    <div>
                        <div id = "three">What major and immediate problem is the protagonist facing?</div>
                        <div>{synopsis.synop_prob}</div>
                    </div>

                    <div>
                        <div id = "four">Does your protagonist decide to take a leap of faith to change?</div>
                        <div>{synopsis.synop_char}</div>
                    </div>

                    <div>
                        <div id = "five">How has the situation of your protagonist changed at the end of the novel?</div>
                        <div>{synopsis.synop_change1}</div>
                    </div>






                    <div>
                        <div id = "one">Will readers feel that your protagonist has made the right decision?</div>
                        <div>{synopsis.synop_reader}</div>
                    </div>

                    <div>
                        <div id = "two">Who is the impact character for the protagonist?</div>
                        <div>{synopsis.synop_impact}</div>
                    </div>

                    <div>
                        <div id = "three">How does the impact character influence the main character to change?</div>
                        <div>{synopsis.synop_change2}</div>
                    </div>

                    <div>
                        <div id = "four">Where does the relationship between the protagonist and the impact character stand in the beginning of the work?</div>
                        <div>{synopsis.synop_rel_start}</div>
                    </div>

                    <div>
                        <div id = "five">How is their relationship tested throughout the story?</div>
                        <div>{synopsis.synop_test}</div>
                    </div>






                    <div>
                        <div id = "one">What is the biggest change in their relationship?</div>
                        <div>{synopsis.synop_rel_conflict}</div>
                    </div>

                    <div>
                        <div id = "two">How is their relationship different by the end of the story?</div>
                        <div>{synopsis.synop_rel_end}</div>
                    </div>

                    <div>
                        <div id = "three">What issues does your character struggle with throughout the story?</div>
                        <div>{synopsis.synop_issue}</div>
                    </div>

                    <div>
                        <div id = "four">WWhat are the themes of your story?</div>
                        <div>{synopsis.synop_theme}</div>
                    </div>

                    <div>
                        <div id = "five">What is the message or moral of your story?</div>
                        <div>{synopsis.synop_message}</div>
                        <br/><br/>


                    </div>
                    <br/>
                    <div><br/><Link to = {edit} className = "chboard">
                        <Button className = "btn" type="button">
                            Edit Chapter
                        </Button>
                    </Link>	<Button className = "btn" type="button" onClick={()=>{this.deleteSynopsis(synopsis.id)}}>
                        Delete Chapter
                    </Button></div>






                </div>


            )
        })

        if(synopsisArray.length === 0){
            var textHeader = "It doesn't exist. Go back and create one!"
        }else{
            var textHeader = "Your Chapter Responses";
        }



        return(
            <div>
                <h1>{textHeader}</h1>
                {synopsisArray}


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
export default connect(mapStateToProps,null)(tSynopsisBoard);