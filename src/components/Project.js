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
                    <img src={this.props.photo} className={this.props.uuid%1 ? "projectImgLeft" : "projectImgRight" }/>
                    <h3 className="projectName">{this.props.name}</h3>
                    <h4 className="oneLiner">{this.props.oneLiner}</h4>
                    <p className="projectDescription">{this.props.description}</p>
                    <div className="projectButtons">
                        <div className="liveButton">
                            <a href={this.props.productionLink} target="_blank"><RaisedButton label="View Live" labelColor="#f04" buttonStyle={{border: '1px solid #f04'}} /></a>
                        </div>
                        <div className="caseStudyButton">
                            <a href={this.props.caseStudyLink}><RaisedButton label="Case Study" labelColor="#f04" buttonStyle={{border: '1px solid #f04'}} /></a>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Job;