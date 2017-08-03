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


class tPlotBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            plotData: [],
        }
        //
        //this.delete = this.getChapters.bind(this);
    }



    componentDidMount(){
        var username = this.props.registerResponse.name;
        var book = this.props.match.params.book;

        $.getJSON(`http://localhost:5000/plot?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                plotData: serverData
            })
        });


        //console.log(this.state.chapterData)
    }

    deletePlot(chapterId){
        var book = this.props.match.params.book;
        $.getJSON(`http://localhost:5000/plot?action=${chapterId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        this.props.history.push(`/plotboard/${book}`);
    }



    render(){

        var writeMenu = '/write/' + this.props.match.params.book;
        var plotArray = [];

        this.state.plotData.map((plot, index)=>{
            console.log(plot);

            var edit = '/plot/' + this.props.match.params.book +'?id=' + plot.id;

            plotArray.push(
                <div>
                    <Grid className="view-width">
                        <Col md = {10} className="view-card">


                            <div>
                                <div className = "questions">1. Which events in the book are the major ones/the ones advancing the plot?</div>
                                <div>{plot.main_plot}</div>
                            </div>

                            <div>
                                <div className = "questions">2. How do the minor events contribute to the main plot?</div>
                                <div>{plot.subplot}</div>
                            </div>

                            <div>
                                <div className = "questions">3. What justifies the subplots if there are any?</div>
                                <div>{plot.subplot_reasons}</div>
                            </div>

                            <div>
                                <div className = "questions">4. What direct actions from the main characters affect the plot?</div>
                                <div>{plot.direct_actions}</div>
                            </div>

                            <div>
                                <div className = "questions">5. What indirect actions from the main character affect the plot?</div>
                                <div>{plot.indirect_actions}</div>
                            </div>






                            <div>
                                <div id = "one">What are the characters main motivations?</div>
                                <div>{plot.motivation}</div>
                            </div>

                            <div>
                                <div id = "two">What type of plot? Character,plot, or idea driven?</div>
                                <div>{plot.plot_type}</div>
                            </div>

                            <div>
                                <div id = "three">Do the events unfold chronologically or non-chronologically?</div>
                                <div>{plot.plot_order}</div>
                            </div>

                            <div>
                                <div id = "four">What are the critical points of foreshadowing?</div>
                                <div>{plot.foreshadow}</div>
                            </div>

                            <div>
                                <div id = "five">How is the plot credible according to the rules of the world?</div>
                                <div>{plot.credibility}</div>
                            </div>






                            <div>
                                <div id = "one">Are all flashbacks strong or do some lessen the dramatic movement of the story?</div>
                                <div>{plot.flashbacks}</div>
                            </div>

                            <div>
                                <div id = "two">What is the overall arc or journey of the character?</div>
                                <div>{plot.journey}</div>
                            </div>

                            <div>
                                <div id = "three">What are the stakes for the main characters?</div>
                                <div>{plot.stakes}</div>
                            </div>

                            <div>
                                <div id = "four">Who is your character’s worthy opponent? Describe</div>
                                <div>{plot.antagonist}</div>
                            </div>

                            <div>
                                <div id = "five">What’s the plot summary in one sentence?</div>
                                <div>{plot.summary}</div>
                                <br/><br/>


                            </div>
                            <br/>
                            <div><br/><Link to = {edit} className = "chboard">
                                <Button className = "btn btn-info" type="button">
                                    Edit Chapter
                                </Button>
                            </Link>	<Button className = "btn btn-danger" type="button" onClick={()=>{this.deletePlot(plot.id)}}>
                                Delete Chapter
                            </Button></div>



                        </Col>

                    </Grid>
                </div>


            )
        })

        if(plotArray.length === 0){
            var textHeader = "It doesn't exist. Go back and create one!"
        }else{
            var textHeader = "Your Chapter Responses";
        }



        return(
            <div>
                <h1>{textHeader}</h1>
                {plotArray}


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
export default connect(mapStateToProps,null)(tPlotBoard);