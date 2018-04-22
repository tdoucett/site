import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import HitplayStudy from './components/HitplayStudy';
import RbcStudy from './components/RbcStudy';
import SgfStudy from './components/SgfStudy';
import ItapStudy from './components/ItapStudy';
import BumpCaseStudy from './components/BumpCaseStudy';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Route exact path="/" render={()=><Home />} />
              <Route exact path="/hitplay" render={()=><HitplayStudy />} />
              <Route exact path="/rbc" render={()=><RbcStudy />} />
              <Route exact path="/sgf" render={()=><SgfStudy />} />
              <Route exact path="/itap" render={()=><ItapStudy />} />
              <Route exact path="/bump" render={()=><BumpCaseStudy />} />
              <Route exact path="/resume" render={()=><Resume />} />
          </div>
        </Router>
    );
  }
}

export default App;
