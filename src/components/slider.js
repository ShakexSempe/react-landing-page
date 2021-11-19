import React from 'react';
import "./Slider.css";
import { useInView } from 'react-intersection-observer';


const Slider = ({imageSrc, title, subtitle, flipped}) => {
    // intersectional observer
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: .3,
    });
    // function
    let renderContent = () => {

        if(!flipped) {
            return <>
                <img src={imageSrc} alt="laptop" className="slider_image"/>
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
            <img src={imageSrc} alt="laptop" className="slider_image"/>
            </>;
        }
    }

    return (
        <div className={inView ? "slider slider--zoom" : "slider"} ref={ref} id="slider">
            {renderContent()}
        </div>
    )
};

export default Slider;
