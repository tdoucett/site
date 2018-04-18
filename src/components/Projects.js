import React, { Component } from 'react';
import Project from './Project';
import bump from '../images/bumpMacbook.png';

class Projects extends Component {
    constructor() {
        super();
        this.state = { projects: [{uuid: 1, name: 'bump Music', oneLiner: 'Real-time Playlist for Bars & Clubs',
            description: 'Bump Music is a react app I created that lets users vote on upcoming music at your favorite restaurant/bar!' +
            ' It also allows bars to build playlists and stream music directly from the app! Check it out live or read my case study below.',
            photo: bump,
            productionLink: 'https://www.bumpmusic.co',
            caseStudyLink: 'bump'
        }] }
    }

    render() {
        return (
            <div className="projects">
                <h1>My Products</h1>
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