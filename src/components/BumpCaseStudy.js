import React, { Component } from 'react';
import bumpMacbook from '../images/bumpMacbook.png'

class CaseStudy extends Component {
    render() {
        return (
            <div>
                <div style={{float:'left'}}>
                    <h1 className="header">Bump Music</h1>
                    <p>A cloud based platform for crowd music voting.</p>
                </div>
                <img src={bumpMacbook} alt="" className="careMacbook"/>
                <h2>What is Bump Music?</h2>
                <p>Bump Music is a cloud based react application aimed at letting users vote on their favourite music at
                any bar or establishment that offers the service. Bump gives control of the music back to the customer without
                 the need of a middle man. This reduces the cost incurred by the bar and improves the user experience as songs are
                queued based on the proportion of people at the establishment that like each song.</p>
                <h2>Why is it effective?</h2>
                <p>Bump offers a highly interactive solution to music voting. Users can see real-time changes to the playlist thanks
                    to React states and Firebase's Realtime Event Listeners.  These technologies, as well as the design that I've crafted,
                come together to form an incredible song voting experience.</p>
                <h2>How does it work?</h2>
                <p>Bars or other establishments sign up on our site for the Bump Music service. After one or more playlists, they can
                    serve these playlists at a custom URL such as bumpmusic.co/mybarname where their customers will go to vote on that night's
                    playlist.  The client has access to an administrative dashboard where they can build custom playlists and view analytics about
                    the music that their customers enjoy most!</p>
                <h2>What is my contribution?</h2>
                <p>Since I am handling all aspects of the business, I am developing skills in a variety of areas:</p>
                <ul>
                    <li>Creation and maintenance of the product roadmap.</li>
                    <li>Design of wireframes using Adobe XD.</li>
                    <li>Developing in React.js.</li>
                    <li>Developing with Google Cloud Platform.</li>
                    <li>User Centered Design</li>
                    <li>Communicating with potential clients and translating their needs and constraints to business and development requirements.</li>
                    <li>Integrating with various services including Facebook and Spotify via REST API's.</li>
                </ul>
                <p>I also have tested the product in a bar with over 100 users! The results were incredibly helpful in the design process!</p>
                <div className="footerLink">
                    <a href="/"><h1 className="header">Back to homepage</h1></a>
                </div>
            </div>
        );
    }
}

export default CaseStudy;