import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./Footer.css";

const Footer = () => {
// intersectional observer
const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .4,
});

    return (
        <div className={inView ? "footer footer--zoom" : "footer"} ref={ref} id="contact">
            <h1 className="footer_title">Syntex  <span className="footer_title_span">web development</span></h1>
            <p>copyright&copy; Boitumelo Sempe</p>
            <p>@ ShakexSempe</p>
            <span> 2021 </span>

        </div>
    )
}

export default Footer;
