import React from 'react';
import "./laurel.css";

const Laurel = () => {
  return (
    <section className='app_laurel body-padding'>
        <div className="app_laurel_container">
            <div className="app_laurel_content">
                <h1 className='headline-display'>Wellfound's <br /><span style={{color: "red"}}>10</span> of <span style={{color: "red"}}>10</span> in <span style={{color: "red"}}>2022</span></h1>
                <p className='laurel-desc'>10 groundbreaking teams across 10 trending industries</p>
                <button className='button-dark laurel-button'>Discover our 10 of 10</button>
            </div>
        </div>
    </section>
  )
}

export default Laurel
