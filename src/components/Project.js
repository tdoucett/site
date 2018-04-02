import React, { Component } from 'react';

class Job extends Component {
    render() {
        return (
            <div className="project">
                <h3 className="projectName">{this.props.name}</h3>
                <h4 className="oneLiner">{this.props.oneLiner}</h4>
                <p className="projectDescription">{this.props.description}</p>
            </div>
        );
    }
}

export default Job;