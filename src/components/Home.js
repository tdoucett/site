import React, { Component } from 'react';
import Landing from './Landing';
import Experience from './Experience';
import Projects from './Projects';

class Home extends Component {
    render() {
        return (
            <div>
                <Landing />
                <Experience />
                <Projects />
            </div>
        );
    }
}

export default Home;