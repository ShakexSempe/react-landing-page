import React from 'react';
import "./Navbar.css";
import {FiMenu, FiX} from "react-icons/fi";

// array of navbar objects
// const navbarLinks = {

// }

const Navbar = ({navbarLinks}) => {
    return (
        <nav className="navbar">
            <span className="navbar_logo">syntex</span>
            <ul className="navbar_list"> 
            {navbarLinks.map((item) => {
                return <li className="navbar_item" key={item.title}>
                    <a className="navbar_link" href={item.url}>
                        {item.title}
                    </a>
                </li>
            })}

            </ul>
        </nav>
    )
}

export default Navbar;
