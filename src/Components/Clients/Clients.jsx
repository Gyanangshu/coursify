import React from 'react';
import "./clients.css"
import Slider from "react-slick";
import slide1 from "../../Images/slider1.svg"
import slide2 from "../../Images/slider2.svg"
import slide3 from "../../Images/slider3.svg"
import slide4 from "../../Images/slider4.svg"
import slide5 from "../../Images/slider5.svg"
import slide6 from "../../Images/slider6.svg"
import slide7 from "../../Images/slider7.svg"
import slide8 from "../../Images/slider8.svg"
import slide9 from "../../Images/slider9.svg"
import slide10 from "../../Images/slider10.svg"

const Clients = () => {

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoints: 2000,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoints: 1200,
        settings: {
          slidesToShow: 4
        }
      },{
        breakpoints: 520,
        settings: {
          slidesToShow: 2
        }
      }

    ]
  }

  // <style>
  //   .slick-slider{

  //   }
  // </style>

  return (
    <section className="app_clients body-padding">
      <div className="logo_slider_container">
        <div className="logo_slider_left"></div>
        <div className="logo_slider_right"></div>
        <div className="logo_slider_wrap">
          <div className="logo_slider">
            <Slider {...settings}>
              <img src={slide1} alt="" />
              <img src={slide2} alt="" />
              <img src={slide3} alt="" />
              <img src={slide4} alt="" />
              <img src={slide5} alt="" />
              <img src={slide6} alt="" />
              <img src={slide7} alt="" />
              <img src={slide8} alt="" />
              <img src={slide9} alt="" />
              <img src={slide10} alt="" />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
