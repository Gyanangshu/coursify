import React from 'react'
import "./navbar.css";
import logo from "../../Images/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {

  const [toggle, setToggle] = React.useState(false)

  return (
    <nav className="app_navbar body-padding">

      <div className="app_navbar_logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="app_navbar_contents">
        <div className="app_navbar_contents-links">
          <ul className="nav_links">
            <li className='nav-items'><a href="">Discover</a></li>
            <li className='nav-items'><a href="">For job Seekers</a></li>
            <li className='nav-items'><a href="">For Companies</a></li>
          </ul>
        </div>

        <div className="app_navbar_contents-buttons">
          <button className='button-light'><a href="">Log In</a></button>
          <button className='button-dark'><a href="">Sign Up</a></button>
        </div>
      </div>

      {/* Small screen navbar  */}
      <div className="nav_smallscreen">
        <GiHamburgerMenu cursor={"pointer"} fontSize={27} onClick={() => setToggle(true)} />

        {toggle && (
          <div className="nav_smallscreen_overlay flex_center slide-bottom ">

            <div className='nav_smallscreen_head'>
              <div className="app_smallscreen_navbar_logo">
                <img src={logo} alt="logo" />
              </div>

                <GiHamburgerMenu cursor={"pointer"} className="over_close" onClick={() => setToggle(false)} />
            </div>


            <div className="nav_smallscreen_nav-links">
              <p>Discover</p>
              <p>For job seekers</p>
              <p>For companies</p>
              <div className="nav_smallscreen_buttons">
                <button className='button-light'>Log In</button>
                <button className='button-dark'>Sign Up</button>
              </div>
            </div>


          </div>
        )}
      </div>

    </nav>
  )
}

export default Navbar
