import React, { Component } from 'react';

import Register from './containers/Register';
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
            <Register />
 
          </div>
        </Router>
      </div> 
    )

  }
}

export default App;
