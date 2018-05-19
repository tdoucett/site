import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../images/logo.png';

class NavBar extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="navBar">
                    <img src={logo} alt="" />
                    <a href="" >Contact</a>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default NavBar;