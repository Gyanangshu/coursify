import React from 'react';
import "./footer.css"
import logo from "../../Images/logo.svg"
import twitter from "../../Images/twitter.png"
import instagram from "../../Images/instagram.png"

const Footer = () => {
    return (
        <footer className='app_footer body-padding'>
            <div className="app_footer_wrapper">
                <div className="app_footer_container">

                    <div className="footer_logo_container">
                        <div className="footer_logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="app_footer_social-media">
                            <img src={twitter} alt="twitter" />
                            <img src={instagram} alt="instagram" />
                        </div>
                    </div>

                    <div className="app_footer_content">
                        <div className="footer-links">
                            <ul className="footer-link-list">
                                <li className="footer-li"><b>For Candidates</b></li>
                                <li className="footer-li">Overview</li>
                                <li className="footer-li">Startup Jobs</li>
                                <li className="footer-li">Web3 Jobs</li>
                                <li className="footer-li">Featured</li>
                                <li className="footer-li">Salary Calculator</li>
                                <li className="footer-li">Startup Hiring Data</li>
                                <li className="footer-li">Tech Startups</li>
                                <li className="footer-li">Remote</li>
                            </ul>
                            <ul className="footer-link-list">
                                <li className="footer-li"><b>For Recruiters</b></li>
                                <li className="footer-li">Overview</li>
                                <li className="footer-li">Recruit Pro</li>
                                <li className="footer-li">Curated</li>
                                <li className="footer-li">RecruiterCloud</li>
                                <li className="footer-li">Hire Developers</li>
                                <li className="footer-li">Pricing</li>
                            </ul>
                            <ul className="footer-link-list">
                                <li className="footer-li"><b>Company</b></li>
                                <li className="footer-li">About</li>
                                <li className="footer-li">AngelList Venture</li>
                                <li className="footer-li">Help</li>
                                <li className="footer-li">Blog</li>
                                <li className="footer-li">Terms & Risks</li>
                                <li className="footer-li">Privacy & Cookies</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="app_footer_post">
                <div className="app_footer_post-container">
                    <p>Copyright © 2023 Wellfound (formerly AngelList Talent). All rights reserved.</p>
                    <p>Browse by: <u>Jobs</u>, <u>Remote Jobs</u>, <u>Locations</u>, <u>Startups</u>, <u>Industries</u>, <u>Tech Hubs</u></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
