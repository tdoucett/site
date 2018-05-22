import React, { Component } from 'react';
import rbc from '../images/rbc.png';

class RbcStudy extends Component {
    render() {
        return (
            <div>
                <div style={{float:'left'}}>
                    <h1 className="header">RBC</h1>
                    <p>Identifying fraud through machine learning.</p>
                </div>
                <img src={rbc} alt="" className="rbc"/>
                <h2>What project did I manage?</h2>
                <p>While working at RBC, I managed the execution of an internal initiative to explore
                    the use of customer data in online and mobile banking to create a digital fingerprint using machine learning
                    that could be verified each and every time a user is interacting with their online banking applications,
                    whether it be logging in or navigating throughout the application.</p>
                <h2>What was my role on the team?</h2>
                <p>I served primarily as the team's PM, during which the majority of my time was spent interfacing with the
                business team to translate business objectives into technical specifications for the development team.  After the
                project spec was created, I organized weekly design meetings to discuss project status and goals to ensure open
                communication between the business and development teams.  This was also a time for the business executives to propose
                changes or speak to concerns regarding the architecture of our solution.  Overall, my duties throughout the term included
                but were not limited to:</p>
                <ul>
                    <li>Organizing weekly meetings with business executives to ensure progress and allow for questions.</li>
                    <li>Architecture the solution according to AWS best practices.</li>
                    <li>Creation of a front-end dashboard for testing and showing the results of the model.</li>
                    <li>Clear communication of business objectives to a technical development team.</li>
                </ul>
                <h2>What was my impact on the project?</h2>
                <p>By keeping an open channel of communication between the business executives and the development team, I was able
                to ensure satisfaction of the BU with the resulting model and architecture.  Furthermore, I was able to ensure that all
                technical details were clearly explained to the Business Unit ensuring that they understood the inner workings of the model.</p>
                <h2>What tools did I work with?</h2>
                <p>All major AWS Services. JIRA. Asana. Flask, SQL, Tensorflow + Keras.</p>
                <div className="footerLink">
                    <a href="/"><h1 className="header">Back to homepage</h1></a>
                </div>
            </div>
        );
    }
}

export default RbcStudy;