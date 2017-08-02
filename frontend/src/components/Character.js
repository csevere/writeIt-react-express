import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import  {bindActionCreators} from 'redux';
import CharacterAction from '../actions/CharacterAction';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';





class Character extends Component{
    constructor(props) {
        super(props);
        this.state = {
            characterData: {
                name: '',
                age: '',
                race: '',
                birthday: '',
                physical_desc: '',
                username: '',
                hometown: '',
                type_of_home: '',
                father_info: '',
                mother_info: '',
                sibling_info: '',
                relatives: '',
                friends: '',
                enemies: '',
                mentor: '',
                hobbies: '',
                dress: '',
                leader_follower: '',
                positive_traits: '',
                negative_traits: '',
                temper: '',
                star_sign: '',
                personality: '',
                philosophy: '',
                ambitions: '',
                liked_disliked: ''
            }

        }
        this.handleCharacters = this.handleCharacters.bind(this);

    }

    handleCharacters(event){
        event.preventDefault();
        // console.log(event.targets.length)
        // console.log(document.getElementById('neighborhood').value)

        var error = false;

        var name = document.getElementById('name').value;
        var race = document.getElementById('race').value;
        var age = document.getElementById('age').value;
        var birthday = document.getElementById('birthday').value;
        var physical_desc = document.getElementById('physical_desc').value;
        var hometown = document.getElementById('hometown').value;
        var type_of_home = document.getElementById('type_of_home').value;
        var father_info = document.getElementById('father_info').value;
        var mother_info = document.getElementById('mother_info').value;
        var sibling_info = document.getElementById('sibling_info').value;
        var relatives = document.getElementById('relatives').value;
        var friends = document.getElementById('friends').value;
        var enemies = document.getElementById('enemies').value;
        var mentor = document.getElementById('mentor').value;
        var hobbies = document.getElementById('hobbies').value;
        var dress = document.getElementById('dress').value;
        var leader_follower = document.getElementById('leader_follower').value;
        var positive_traits = document.getElementById('positive_traits').value;
        var negative_traits = document.getElementById('negative_traits').value;
        var temper = document.getElementById('temper').value;
        var star_sign = document.getElementById('star_sign').value;
        var personality = document.getElementById('personality').value;
        var philosophy = document.getElementById('philosophy').value;
        var ambitions = document.getElementById('ambitions').value;
        var liked_disliked = document.getElementById('liked_disliked').value;

        var username = this.props.registerResponse.name;
        // var book = this.props.newBookResponse.newBookData.title;
        //console.log(this.props.match.params);
        var book = this.props.match.params.book;
        var id = this.props.location.search.slice(4);
        console.log(id);

        //console.log(username);
        // console.log(book);
        //Name
        if(name.length < 1){
            var nameError = "error";
            error=true;
        }
        else{
            var nameError = "success"
        }

        //Email
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
            this.props.characterAction({
                name: name,
                age: age,
                race: race,
                birthday: birthday,
                physical_desc: physical_desc,
                username: username,
                hometown: hometown,
                type_of_home: type_of_home,
                father_info: father_info,
                mother_info: mother_info,
                sibling_info: sibling_info,
                relatives: relatives,
                friends: friends,
                enemies: enemies,
                mentor: mentor,
                hobbies: hobbies,
                dress: dress,
                leader_follower: leader_follower,
                positive_traits: positive_traits,
                negative_traits: negative_traits,
                temper: temper,
                star_sign: star_sign,
                personality: personality,
                philosophy: philosophy,
                ambitions: ambitions,
                liked_disliked: liked_disliked,
                book: book,
                id: id
            });
            this.props.history.push(`/charboard/${book}`);
        }

    }

    componentDidMount(){

        //console.log(this.props.location.search);
        if(this.props.location.search.length !== 0){
            var id = this.props.location.search.slice(4);
            console.log(id);
            $.getJSON(`http://localhost:5000/characters?id=${id}`, (serverData)=>{
                // log the JSON response from Express
                //console.log(serverData);
                this.setState({
                    characterData: serverData[0]
                })
            })
        }
    }


    render(){
        console.log(this.state.characterData);

        var name = this.state.characterData.name;
        var race = this.state.characterData.race;
        var age = this.state.characterData.age;
        var birthday = this.state.characterData.birthday;
        var physical_desc = this.state.characterData.physical_desc;
        var hometown = this.state.characterData.hometown;
        var type_of_home = this.state.characterData.type_of_home;
        var father_info = this.state.characterData.father_info;
        var mother_info = this.state.characterData.mother_info;
        var sibling_info = this.state.characterData.sibling_info;
        var relatives = this.state.characterData.relatives;
        var friends = this.state.characterData.friends;
        var enemies = this.state.characterData.enemies;
        var mentor = this.state.characterData.mentor;
        var hobbies = this.state.characterData.hobbies;
        var dress = this.state.characterData.dress;
        var leader_follower = this.state.characterData.leader_follower;
        var positive_traits = this.state.characterData.positive_traits;
        var negative_traits = this.state.characterData.negative_traits;
        var temper = this.state.characterData.temper;
        var star_sign = this.state.characterData.star_sign;
        var personality = this.state.characterData.personality;
        var philosophy = this.state.characterData.philosophy;
        var ambitions = this.state.characterData.ambitions;
        var liked_disliked = this.state.characterData.liked_disliked;


        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        //console.log(this.props)
        var writeMenu = '/write/' + this.props.match.params.book;
        var characterBoard = '/charboard/' + this.props.match.params.book;
        console.log(characterBoard);
        return(
            <div>
                <Grid className = "writemenucat text-center ch-forms">
                    <Row>
                        <Col sm = {8} md = {10} className = "ch-forms-2 col-md-offset-3">
                            <Slider {...settings}>

                                <div className = "slick-form 1">
                                    <Form onSubmit={this.handleCharacters}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Name:</ControlLabel>
                                            <FormControl id="name" componentClass="textarea" placeholder="name" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Race:</ControlLabel>
                                            <FormControl id="race" componentClass="textarea" placeholder="race" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Age:</ControlLabel>
                                            <FormControl id="age" componentClass="textarea" placeholder="age" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Birthday:</ControlLabel>
                                            <FormControl id="birthday" componentClass="textarea" placeholder="birthday" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>General Physical Description:</ControlLabel>
                                            <FormControl id="physical_desc" componentClass="textarea" placeholder="description" />
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className = "slick-form 2">
                                    <Form onSubmit={this.handleCharacters}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Hometown:</ControlLabel>
                                            <FormControl id="hometown" componentClass="textarea" placeholder="hometown" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Neighborhood Type:</ControlLabel>
                                            <FormControl id="type_of_home" componentClass="textarea" placeholder="neighborhood" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Name and Occupation of Father:</ControlLabel>
                                            <FormControl id="father_info" componentClass="textarea" placeholder="father" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Name and Occupation of Mother:</ControlLabel>
                                            <FormControl id="mother_info" componentClass="textarea" placeholder="mother" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Siblings:</ControlLabel>
                                            <FormControl id="sibling_info" componentClass="textarea" placeholder="siblings" />
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className = "slick-form 3">
                                    <Form onSubmit={this.handleCharacters}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Close Relatives:</ControlLabel>
                                            <FormControl id="relatives" componentClass="textarea" placeholder="relatives" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Best Friends:</ControlLabel>
                                            <FormControl id="friends" componentClass="textarea" placeholder="friends" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Enemies:</ControlLabel>
                                            <FormControl id="enemies" componentClass="textarea" placeholder="enemies" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Mentor:</ControlLabel>
                                            <FormControl id="mentor" componentClass="textarea" placeholder="mentor" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Hobbies:</ControlLabel>
                                            <FormControl id="hobbies" componentClass="textarea" placeholder="hobbies" />
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className = "slick-form 4">
                                    <Form onSubmit={this.handleCharacters}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Dress Style:</ControlLabel>
                                            <FormControl id="dress" componentClass="textarea" placeholder="dress-style" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Leader or Follower:</ControlLabel>
                                            <FormControl id="leader_follower" componentClass="textarea" placeholder="leader or follower?" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Strongest Postive Trait:</ControlLabel>
                                            <FormControl id="positive_traits" componentClass="textarea" placeholder="strongest positive" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Strongest Negative Trait:</ControlLabel>
                                            <FormControl id="negative_traits" componentClass="textarea" placeholder="strongest negative" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Temper:</ControlLabel>
                                            <FormControl id="temper" componentClass="textarea" placeholder="chill, hot-headed, etc" />
                                        </FormGroup>

                                        <Button className = "btn" type="submit">
                                            submit
                                        </Button>
                                    </Form>
                                </div>

                                <div className = "slick-form 5">
                                    <Form onSubmit={this.handleCharacters}>
                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Star Sign:</ControlLabel>
                                            <FormControl id="star_sign" componentClass="textarea" placeholder="Aries, Capricorn, etc" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Personality Type:</ControlLabel>
                                            <FormControl id="personality" componentClass="textarea" placeholder="INFP, ESTP, etc" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Life Philosopy:</ControlLabel>
                                            <FormControl id="philosophy" componentClass="textarea" placeholder="zen, nihilism, etc" />
                                        </FormGroup>


                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Ambitions:</ControlLabel>
                                            <FormControl id="ambitions" componentClass="textarea" placeholder="goals, dreams, etc" />
                                        </FormGroup>

                                        <FormGroup controlId="formControlsTextarea">
                                            <ControlLabel>Likeable or unlikeable:</ControlLabel>
                                            <FormControl id="liked_disliked" componentClass="textarea" placeholder="Will readers like or dislike? Why?" />
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
                                    <Link to = {characterBoard} className = "charboard">
                                        <img src = "https://cdn4.iconfinder.com/data/icons/office-34/256/10-512.png"/>
                                        <div>View Character</div>
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
        characterResponse: state.characterReducer,
        registerResponse: state.registerReducer,
        newBookResponse: state.newBookReducer

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        characterAction: CharacterAction
    }, dispatch)
}

// export default tCharacter;
export default connect(mapStateToProps,mapDispatchToProps)(Character);



