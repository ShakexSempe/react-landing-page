import React from 'react';
import "./Hero.css";

const Hero = ({imageSrc}) => {
    return (
        <div className="hero">
            <img src={imageSrc} alt="syntex" className="hero_image" />
            <h1 className="hero_title">Shakex Sempe <span>front end developer</span></h1>
        </div>
    )
};

export default Hero;

