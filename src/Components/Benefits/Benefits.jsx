import React from 'react'
import "./benefits.css";

import benefit1 from "../../Images/benefit-1.png"
import benefit2 from "../../Images/benefit-2.png"

const Benefits = () => {
    return (
        <section className="app_benefit body-padding">
            <div className="app_benefit_container">
                <div className="app_benefit_box">

                    <div className="app_benefit_box_image">
                        <img src={benefit1} alt="" />
                    </div>

                    <div className="app_benefit_box_content">
                        <p className='pre-headline'>Get Featured</p>
                        <h3 className='about_headline'>Let us show you off</h3>
                        <p className='about-desc'>Apply to be featured and we'll highlight your profile to top recruiters and companies searching for your specific skills.
                            <br />
                            <br />
                            Oh, it's also 100% free.
                        </p>
                        <button className='button-light'>Learn more</button>
                    </div>

                </div>


                <div className="app_benefit_box">

                    <div className="app_benefit_box_image img2">
                        <img src={benefit2} alt="" />
                    </div>

                    <div className="app_benefit_box_content">
                        <p className='pre-headline'>salary calculator</p>
                        <h3 className='about_headline'>Know your worth</h3>
                        <p className='about-desc'>We have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations.
                        </p>
                        <button className='button-light'>Calculate your salary</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Benefits
