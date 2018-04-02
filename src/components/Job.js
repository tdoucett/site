import React, { Component } from 'react';

class Job extends Component {
    render() {
        return (
            <div className="job">
                <h3 className="company">{this.props.company}</h3>
                <h4 className="position">{this.props.position}</h4>
                <p className="jobDescription">{this.props.description}</p>
            </div>
        );
    }
}

export default Job;