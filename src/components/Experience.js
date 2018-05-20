import React, { Component } from 'react';
import Job from './Job';
import careMacbook from '../images/careMacbook.png'

class Experience extends Component {

    constructor() {
        super();
        this.state = { jobs:
            [
                {
                    uuid: 1,
                    company: 'hitplay Technologies',
                    jobStudyLink: 'hitplay',
                    time: 'Jan 2018 - Apr 2018',
                    position: 'Product Manager',
                    description: 'Managed the development of an online platform aimed at reducing the speed to resolution' +
                    ' for technical issues in corporate AV environments with a specific focus on meeting room technology.',
                    picture: careMacbook
                },
                {
                    uuid: 2,
                    company: 'Royal Bank of Canada',
                    jobStudyLink: 'rbc',
                    time: 'May 2017 - Aug 2017',
                    position: 'Project Manager',
                    description: 'Managed the development of a POC for the use of deep neural networks to identify online banking' +
                    ' users with the goal of reducing fraudulent online banking transactions.',
                    picture: ''
                },
                {
                    uuid: 3,
                    company: 'The Steele Group Financial',
                    jobStudyLink: 'sgf',
                    time: 'Sep 2016 - Dec 2016',
                    position: 'Full Stack Developer',
                    description: 'Developed a business management application focused on delivering a centralized hub for' +
                    ' all of your internal business needs including employee training, file management and communication.',
                    picture: ''
                },
                {
                    uuid: 4,
                    company: 'Innovation and Technology Association of PEI',
                    jobStudyLink: 'itap',
                    time: 'Jan 2016 - Apr 2016',
                    position: 'Software Developer',
                    description: 'Designed and developed an intramural sports web application using HTML, CSS, BootStrap, Python, Flask, and SQL.',
                    picture: ''
                }
            ]
        }
    }

    render() {
        return (
            <div className="experience" id="work">
                <h1>Who I've Built Products For</h1>
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