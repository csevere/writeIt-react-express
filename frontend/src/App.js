import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './containers/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className='container'>
          <h2>Welcome to writeIT</h2>
          <Register />
        </div>
      </div>
    );
  }
}

export default App;
