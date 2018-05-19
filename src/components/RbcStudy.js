import React, { Component } from 'react';

class RbcStudy extends Component {
    render() {
        return (
            <div>
                <div style={{float:'left'}}>
                    <h1 className="header">hitplay Care</h1>
                    <p>A cloud based platform built for IT professionals.</p>
                </div>
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
                    <li>Creation and maintenance of the product roadmap.</li>
                    <li>Design of wireframes using Adobe XD.</li>
                    <li>Creation of in-depth user guides using Adobe InDesign.</li>
                    <li>Clear communication of business objectives to a technical development team.</li>
                    <li>User testing.</li>
                    <li>Interfacing with clients, both french and english.</li>
                </ul>
                <h2>What was my impact on the product?</h2>
                <p>Although I did not have any prior experience in the AV industry, what I did have was a fresh mindset and
                    an eagerness to solve the problem at hand.  During my co-op term with hitplay, I focused on building out some
                    of the key features that would allow hitplay Care to make an impact on the market.  Some of the major developments I
                    pushed are outlined below.</p>
                <h3>Intelligent Troubleshooting</h3>
                <p>During my term, I pushed the development of an intelligent troubleshooting tool that could guide IT professionals through a question and answer process
                    while leveraging any and all data available to ensure they determine a root cause.  Furthermore, the platform would
                    provide them with actionable next steps to resolve the root cause.</p>
                <h3>Integrations</h3>
                <p>I also pushed the development of various integrations such as the Google Calendar and Office 365 integrations.
                    The goal of this feature was to ensure that the corporations employees are informed when a meeting room that they have
                    booked is experiencing technical issues, as well as give them available alternatives to that room.</p>
                <div className="footerLink">
                    <a href="/"><h1 className="header">Back to homepage</h1></a>
                </div>
            </div>
        );
    }
}

export default RbcStudy;