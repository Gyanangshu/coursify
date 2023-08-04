import React from 'react';
import "./signup.css";
import google from "../../Images/google.png"

const Signup = () => {
    return (
        <section className='app_signup body-padding'>
            <div className="app_signup_container">
                <div className="app_signup_field">

                    <input type="text" placeholder='Your email' />

                    <button className='button-dark'><a href="">Sign up</a></button>
                </div>

                <p style={{ color: "#777"}}>or</p>

                <div className='app_signup_google'>
                    <button className='button-light'>
                        <img src={google} alt="" />
                        Sign up with Google
                    </button>
                </div>

            </div>

            <div className="app_signup-info" style={{ color: "#777"}}>
                <p className='information'>Looking to fund raise or invest in the next generation of great startups? AngelList Venture can now be found at <span style={{textDecoration: "underline"}}>AngelList.com</span>.</p>

                <p className='login-info' style={{ color: "#777"}}>Already have an account? <span style={{textDecoration: "underline"}}>Log in</span></p>
            </div>

        </section>
    )
}

export default Signup
