import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class PortfolioCard extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="portfolioItem">
                    <img src={this.props.photo} className="portfolioImage" />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default PortfolioCard;