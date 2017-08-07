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
        var username = this.props.registerResponse.name;
        $.getJSON(`http://localhost:5000/plot?action=${chapterId}`, (serverData)=>{

            //console.log(serverData);
            // this.setState({
            //     chapterData: serverData
            // })

        });
        $.getJSON(`http://localhost:5000/plot?username=${username}&book=${book}`, (serverData)=>{

            //console.log(serverData);
            this.setState({
                plotData: serverData
            })
        });
        this.props.history.push(`/write/${book}`);
    }



    render(){

        var writeMenu = '/write/' + this.props.match.params.book;
        var plot = '/plot/' + this.props.match.params.book;
        var plotArray = [];

        this.state.plotData.map((plot, index)=>{
            console.log(plot);

            var edit = '/plot/' + this.props.match.params.book +'?id=' + plot.id;

            plotArray.push(
                <div>
                    <Grid className="view-width">
                        <Col md = {5} className="view-card">


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
                                <div className= "questions">6. What are the characters main motivations?</div>
                                <div>{plot.motivation}</div>
                            </div>

                            <div>
                                <div className = "questions">7. What type of plot? Character,plot, or idea driven?</div>
                                <div>{plot.plot_type}</div>
                            </div>

                            <div>
                                <div className = "questions">8. Do the events unfold chronologically or non-chronologically?</div>
                                <div>{plot.plot_order}</div>
                            </div>

                            <div>
                                <div className = "questions">9. What are the critical points of foreshadowing?</div>
                                <div>{plot.foreshadow}</div>
                            </div>

                            <div>
                                <div className = "questions">10. How is the plot credible according to the rules of the world?</div>
                                <div>{plot.credibility}</div>
                            </div>






                            <div>
                                <div className = "questions">11. Are all flashbacks strong or do some lessen the dramatic movement of the story?</div>
                                <div>{plot.flashbacks}</div>
                            </div>

                            <div>
                                <div className = "questions">12. What is the overall arc or journey of the character?</div>
                                <div>{plot.journey}</div>
                            </div>

                            <div>
                                <div className = "questions"> 13. What are the stakes for the main characters?</div>
                                <div>{plot.stakes}</div>
                            </div>

                            <div>
                                <div className = "questions">14. Who is your character’s worthy opponent? Describe</div>
                                <div>{plot.antagonist}</div>
                            </div>

                            <div>
                                <div className = "questions">15. What’s the plot summary in one sentence?</div>
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
            var textHeader = "You have no plot guide to view. Return and create one."
        }else{
            var textHeader = "Your Plot Guide";
        }


        return(
            <div>

               <Grid className = "view-board">
                    <Row>
                        <Col sm = {12} className = "display-resp">
                            <h1>{textHeader}</h1>                  
                            {plotArray}
                        </Col>
                    </Row>
                        
                
                    <Row>
                        <Grid className = "fourth-row-left">
                            <Col md = {3}>
                                <Link to = {writeMenu} className = "return-writemenu">
                                    <img src = "/images/writemenu-icon.png"/>
                                    <div><h5>Return to Write Menu</h5></div>
                                </Link>
                            </Col>

                            <Col md = {3}>
                                <Link to = {plot} className = "return-quest">
                                    <img src = "/images/create-new-icon.png"/>
                                    <div><h5>Create a new Plot Guide</h5></div>
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
export default connect(mapStateToProps,null)(tPlotBoard);