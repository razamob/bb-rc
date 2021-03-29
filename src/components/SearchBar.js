import React, { Component } from 'react';
import './SearchBar.css';

function SearchBar(props) {
        return (
            <div className="search-container">
                <div className="search-title">
                <input onChange={props.searchChange} class="form-control search-bar" type="text" title="Search" placeholder="Search by Title or Product Name" />
                    <span class="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                    </span>
                </div>
                <div className="selects">
                <select class="form-control products" name="products">
                    <option value="">Products &amp; Services</option>
                    <option value="BBM ENTERPRISE">BBM Enterprise</option>
                    <option value="BLACKBERRY 2FA">BlackBerry 2FA</option>
                    <option value="BLACKBERRY ACCESS">BlackBerry Access</option>
                    <option value="BLACKBERRY ALERT">BlackBerry Alert</option>
                    <option value="BLACKBERRY ATHOC">BlackBerry AtHoc</option>
                    <option value="BLACKBERRY CYBER">BlackBerry Cyber</option>
                    <option value="BLACKBERRY CYBER SUITE">BlackBerry Cyber Suite</option>
                    <option value="BLACKBERRY CYBERSECURITY CONSULTING">BlackBerry Cybersecurity Consulting</option>
                    <option value="BLACKBERRY DIGITAL WORKPLACE">BlackBerry Digital Workplace</option>
                    <option value="BLACKBERRY DYNAMICS APPS">BlackBerry Dynamics Apps</option>
                    <option value="BLACKBERRY ENTERPRISE CONSULTING">BlackBerry Enterprise Consulting</option>
                    <option value="BLACKBERRY ENTERPRISE IDENTITY">BlackBerry Enterprise Identity</option>
                    <option value="BLACKBERRY GOVERNMENT MOBILITY SUITE">BlackBerry Government Mobility Suite</option>
                    <option value="BLACKBERRY GUARD">BlackBerry Guard</option>
                    <option value="BLACKBERRY OPTICS">BlackBerry Optics</option>
                    <option value="BLACKBERRY PERSONA">BlackBerry Persona</option>
                    <option value="BLACKBERRY PROTECT">BlackBerry Protect</option>
                    <option value="BLACKBERRY RADAR">BlackBerry Radar</option><option value="BLACKBERRY SECUSUITE">BlackBerry SecuSUITE</option><option value="BLACKBERRY SECURITY SERVICES">BlackBerry Security Services</option><option value="BLACKBERRY SPARK">BlackBerry Spark</option><option value="BLACKBERRY SPARK COMMUNICATIONS SERVICES">BlackBerry Spark Communications Services</option><option value="BLACKBERRY UEM">BlackBerry UEM</option><option value="BLACKBERRY WORK">BlackBerry Work</option><option value="BLACKBERRY WORKSPACES">BlackBerry Workspaces</option><option value="OTHER">Other</option>
                </select>
                <select class="form-control industry" name="industry">
                    <option value="">Industry</option>
                    <option value="EDUCATION">Education </option>
                    <option value="FINANCIAL SERVICES">Financial Services</option>
                    <option value="GOVERNMENT">Government</option>
                    <option value="HEALTHCARE">Healthcare</option>
                    <option value="LEGAL">Legal</option>
                    <option value="OTHER">Other</option>
                    <option value="RETAIL">Retail</option>
                    <option value="TRANSPORTATION">Transportation</option>
                </select>
                <select class="form-control resources" name="resources">
                    <option value="">Resource Type</option>
                    <option value="BROCHURE">Brochure</option>
                    <option value="DATASHEET">Datasheet</option>
                    <option value="EVENT VIDEOS">Event Videos</option>
                    <option value="INFOGRAPHIC">Infographic</option>
                    <option value="VIDEO">Video</option>
                    <option value="WEBCAST">Webcast</option>
                    <option value="WHITE PAPER">White Paper</option>
                    <option value="CASE STUDIES">Case Studies</option>
                </select>
                </div>
            </div>
        )
}

export default SearchBar
