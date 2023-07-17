import React from 'react';
import "./Hero.css";

const Hero = ({imageSrc}) => {
    return (
        <div className="hero">
            <img src={imageSrc} alt="Shakex Sempe" className="hero_image" />
            <div className='hero-title'>
            <h1>Web Design & <br />Development</h1>
            <p>accessible, immersive & engaging <br /><span>Responsive websites</span></p>
            </div>
        </div>
    )
};

export default Hero;

