import React, { useState } from 'react';
import "./Navbar.css";
import {FiMenu, FiX} from "react-icons/fi";

// array of navbar objects
// const navbarLinks = {

// }

const Navbar = ({navbarLinks}) => {
    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };
    

    return (
        <nav className="navbar">
            <a className="navbar_logo" href="#">Box<span>Shadow</span></a>
        {/* if menuClicked then show X icon else if not clicked then show menu icon */}
            {menuClicked ? (
                <FiX size={25} className="navbar_menu" onClick={toggleMenuClick}/>
            
            ) : (
                <FiMenu size={25} className="navbar_menu menu-x" onClick={toggleMenuClick}/>

                ) 
            }
            <ul className={!menuClicked ? "navbar_list" : "navbar_list navbar_list--active"}> 
            {navbarLinks.map((item) => {
                return <li className="navbar_item" key={item.title}>
                    <a className="navbar_link" href={item.url} onClick={toggleMenuClick}>
                        {item.title} 
                    </a>
                </li>
            })}

            </ul>
        </nav>
    )
}

export default Navbar;
