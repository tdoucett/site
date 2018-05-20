import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../images/logo.png';

class NavBar extends Component {

    scrollToAbout = () => {
        var height = document.querySelector('#about').offsetTop - 100;
        window.scroll({ top: height, behavior: "smooth" });
    };

    scrollToProducts = () => {
        var height = document.querySelector('#products').offsetTop - 100;
        window.scroll({ top: height, behavior: "smooth" });
    };

    scrollToWork = () => {
        var height = document.querySelector('#work').offsetTop - 100;
        window.scroll({ top: height, behavior: "smooth" });
    };

    scrollToContact = () => {
        var height = document.querySelector('#contact').offsetTop - 100;
        window.scroll({ top: height, behavior: "smooth" });
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