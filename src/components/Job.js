import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Job extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="job">
                    <h4 className="time">{this.props.time}</h4>
                    <hr className="jobHeader"/>
                    <h2 className="company">{this.props.company}</h2>
                    <h4 className="position">{this.props.position}</h4>
                    <p className="jobDescription">{this.props.description}</p>
                    <div className="jobButton">
                        <a href={this.props.jobStudyLink}><RaisedButton label="Read More" labelColor="#f04" buttonStyle={{border: '1px solid #f04'}} /></a>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Job;