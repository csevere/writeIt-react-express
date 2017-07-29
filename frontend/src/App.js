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
import Critique from './components/Critique';
import tPicture from './tester/tPicture'; 
import tNotePad from './tester/tNotePad';
import Resources from './components/Resources';
import Faqs from './components/Faqs';
import UserProfile from './components/UserProfile';
import Synopsis from './components/Synopsis';



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

              <Route exact path="/newbook" component= {NewBook} />
              <Route exact path="/user" component= {UserProfile} />
              <Route exact path="/character/:book" component= {Character} />
              <Route exact path="/synopsis/:book" component= {Synopsis} />
              <Route exact path="/plot/:book" component = {Plot} />
              <Route exact path="/chapters/:book" component={Chapters} />
              <Route exact path="/q-letter/:book" component={QueryLetter} />
              <Route exact path="/charboard" component={tChapterBoard} />
              <Route exact path="/critique/:book" component={Critique} />
              <Route exact path="/pictures" component={tPicture} />
              <Route exact path="/notepad/:book" component={tNotePad} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/faqs" component={Faqs} />
            </div> 
          </div>
        </Router>
      </div> 
    )

  }
}

export default App;
