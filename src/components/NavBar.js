import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../images/logo.png';

class NavBar extends Component {

    scrollToAbout = () => {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    };

    scrollToProducts = () => {
        document.querySelector('#products').scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    };

    scrollToWork = () => {
        document.querySelector('#work').scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    };

    scrollToContact = () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="navBar" id="navBar">
                    <div className="navLinkDiv">
                        <a onClick={this.scrollToAbout} className="navLinks">About</a>
                        <a onClick={this.scrollToProducts} className="navLinks">Products</a>
                        <a onClick={this.scrollToWork} className="navLinks">Work</a>
                        <a onClick={this.scrollToContact} className="navLinks">Contact</a>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default NavBar;