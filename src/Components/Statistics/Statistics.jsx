import React from 'react';
import "./statistics.css";

const Statistics = () => {
    return (
        <section className="app_statistics">
            <div className="app_statistics_count body-padding">
                <div className="stat">
                    <div className="app_statistics_count_field border" style={{ color: "#143fcd"}}>
                        <div className="headline-number">130K +</div>
                        <div className="headline-name">Tech Jobs</div>
                    </div>

                    <div className="app_statistics_count_field border" style={{ color: "#f0591c"}}>
                        <div className="headline-number">6,000,000</div>
                        <div className="headline-name">Matches Made</div>
                    </div>


                    <div className="app_statistics_count_field" style={{ color: "#0c7134"}}>
                        <div className="headline-number">8M +</div>
                        <div className="headline-name">Startup-ready candidates</div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Statistics;
