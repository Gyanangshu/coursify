import React from 'react';
import "./testimonial.css";
import quote from "../../Images/quote.svg"

const Testimonial = () => {
    return (
        <section className="app_testimonial body-padding">
            <div className="app_testimonial_content">

                <div className="head_wrapper">
                    <div className="pre-headline testi_pre">Don't just take it from us</div>
                    <h2>From our users</h2> 
                </div>

                <div className="app_testimonial_container">
                    <div className="tesimonial_box">
                        <img src={quote} alt="" />
                        <p className='quote-text'>I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.</p>
                    </div>

                    <div className="tesimonial_box">
                        <img src={quote} alt="" />
                        <p className='quote-text'>I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.</p>
                    </div>

                    <div className="tesimonial_box">
                        <img src={quote} alt="" />
                        <p className='quote-text'>I can't imagine my day to day without this platform. Life would be a lot more difficult.</p>
                    </div>

                    <div className="tesimonial_box">
                        <img src={quote} alt="" />
                        <p className='quote-text'>Half of the offers I give are sourced from Wellfound (AngelList Talent). It's the best product for anyone looking for startup talent.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonial
