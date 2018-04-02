import React, { Component } from 'react';
import Job from './Job';

class Experience extends Component {

    constructor() {
        super();
        this.state = { jobs: [{uuid: 1, company: 'hitplay', time: 'Jan 2018 - Apr 2018', position: 'Product Manager', description: 'Crafted hitplay.care'}] }
    }

    render() {
        return (
            <div className="experience">
                <h1>Experience</h1>
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