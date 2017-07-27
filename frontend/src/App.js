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
import tPlot from './tester/tPlot';
import tChapters from './tester/tChapters';
import tCritique from './tester/tCritique';
import tSynopsis from './tester/tSynopsis';
import tQueryLetter from './tester/tQueryLetter';
import tUserProfile from './tester/tUserProfile';
import tWriteOption from './tester/tWriteOption';



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
              <Route exact path="/write" component= {writeMenu} />
              <Route exact path="/writemenu" component = {writeMenu}/>
              <Route exact path="/newbook" component= {NewBook} />
              <Route exact path="/character" component= {tCharacter} />
              <Route exact path="/writemenu" component = {writeMenu}/>
              <Route exact path="/tcharacter" component = {tCharacter}/>
              <Route exact path="/plot" component = {tPlot} />
              <Route exact path="/chapters" component={tChapters} />
              <Route exact path="/critique" component ={tCritique}/>
              <Route exact path="/synopsis" component ={tSynopsis}/>
              <Route exact path="/q-letter" component ={tQueryLetter}/>
              <Route exact path="/user" component ={tUserProfile}/>
              <Route exact path="/option" component ={tWriteOption}/>

            </div> 
          </div>
        </Router>
      </div> 
    )

  }
}

export default App;
