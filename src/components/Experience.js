import React, { Component } from 'react';
import Job from './Job';

class Experience extends Component {

    constructor() {
        super();
        this.state = { jobs:
            [
                {
                    uuid: 1,
                    company: 'hitplay',
                    jobStudyLink: 'hitplay',
                    time: 'Jan 2018 - Apr 2018',
                    position: 'Product Manager',
                    description: 'Pushed the development of an online platform aimed at reducing the speed to resolution' +
                    ' for technical issues in corporate AV environments with a specific focus on meeting room technology.'
                },
                {
                    uuid: 2,
                    company: 'RBC',
                    jobStudyLink: 'rbc',
                    time: 'May 2017 - Aug 2017',
                    position: 'Software Project Manager',
                    description: 'Developed a proof of concept for the use of deep neural networks to identify online banking' +
                    ' users with the goal of reducing fraudulent online banking transactions.'
                },
                {
                    uuid: 3,
                    company: 'The Steele Group Financial',
                    jobStudyLink: 'sgf',
                    time: 'Sep 2016 - Dec 2016',
                    position: 'Full Stack Developer',
                    description: 'Developed modules for a business management platform.'
                }
            ]
        }
    }

    render() {
        return (
            <div className="experience">
                <h1>My Experience</h1>
                { this.state.jobs.map((job) => {
                    return (
                        <Job {...job} key={job.uuid} />
                    );
                })}
            </div>
        );
    }
}

export default Experience;