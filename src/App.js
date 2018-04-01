import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import Experience from './components/Experience';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Landing />
          <Experience />
          <Projects />
      </div>
    );
  }
}

export default App;
