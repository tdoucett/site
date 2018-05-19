import React, { Component } from 'react';
import NavBar from './NavBar';
import About from './About';
import Landing from './Landing';
import Experience from './Experience';
import Projects from './Projects';
import Portfolio from './Portfolio';
import Contact from './Contact';

class Home extends Component {
    render() {
        return (
            <div>
                {/*<NavBar />*/}
                <Landing />
                <About />
                <Projects />
                <Experience />
                <Portfolio />
                <Contact />
            </div>
        );
    }
}

export default Home;