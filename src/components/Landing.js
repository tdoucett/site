import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { FacebookBox, Linkedin, GithubCircle, Email } from 'mdi-material-ui';
import Resume from '../Thomas-Doucette-Resume.pdf';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';

class Landing extends Component {

    openResume = () => {
        window.open(Resume);
    }

    scrollToAbout = () => {
        var height = document.querySelector('#about').offsetTop - 100;
        window.scroll({ top: height, behavior: "smooth" });
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
                    <div class="actionButton">
                        <FloatingActionButton backgroundColor="#f04" onClick={this.scrollToAbout} >
                            <NavigationArrowDownward />
                        </FloatingActionButton>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Landing;

// alternate color: #f04