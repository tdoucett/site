import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Job extends Component {

    openCaseStudy = () => {
        window.location = this.props.link;
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="project">
                    <img src={this.props.photo} className={this.props.uuid%2 ? "projectImgLeft" : "projectImgRight" }/>
                    <h3 className="projectName">{this.props.name}</h3>
                    <h4 className="oneLiner">{this.props.oneLiner}</h4>
                    <p className="projectDescription">{this.props.description}</p>
                    <RaisedButton label="Case Study" labelColor="#f04" buttonStyle={{border: '1px solid #f04'}} onClick={this.openCaseStudy} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Job;