import React from 'react';
import "./slider.css";

const slider = ({imageSrc, title, subtitle, flipped}) => {
    // function
    let renderContent = () => {

        if(!flipped) {
            return <>
                <img src={ImageSrc} alt="laptop" className="slider_image"/>
                <div className="slider_content">
                    <h1 className="slider_title">{title}</h1>
                    <p className="slider-subtitle">{subtitle}</p>
                </div>
            </>;
        }
        else {
            return <>
                <div className="slider_content">
                    <h1 className="slider_title">{title}</h1>
                    <p className="slider-subtitle">{subtitle}</p>
                </div>
            <img src={ImageSrc} alt="laptop" className="slider_image"/>
            </>;
        }
    }

    return (
        <div className="slider">
            {renderContent()}
        </div>
    )
};

export default slider
