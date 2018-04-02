import React, { Component } from 'react';

class Job extends Component {
    render() {
        return (
            <div className="job">
                <h4 className="time">{this.props.time}</h4>
                <hr/>
                <h3 className="company">{this.props.company}</h3>
                <h4 className="position">{this.props.position}</h4>
                <p className="jobDescription">{this.props.description}</p>
            </div>
        );
    }
}

export default Job;