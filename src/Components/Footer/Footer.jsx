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
                                <li className="footer-li">Overview</li>
                                <li className="footer-li">Startup Jobs</li>
                                <li className="footer-li">Overview</li>
                                <li className="footer-li">Startup Jobs</li>
                                <li className="footer-li">Overview</li>
                                <li className="footer-li">Startup Jobs</li>
                            </ul>
                            <ul className="footer-link-list">
                                <li className="footer-li"><b>For Recruiters</b></li>
                                <li className="footer-li">Overview</li>
                                <li className="footer-li">Startup Jobs</li>
                                <li className="footer-li">Overview</li>
                                <li className="footer-li">Startup Jobs</li>
                                <li className="footer-li">Overview</li>
                                <li className="footer-li">Startup Jobs</li>
                            </ul>
                            <ul className="footer-link-list">
                                <li className="footer-li"><b>For Company</b></li>
                                <li className="footer-li">Overview</li>
                                <li className="footer-li">Startup Jobs</li>
                                <li className="footer-li">Overview</li>
                                <li className="footer-li">Startup Jobs</li>
                                <li className="footer-li">Overview</li>
                                <li className="footer-li">Startup Jobs</li>
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
