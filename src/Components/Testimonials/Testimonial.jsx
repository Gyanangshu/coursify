import React from 'react';
import "./testimonial.css";
import { testimonialCard } from '../../Constants/data';

const Testimonial = () => {
    return (
        <section className="app_testimonial body-padding">
            <div className="app_testimonial_content">

                <div className="head_wrapper">
                    <div className="pre-headline testi_pre">Don't just take it from us</div>
                    <h2>From our users</h2>
                </div>

                <div className="app_testimonial_container">
                    {
                        testimonialCard.map((item) => {
                            return (
                                <div className="tesimonial_box">
                                    <img src={item.img} alt="" />
                                    <p className='quote-text'>{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default Testimonial
