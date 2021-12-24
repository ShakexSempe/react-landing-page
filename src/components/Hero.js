import React from 'react';
import "./Hero.css";

const Hero = ({imageSrc}) => {
    return (
        <div className="hero">
            <img src={imageSrc} alt="syntex" className="hero_image" />
        </div>
    )
};

export default Hero;

