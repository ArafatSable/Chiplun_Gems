import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faHammer, faBrush, faWrench, faTruckPickup, faBroom, faPlug } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <>
            <div>
                <div className="rows">
                    <h2 className="section-heading">Area of Interest</h2>
                </div>
                <div className="rows">
                    <div className="columns">
                        <div className="cards">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon={faHammer} />
                            </div>
                            <h3>Frontend Developer</h3>
                            <p>
                            Crafting captivating digital experiences through innovative design and seamless functionality to elevate your online presence.
                            </p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="cards">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon icon={faBrush} />
                            </div>
                            <h3>Backend Developer</h3>
                            <p>                          
Empowering digital ecosystems efficient data management to drive seamless user experiences & scalable solutions.
                            </p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="cards">
                            <div className="icon-wrapper">
                            <FontAwesomeIcon icon={faWrench} />
                            </div>
                            <h3>Software Developer</h3>
                            <p>
                            Architecting & coding  software solutions that streamline processes & exceed user expectations, fueled by creativity and precision.
                            </p>
                        </div>
                    </div>
                  
                </div>
                </div>
        </>
    );
};

export default Services;
