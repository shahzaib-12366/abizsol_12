import React from 'react';
import "./WorkProcessComponent.scss"
import Rectangle55991 from "../../assets/Rectangle 5591 (1).png"
const WorkProcessComponent = () => {
    return (
        <>
            <div className="work-process-component">
                <div className="work-process-left-content">
                    <h2>Our work process </h2>
                    <h3>PRODUCTS AND PLATFORMS</h3>
                    <p>At aBizSol, we take pride in being at the forefront of digital innovation. Established in [Year of Establishment], our journey has been marked by a relentless pursuit of excellence. We are a team of passionate developers, designers,</p>
                </div>

            </div>
            <div className="your-row-container">
                <div className="column">
                    <img src={Rectangle55991} alt="Rectangle55991 1" />
                    <h3>Congrative business  </h3>
                </div>
                <div className="column">
                    <img src={Rectangle55991} alt="Rectangle55991 2" />
                    <h3>Congrative business  </h3>
                </div>
                <div className="column">
                    <img src={Rectangle55991} alt="Rectangle55991 3" />
                    <h3>Congrative business  </h3>
                </div>
            </div>
        </>

    );
};

export default WorkProcessComponent;
