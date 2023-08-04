import React from 'react';
import "./filter.css";
import { IoIosArrowDown } from "react-icons/io"

const Filters = () => {
    return (
        <section className="app_filter body-padding">
            <div className="filter_container">
                <div className="app_filter_dropdowns">

                        <div className="dropdown_toggle_button">
                            <p>Job Collection </p>
                            <IoIosArrowDown />
                        </div>
                        


                    <div className="dropdown_toggle_button">
                        <p>Job Collection </p>
                        <IoIosArrowDown />
                    </div>
                    <div className="dropdown_toggle_button">
                        <p>Job Collection </p>
                        <IoIosArrowDown />
                    </div>
                    <div className="dropdown_toggle_button">
                        <p>Job Collection</p>
                        <IoIosArrowDown />
                    </div>
                    <div className="dropdown_toggle_button">
                        <p>Job Collection</p>
                        <IoIosArrowDown />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filters
