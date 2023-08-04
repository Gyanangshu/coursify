import React from 'react';
import "./about.css";
import about1 from "../../Images/about-1.png"
import about2 from "../../Images/about-2.png"
import icon1 from "../../Images/about-icon1.svg"
import icon2 from "../../Images/about-icon2.svg"
import icon3 from "../../Images/about-icon3.svg"
import icon4 from "../../Images/about-icon4.svg"
import icon5 from "../../Images/about-icon5.svg"
import icon6 from "../../Images/about-icon6.svg"
import icon7 from "../../Images/about-icon7.svg"

const About = () => {
    return (
        <section className="app_about body-padding">

            <div className="app_about_wrapper">
                <div className="app_about_image-wrapper">
                    <div className="app_about_image">
                        <img src={about1} alt="" />
                    </div>
                </div>


                <div className="app_about_content">
                    <div className="app_about_content-main">
                        <div className="app_about_content-wrapper">

                            <p className='pre-headline about-pre'>GOT TALENT?</p>
                            <h2 className='about-headline'>Why job seekers love us</h2>

                            <div className="fact-list">
                                <ul className='list-item'>
                                    <li className='item'>
                                        <img src={icon1} alt="" />
                                        <p className='fact' >Unique jobs at <strong>startups</strong> and <strong>tech companies</strong> you can't find anywhere else </p>
                                    </li>
                                </ul>

                                <ul className='list-item'>
                                    <li className='item'>
                                        <img src={icon2} alt="" />
                                        <p className='fact' >Say goodbye to cover letters - your profile is all you need. <strong>One click to apply</strong>  and you're done.</p>
                                    </li>
                                </ul>

                                <ul className='list-item'>
                                    <li className='item'>
                                        <img src={icon3} alt="" />
                                        <p className='fact' >Everything you need to know to job search - including seeing <strong>salary</strong>  and <strong>stock options</strong> upfront when looking</p>
                                    </li>
                                </ul>

                                <ul className='list-item'>
                                    <li className='item'>
                                        <img src={icon4} alt="" />
                                        <p className='fact' >Connect directly with <strong>founders</strong> at top startups - no third party recruiters allowed</p>
                                    </li>
                                </ul>

                            </div>

                            <div className="app_about_buttons">
                                <button className="button-light">Learn more</button>
                                <button className="button-dark">Sign up now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* about 2 */}
            <div className="new-flex app_about_wrapper">
                <div className="app_about_image-wrapper">
                    <div className="app_about_image">
                        <img src={about2} alt="" />
                    </div>
                </div>


                <div className="app_about_content">
                    <div className="app_about_content-main">
                        <div className="app_about_content-wrapper">

                            <p className='pre-headline about-pre'>Need Talent?</p>
                            <h2 className='about-headline'>Why recruiters love us</h2>

                            <div className="fact-list">
                                <ul className='list-item'>
                                    <li className='item'>
                                        <img src={icon5} alt="" />
                                        <p className='fact' > <strong>8 million</strong>  responsive and startup-ready candidates, with all the information you need to vet them</p>
                                    </li>
                                </ul>

                                <ul className='list-item'>
                                    <li className='item'>
                                        <img src={icon6} alt="" />
                                        <p className='fact' >Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within  <strong>10 minutes, for free</strong></p>
                                    </li>
                                </ul>

                                <ul className='list-item'>
                                    <li className='item'>
                                        <img src={icon7} alt="" />
                                        <p className='fact' >A free  <strong>applicant tracking system</strong>, or free integration with any ATS you may already use</p>
                                    </li>
                                </ul>

                                <p>Plus, we can do the vetting for you! With <u>Curated</u>, we review the world's top tech talent and highlight candidates directly to you 2x a week.</p>

                            </div>

                            <div className="app_about_buttons">
                                <button className="button-light">Learn more</button>
                                <button className="button-dark">Sign up now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default About
