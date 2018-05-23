import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import me from '../images/me.png';

class About extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="about">
                    <div className="aboutPhotoDiv">
                        <img src={me} alt="" className="aboutPhoto" />
                    </div>
                    <div className="aboutDescription">
                        <h1 id="about">About Me</h1>
                        <p>I'm a Product Manager pursing a degree in Systems Design Engineering at the University of Waterloo.  Throughout
                        my work experience with various companies in the technology industry, I have discovered a unique ability to accurately capture the
                            product vision and translate it into an exceptional user experience.</p>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default About;