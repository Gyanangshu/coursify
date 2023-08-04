import React from 'react'
import "./hero.css";
import heroLogo from "../../Images/hero-logo.png"


const Hero = () => {
  return (
    <section className='app_hero body-padding'>

      <div className="app_hero_content">
        <div className="app_hero_content-main">
          <div className="hero-heading">
            <h1>AngelList Talent is now <br /> Wellfound</h1>
          </div>
          <div className="hero-sub">
            <p>Where startups and job seekers connect.</p>
          </div>
          <div className="app_hero_button">
            <div className="app_hero_button-dark">
              <button className='button-dark'>
                <a href="">
                  Find your next hire
                </a>
              </button>
            </div>
            <div className="app_hero_button-light">
              <button className='button-light'>
                <a href="">
                  Find your next job
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="app_hero_img">
        <img src={heroLogo} alt="logo" />
      </div>

    </section>
  )
}

export default Hero
