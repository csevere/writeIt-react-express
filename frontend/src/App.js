import React, { Component } from 'react';
import Register from './containers/Register'; 
import Home from './components/Home'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Write from './components/Write';
import writeMenu from './components/writeMenu'; 
import NewBook from './components/NewBook';
import Login from './containers/Login';
import Character from './components/Character'; 
import tCharacter from './tester/tCharacter'; 
import Plot from './components/Plot';
import Chapters from './components/Chapters';
import QueryLetter from './components/QueryLetter';
import tChapterBoard from './tester/display-info/tChapterBoard';
import tPlotBoard from './tester/display-info/tPlotBoard';
import tCharacterBoard from './tester/display-info/tCharacterBoard';
import tNotePadBoard from './tester/display-info/tNotePadBoard';
import Critique from './components/Critique';
import tPicture from './tester/tPicture'; 
import NotePad from './components/NotePad';
import Resources from './components/Resources';
import Faqs from './components/Faqs';
import UserProfile from './components/UserProfile';
import Synopsis from './components/Synopsis';

//Forums
import tMainForum from './tester_forums/tMainForum';
import tContempForum from './tester_forums/tContempForum';
import tNewContempForm from './tester_forums/tNewContempForm';
import tContempTopic from './tester_forums/tContempTopic';




// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (

      <div>
        <Router>
          <div className="App">
            <NavBar/>
            <div className = "container main">

              <Route exact path="/" component= {Home} /> 
              <Route exact path="/signup" component= {Register} />
              <Route exact path="/login" component= {Login} />
              <Route exact path="/write/:book" component= {writeMenu} />
              <Route path = "/notepad" component = {NotePad}/>


              <Route exact path="/newbook" component= {NewBook} />
              <Route exact path="/user" component= {UserProfile} />
              <Route exact path="/character/:book" component= {Character} />
              <Route exact path="/charboard/:book" component={tCharacterBoard} />
              <Route exact path="/synopsis/:book" component= {Synopsis} />
              <Route exact path="/plot/:book" component = {Plot} />
              <Route exact path="/plotboard/:book" component={tPlotBoard} />
              <Route exact path="/chapters/:book" component={Chapters} />
              <Route exact path="/q-letter/:book" component={QueryLetter} />
              <Route exact path="/chapboard/:book" component={tChapterBoard} />
              <Route exact path="/critique/:book" component={Critique} />
              <Route exact path="/pictures" component={tPicture} />
              <Route exact path="/notepad/:book" component={NotePad} />
              <Route exact path="/noteboard/:book" component={tNotePadBoard} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/faqs" component={Faqs} />

              <Route exact path = "/forums" component = {tMainForum}/>
              <Route exact path = "/contemp" component = {tContempForum}/>
              <Route exact path = "/contempform" component = {tNewContempForm}/>
              <Route exact path = "/contemptopic" component = {tContempTopic}/>
            </div> 
          </div>
        </Router>
      </div> 
    )

  }
}

export default App;
