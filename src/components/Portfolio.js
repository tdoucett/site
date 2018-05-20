import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PortfolioCard from './PortfolioCard';
import stubblet from '../images/stubblet.jpeg';
import anarchy from '../images/anarchy.jpg';
import comingSoon from '../images/comingSoon.png';

class Portfolio extends Component {

    constructor() {
        super();
        this.state = { projects:
            [
                {
                    uuid: 1,
                    name: 'Stubblet',
                    photo: stubblet,
                    description: '',
                },
                {
                    uuid: 2,
                    name: 'Anarchy',
                    photo: anarchy,
                    description: '',
                },
                {
                    uuid: 3,
                    name: 'More Coming Soon!',
                    photo: comingSoon,
                    description: '',
                }

            ]
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="portfolio">
                    <h1>Additional Projects</h1>
                    <div className="portfolioItemsDiv">
                        { this.state.projects.map((project) => {
                            return (
                                <PortfolioCard {...project} key={project.uuid} />
                            );
                        })}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Portfolio;