import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FacebookBox, Linkedin, GithubCircle, Email } from 'mdi-material-ui';
import Resume from '../Thomas-Doucette-Resume.pdf';

class Landing extends Component {

    openResume = () => {
        window.open(Resume);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="landing">
                    <h1 className="header">Hi, I'm Thomas Doucette</h1>
                    <p className="description">Product Manager pursing a degree in Systems Design Engineering at the University of Waterloo.  I
                    strive to build innovative products that give a positive user experience.  You can view my resume or continue reading below.</p>
                    <RaisedButton label="View Resume" labelColor="white" backgroundColor="#f04" onClick={this.openResume} />
                    <div class="socialIcons">
                        <a href="https://www.facebook.com/thomas.doucette.355" target="_blank"><FacebookBox style={{height: '1.5rem'}}/></a>
                        <a href="https://www.linkedin.com/in/tdoucett" target="_blank"><Linkedin style={{height: '1.5rem'}}/></a>
                        <a href="https://www.github.com/tdoucett" target="_blank"><GithubCircle style={{height: '1.5rem'}}/></a>
                        <a href="mailto:tdoucett@edu.uwaterloo.ca"><Email style={{height: '1.5rem'}}/></a>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Landing;

// alternate color: #f04