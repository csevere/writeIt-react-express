import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './containers/Register';
import Login from './containers/Login';
import Loading from './components/Loading';

import Home from './components/Home'; 
import NavBar from './components/NavBar';

import Footer from './components/Footer'; 

import UserProfile from './components/UserProfile';
import tOtherUser from './tester/tOtherUser';
import NewBook from './components/NewBook';
import tResultsPage from './tester/tResultsPage';

//WRITE MENU//
import writeMenu from './components/writeMenu'; 
import Character from './components/Character'; 
import tCharacterBoard from './tester/display-info/tCharacterBoard';
import Chapters from './components/Chapters';
import tChapterBoard from './tester/display-info/tChapterBoard';
import QueryLetter from './components/QueryLetter';
import tQueryLetterBoard from './tester/display-info/tQueryLetterBoard';
import Plot from './components/Plot';
import tPlotBoard from './tester/display-info/tPlotBoard';
import Critique from './components/Critique';
import tCritiqueBoard from './tester/display-info/tCritiqueBoard';
import NotePad from './components/NotePad';
import tNotePadBoard from './tester/display-info/tNotePadBoard';
import Synopsis from './components/Synopsis';
import tSynopsisBoard from './tester/display-info/tSynopsisBoard';
import tPicture from './tester/write-menu/tPicture'; 
import tUserProfile from './tester/tUserProfile';
//OTHER HOME PAGE LINKS
import Resources from './components/Resources';
import Faqs from './components/Faqs';
import About from './components/About';

//FORUMS
import tMainForum from './tester_forums/tMainForum';
import tContempForum from './tester_forums/tContempForum';
import tNewContempForm from './tester_forums/tNewContempForm';
import tContempTopic from './tester_forums/tContempTopic';
import NavBarTest from './tester/NavBarTest';




// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state ={
      loading: true
    };
    
  }

  componentDidMount() {
    // this.setState({loading: false})
    setTimeout(()=> this.setState({loading: false}), 3000);
  }

  render() {
    const {loading} = this.state; 

    if(loading){
      // return null; 
      return <Loading />; //render loading when app is not ready 
    } 

    return (

      <div>
        <Router>
          <div className="App">
            <NavBar/>
            <div className = "container main">
              <Route exact path = '/loading' component ={Loading}/>
              <Route exact path='/test' component={NavBarTest} />
              <Route exact path="/" component= {Home} /> 
              <Route exact path="/signup" component= {Register} />
              <Route exact path="/login" component= {Login} />

              <Route exact path="/user" component= {UserProfile} />
              <Route exact path = "/profile/:profile" component = {tOtherUser}/>
              <Route exact path = "/profiles/" component = {tResultsPage}/>

              <Route exact path="/write/:book" component= {writeMenu} />             
              <Route exact path="/newbook" component= {NewBook} />
              <Route exact path="/character/:book" component= {Character} />
              <Route exact path="/charboard/:book" component={tCharacterBoard} />
              <Route exact path="/synopsis/:book" component= {Synopsis} />
              <Route exact path="/synopboard/:book" component={tSynopsisBoard} />
              <Route exact path="/plot/:book" component = {Plot} />
              <Route exact path="/plotboard/:book" component={tPlotBoard} />
              <Route exact path="/chapters/:book" component={Chapters} />
              <Route exact path="/chapboard/:book" component={tChapterBoard} />
              <Route exact path="/q-letter/:book" component={QueryLetter} />
              <Route exact path="/queryboard/:book" component={tQueryLetterBoard} />
              <Route exact path="/critique/:book" component={Critique} />
              <Route exact path="/critboard/:book" component={tCritiqueBoard} />
              <Route exact path="/pictures/:book" component={tPicture} />
              <Route exact path="/notepad/:book" component={NotePad} />
              <Route exact path="/noteboard/:book" component={tNotePadBoard} />

              <Route exact path="/resources" component={Resources} />
              <Route exact path="/faqs" component={Faqs} />
              <Route exact path="/about" component={About} />


              <Route exact path = "/forums" component = {tMainForum}/>
              <Route exact path = "/contemp" component = {tContempForum}/>
              <Route exact path = "/contempform" component = {tNewContempForm}/>
              <Route exact path = "/contemptopic" component = {tContempTopic}/>

              <Route exact path="/character" component= {Character} />


            </div> 

          </div>
        </Router>
      </div> 
    )

  }
}

export default App;
