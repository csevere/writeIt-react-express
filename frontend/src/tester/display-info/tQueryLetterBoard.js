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


class tQueryLetterBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            queryLetterData: [],
        }
        //
        //this.delete = this.getChapters.bind(this);
    }



    componentDidMount(){
        var username = this.props.registerResponse.name;
        var book = this.props.match.params.book;

        $.getJSON(`http://localhost:5000/queryletter?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                queryLetterData: serverData
            })
        });


        //console.log(this.state.chapterData)
    }

    deleteQueryLetter(queryLetterId){
        var book = this.props.match.params.book;
        $.getJSON(`http://localhost:5000/queryletter?action=${queryLetterId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        this.props.history.push(`/write/${book}`);
    }



    render(){

        var writeMenu = '/write/' + this.props.match.params.book;
        var queryLetterArray = [];

        this.state.queryLetterData.map((query, index)=>{
            console.log(query)

            var edit = '/q-letter/' + this.props.match.params.book +'?id=' + query.id;

            queryLetterArray.push(
                <div className="text-center">


                    <div>
                        <div id = "one">Have you researched the agent and the type of authods he/she represents?</div>
                        <div>{query.query_clarity}</div>
                    </div>

                    <div>
                        <div id = "two">In setting up the story, specify exactly what your character wants the most in the world?</div>
                        <div>{query.query_boring}</div>
                    </div>

                    <div>
                        <div id = "three">Specify what's getting in the way of your character's goals?</div>
                        <div>{query.query_balance}</div>
                    </div>

                    <div>
                        <div id = "four">What's at stake if your character fails?</div>
                        <div>{query.query_stakes}</div>
                    </div>

                    <div>
                        <div id = "five">How can you show rather than tell the agent about your main character?</div>
                        <div>{query.query_advance}</div>
                    </div>





                    <div>
                        <div id = "one">How can you show your characters emotional journey from start to end?</div>
                        <div>{query.query_resolve}</div>
                    </div>

                    <div>
                        <div id = "two">What are the stats of your book: Genre,target audience, word count?</div>
                        <div>{query.query_voice}</div>
                    </div>

                    <div>
                        <div id = "three">What comtemporary titles match your book?</div>
                        <div>{query.query_action}</div>
                    </div>

                    <div>
                        <div id = "four">Is your bio too long?</div>
                        <div>{query.query_personality}</div>
                    </div>

                    <div>
                        <div id = "five">Which sentences generate multiple questions? Rewrite them here.</div>
                        <div>{query.query_romance}</div>
                        <br/><br/>


                    </div>
                    <br/>
                    <div><br/><Link to = {edit} className = "chboard">
                        <Button className = "btn" type="button">
                            Edit Query Letter
                        </Button>
                    </Link>	<Button className = "btn" type="button" onClick={()=>{this.deleteQueryLetter(query.id)}}>
                        Delete Query Letter
                    </Button></div>






                </div>


            )
        })

        if(queryLetterArray.length === 0){
            var textHeader = "It doesn't exist. Go back and create one!"
        }else{
            var textHeader = "Your Chapter Responses";
        }



        return(
            <div>
                <h1>{textHeader}</h1>
                {queryLetterArray}


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
export default connect(mapStateToProps,null)(tQueryLetterBoard);
