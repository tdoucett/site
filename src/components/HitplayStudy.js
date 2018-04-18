import React, { Component } from 'react';
import careMacbook from '../images/careMacbook.png'

class HitplayStudy extends Component {
    render() {
        return (
            <div>
                <div style={{float:'left'}}>
                    <h1 className="header">hitplay Care</h1>
                    <p>A cloud based platform built for IT professionals.</p>
                </div>
                <img src={careMacbook} alt="" className="careMacbook"/>
                <h2>What is hitplay Care?</h2>
                <p>hitplay Care is a cloud-based solution for corporate AV IT professionals focused on delivering
                speed to resolution for any and all technical issues in the workplace.  hitplay Care gives your IT staff
                the complete knowledge of an AV integration firm in the palm of their hand.</p>
                <h2>Why is it effective?</h2>
                <p>hitplay Care gives you access to all of your device data in real time. This means that when an issue arises,
                our alert system will notify you on exactly which device is causing the problem and give you actionable steps
                to ensure your systems is back online as fast as possible.</p>
                <h2>What was my role on the team?</h2>
                <p>I served as the sole Product Manager during which I led a team of 4 developers in creating some of the key
                    foundational features that the platform offers today.  During my term, I was exposed to countless Product
                Management duties including but not limited to:</p>
                <ul>
                    <li>Creation and maintenance of the product roadmap.</li>
                    <li>Design of wireframes using Adobe XD.</li>
                    <li>Creation of in-depth user guides using Adobe InDesign.</li>
                    <li>Clear communication of business objectives to a technical development team.</li>
                    <li>User testing.</li>
                    <li>Interfacing with clients, both french and english.</li>
                </ul>
                <p>I also led various other business initiatives during my time at hitplay that still form a key part of their
                business model to date.</p>
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
            </div>
        );
    }
}

export default HitplayStudy;