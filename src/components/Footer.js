import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./Footer.css";
import {FaGithubSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

const Footer = () => {
// intersectional observer
const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .3,
});

    return (
        <div className={inView ? "footer footer--zoom" : "footer"} ref={ref} id="contact">
            <h1 className="footer_logo">Syntex</h1>
            <h2 className="footer_title">web development</h2>
            <div className="footer_social">
            <FaGithubSquare className="social_link"></FaGithubSquare>
            <FaTwitterSquare className="social_link"></FaTwitterSquare>
            <FaLinkedin className="social_link"></FaLinkedin>
            </div>
            <div className="copyright-div">
                <p>copyright&copy; Boitumelo Sempe</p>
                <p className="git-link"><a href="https://github.com/ShakexSempe" target="_blank">@ ShakexSempe</a></p>
                <span> 2021 </span>
            </div>
        </div>
    )
}

export default Footer;
