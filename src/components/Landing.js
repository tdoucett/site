import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FacebookBox, Linkedin, GithubCircle } from 'mdi-material-ui'

class Landing extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="landing">
                    <h1 className="header">Hi, I'm Thomas Doucette</h1>
                    <p className="description">Product Manager pursing a degree in Systems Design Engineering at the University of Waterloo.  I
                    strive to build innovative products that give a positive user experience.  You can download my resume or continue reading below.</p>
                    <RaisedButton label="Download Resume" labelColor="white" backgroundColor="#f04" />
                    <div class="socialIcons">
                        <a href="https://www.facebook.com/thomas.doucette.355" target="_blank"><FacebookBox style={{height: '1.5rem'}}/></a>
                        <a href="https://www.linkedin.com/in/tdoucett" target="_blank"><Linkedin style={{height: '1.5rem'}}/></a>
                        <a href="https://www.github.com/tdoucett" target="_blank"><GithubCircle style={{height: '1.5rem'}}/></a>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Landing;

// alternate color: #f04