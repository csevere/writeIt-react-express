import React, { Component } from 'react';
import Register from './containers/Register';
import Home from './components/Home'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Write from './components/Write';
import Login from './containers/Login';
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
              <Route exact path="/" component={Home} /> 
              <Route exact path="/signup" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/write" component={Write} />
            </div> 
          </div>
        </Router>
      </div> 
    )

  }
}

export default App;
