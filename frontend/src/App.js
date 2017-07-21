import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Home from './components/Home';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <NavBar/>
 
          </div>
        </Router>
      </div> 
    )
  }
}

export default App;
