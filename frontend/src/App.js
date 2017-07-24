import React, { Component } from 'react';
import Register from './containers/Register'; 
import Home from './components/Home'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Write from './components/Write';
import writeMenu from './components/writeMenu'; 
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
              <Route path="/" component={Home} /> 
              <Route exact path="/signup" component={Register} />
              <Route exact path="/write" component={Write} />
              <Route path = "/writemenu" component = {writeMenu}/>
        
            </div> 
          </div>
        </Router>
      </div> 
    )

  }
}

export default App;
