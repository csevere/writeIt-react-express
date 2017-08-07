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
        var username = this.props.registerResponse.name;
        $.getJSON(`http://localhost:5000/queryletter?action=${queryLetterId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        $.getJSON(`http://localhost:5000/queryletter?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                queryLetterData: serverData
            })
        });
        this.props.history.push(`/queryboard/${book}`);
    }



    render(){

        var writeMenu = '/write/' + this.props.match.params.book;
        var qletter = '/q-letter/' + this.props.match.params.book;
        var queryLetterArray = [];

        this.state.queryLetterData.map((query, index)=>{
            console.log(query)

            var edit = '/q-letter/' + this.props.match.params.book +'?id=' + query.id;

            queryLetterArray.push(
                <div>
                    <Grid className="view-width">
                        <Col sm = {5} className="view-card">

                            <div>
                                <div className = "questions">1. Have you researched the genres the agent represents?</div>
                                <div>{query.query_clarity}</div>
                            </div>

                            <div>
                                <div className = "questions">2. In setting up the story, specify exactly what your character wants the most in the world?</div>
                                <div>{query.query_boring}</div>
                            </div>

                            <div>
                                <div className = "questions">3. What does your character want the most in the world?</div>
                                <div>{query.query_balance}</div>
                            </div>

                            <div>
                                <div className = "questions">4. What&apos;s at stake if your character fails?</div>
                                <div>{query.query_stakes}</div>
                            </div>

                            <div>
                                <div className = "questions">5. How can you show rather than tell the agent about your main character?</div>
                                <div>{query.query_advance}</div>
                            </div>





                            <div>
                                <div className = "questions">6. How can you show your characters emotional journey from start to end?</div>
                                <div>{query.query_resolve}</div>
                            </div>

                            <div>
                                <div className = "questions">7. What are the stats of your book: Genre,target audience, word count?</div>
                                <div>{query.query_voice}</div>
                            </div>

                            <div>
                                <div className = "questions">8. What comtemporary titles match your book?</div>
                                <div>{query.query_action}</div>
                            </div>

                            <div>
                                <div className = "questions">9. Is your bio too long?</div>
                                <div>{query.query_personality}</div>
                            </div>

                            <div>
                                <div className = "questions"> 10. Which sentences generate multiple questions? Rewrite them here.</div>
                                <div>{query.query_romance}</div>
                                <br/><br/>


                            </div>
                            <br/>
                            <div><br/><Link to = {edit} className = "chboard">
                                <Button className = "btn btn-info" type="button">
                                    Edit Letter
                                </Button>
                            </Link>	<Button className = "btn btn-danger" type="button" onClick={()=>{this.deleteQueryLetter(query.id)}}>
                                Delete Letter
                            </Button></div>

                        </Col>
                    </Grid>
                </div>


            )
        })

        if(queryLetterArray.length === 0){
            var textHeader = "You have no query letter guide to view. Return and create one."
        }else{
            var textHeader = "Your Query Letter Guide";
        }



        return(
           <div>
                <Grid className = "view-board">
                    <Row>
                        <Col sm = {12} className = "display-resp">
                            <h1>{textHeader}</h1>                  
                            {queryLetterArray}
                        </Col>
                    </Row>
                        
                
                    <Row>
                        <Grid className = "fourth-row-leftb">
                            <Col md = {3}>
                                <Link to = {writeMenu} className = "return-writemenu">
                                    <img src = "/images/writemenu-icon.png"/>
                                    <div><h5>Return to Write Menu</h5></div>
                                </Link>
                            </Col>

                            <Col md = {3}>
                                <Link to = {qletter} className = "return-quest">
                                    <img src = "/images/create-new-icon.png"/>
                                    <div className = "text-center"><h5>Create a new Query Letter Guide</h5></div>
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
export default connect(mapStateToProps,null)(tQueryLetterBoard);
