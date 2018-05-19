import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Contact extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="landing">
                    <h1>Let's get in touch!</h1>
                    <p className="description">I'm seeking a Product Management internship for Fall 2018.  I'd love to hear
                    more about your team's needs and have a chance to convince you why I'd be a great fit!</p>
                    <p className="description">You can contact me directly by phone at +1 902 940 5953 or by email at <a href="mailto:tdoucett@edu.uwaterloo.ca"> tdoucett@edu.uwaterloo.ca</a></p>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Contact;