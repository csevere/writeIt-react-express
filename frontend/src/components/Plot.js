import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import  {bindActionCreators} from 'redux';
// import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlotAction from '../actions/PlotAction';
import $ from 'jquery';


class Plot extends Component{
    constructor(props) {
        super(props);
        this.state = {
                plotData: {
                    main_plot: '',
                    subplot: '',
                    subplot_reasons: '',
                    direct_actions: '',
                    indirect_actions: '',
                    motivation: '',
                    plot_type: '',
                    plot_order: '',
                    foreshadow: '',
                    credibility: '',
                    flashbacks: '',
                    journey: '',
                    stakes: '',
                    antagonist: '',
                    summary: '',
                }
            // nameError: null,
            // emailError: null,
            // formError: false
        }
        this.handlePlot = this.handlePlot.bind(this);

    }

    handlePlot(event){
        event.preventDefault();

        var error = false;

        var main_plot = document.getElementById('main_plot').value;
        var subplot = document.getElementById('subplot').value;
        var subplot_reasons = document.getElementById('subplot_reasons').value;
        var direct_actions = document.getElementById('direct_actions').value;
        var indirect_actions = document.getElementById('indirect_actions').value;
        var motivation = document.getElementById('motivation').value;
        var plot_type = document.getElementById('plot_type').value;
        var plot_order = document.getElementById('plot_order').value;
        var foreshadow = document.getElementById('foreshadow').value;
        var credibility = document.getElementById('credibility').value;
        var flashbacks = document.getElementById('flashbacks').value;
        var journey = document.getElementById('journey').value;
        var stakes = document.getElementById('stakes').value;
        var antagonist = document.getElementById('antagonist').value;
        var summary = document.getElementById('summary').value;



        console.log(this.props.registerResponse);
        var book = this.props.match.params.book;
        var username = this.props.registerResponse.name;
        var id = this.props.location.search.slice(4);

        // //Name
        // if(name.length < 1){
        //   var nameError = "error";
        //   error=true;
        // }
        // else{
        //   var nameError = "success"
        // }

        // Email
        // if(name.length < 3){var emailError = "error"; error=true}
        // else{var emailError = "success"}


        // console.log(name);
        if(error){
            console.log("ERROR!!!")
            // this.setState({
            //   formError: true,
            //   nameError: nameError
            // })

            console.log(error);
        }else{
            this.props.plotAction({
                username: username,
                main_plot: main_plot,
                subplot: subplot,
                subplot_reasons: subplot_reasons,
                direct_actions: direct_actions,
                indirect_actions: indirect_actions,
                motivation: motivation,
                plot_type: plot_type,
                plot_order: plot_order,
                foreshadow: foreshadow,
                credibility: credibility,
                flashbacks: flashbacks,
                journey: journey,
                stakes: stakes,
                antagonist: antagonist,
                summary: summary,
                book: book,
                id: id

            });
            this.props.history.push(`/write/${book}`);
        }

    }

    componentDidMount(){

        //console.log(this.props.location.search);
        if(this.props.location.search.length !== 0){
            var id = this.props.location.search.slice(4);
            console.log(id);
            $.getJSON(`http://localhost:5000/plot?id=${id}`, (serverData)=>{
                // log the JSON response from Express
                //console.log(serverData);
                this.setState({
                    plotData: serverData[0]
                })
            })
        }




    }


    render(){


        var main_plot = this.state.plotData.main_plot;
        var subplot = this.state.plotData.sub_plot;
        var subplot_reasons = this.state.plotData.sub;
        var direct_actions = this.state.plotData.direct_actions;
        var indirect_actions = this.state.plotData.indirect_actions;
        var motivation = this.state.plotData.motivation;
        var plot_type = this.state.plotData.plot_type;
        var plot_order = this.state.plotData.plot_order;
        var foreshadow = this.state.plotData.foreshadow;
        var credibility = this.state.plotData.credibility;
        var flashbacks = this.state.plotData.flashbacks;
        var journey = this.state.plotData.journey;
        var stakes = this.state.plotData.stakes;
        var antagonist = this.state.plotData.antagonist;
        var summary = this.state.plotData.summary;
        
        
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        var writeMenu = '/write/' + this.props.match.params.book;
        var plotBoard = '/plotboard/' + this.props.match.params.book;
        return(
            <div>
                <Grid className = "writemenucat text-center ch-forms">
                    <Row>
                        <Col sm = {8} md = {10} className = "ch-forms-2 col-md-offset-3">
                            <Slider {...settings}>

                                <div className = "slick-form 1">
                                    <Form onSubmit={this.handlePlot}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Which events in the book are the major ones/the ones advancing the plot?</ControlLabel>
                                            <FormControl id="main_plot" componentClass="textarea" placeholder="main-plot" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How do the minor events contribute to the main plot?</ControlLabel>
                                            <FormControl id="subplot" componentClass="textarea" placeholder="subplot" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What justifies the subplots if there are any?</ControlLabel>
                                            <FormControl id="subplot_reasons" componentClass="textarea" placeholder="subplot-reasons" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What direct actions from the main characters affect the plot?</ControlLabel>
                                            <FormControl id="direct_actions" componentClass="textarea" placeholder="direct-actions" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What indirect actions from the main character affect the plot?</ControlLabel>
                                            <FormControl id="indirect_actions" componentClass="textarea" placeholder="indirect-actions" />
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className = "slick-form 2">
                                    <Form onSubmit={this.handlePlot}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What are the characters main motivations?</ControlLabel>
                                            <FormControl id="motivation" componentClass="textarea" placeholder="motivation" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What type of plot? Character,plot, or idea driven?</ControlLabel>
                                            <FormControl id="plot_type" componentClass="textarea" placeholder="plot-type" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Do the events unfold chronologically or non-chronologically?</ControlLabel>
                                            <FormControl id="plot_order" componentClass="textarea" placeholder="plot-order" />
                                        </FormGroup>


                                        <FormGroup controlId= "formControlsTextarea">
                                            <ControlLabel>What are the critical points of foreshadowing?</ControlLabel>
                                            <FormControl id="foreshadow" componentClass="textarea" placeholder="foreshadow" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>How is the plot credible according to the rules of the world?</ControlLabel>
                                            <FormControl id="credibility" componentClass="textarea" placeholder= "credibility" />
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className = "slick-form 3">
                                    <Form onSubmit={this.handlePlot}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Are all flashbacks strong or do some lessen the dramatic movement of the story?</ControlLabel>
                                            <FormControl id="flashbacks" componentClass="textarea" placeholder="flashbacks" />
                                        </FormGroup>

                                        <FormGroup controlId= "formControlsTextarea">
                                            <ControlLabel>What is the overall arc or journey of the character?</ControlLabel>
                                            <FormControl id="journey" componentClass="textarea" placeholder="journey" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What are the stakes for the main characters?</ControlLabel>
                                            <FormControl id="stakes" componentClass="textarea" placeholder="stakes" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Who is your character’s worthy opponent? Describe</ControlLabel>
                                            <FormControl id="antagonist" componentClass="textarea" placeholder="antagonist" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>What’s the plot summary in one sentence?</ControlLabel>
                                            <FormControl id="summary" componentClass="textarea" placeholder="summary" />
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>

                            </Slider>

                        </Col>

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
                                    <Link to = {plotBoard} className = "pboard">
                                        <img src = "https://cdn4.iconfinder.com/data/icons/office-34/256/10-512.png"/>
                                        <div>View Plot</div>
                                    </Link>
                                </Col>
                            </Grid>
                        </Row>

                    </Row>
                </Grid>
            </div>

        )
    }
}


function mapStateToProps(state){
    return{
        // characterResponse: state.characterReducer,
        registerResponse: state.registerReducer,
        plotResponse: state.plotReducer,
        newBookResponse: state.newBookReducer

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        plotAction: PlotAction
    }, dispatch)
}

// export default tPlot;
export default connect(mapStateToProps,mapDispatchToProps)(Plot);


/**
 * Created by mephisto on 7/29/17.
 */
