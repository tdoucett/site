import React, { Component } from 'react';
import Project from './Project';
import bump from '../images/bump.png';

class Projects extends Component {
    constructor() {
        super();
        this.state = { projects: [{uuid: 1, name: 'bump Music', oneLiner: 'Real-time Playlist for Bars & Clubs',
            description: 'Bump Music is an interactive mobile website that lets you vote on upcoming music at your favorite restaurant/bar!' +
            ' Check it out at bumpmusic.co or read the case study below.',
            photo: bump,
            link: 'bump'
        }] }
    }

    render() {
        return (
            <div className="projects">
                <h1>Projects</h1>
                { this.state.projects.map((project) => {
                    return (
                        <Project {...project} key={project.uuid} />
                    );
                })}
            </div>
        );
    }
}

export default Projects;