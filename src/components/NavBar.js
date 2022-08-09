import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {

    const navBarStyle = {
        textDecoration: "none",
        listStyle: "none",
        color: "#000",
        fontSize: "20px",
    }

    return (
        <div >
            <ul>
                <NavLink
                    to="/" style={navBarStyle}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink
                    to="/contact" style={navBarStyle}>
                    <li>Service client</li>
                </NavLink>
            </ul>

        </div>
    );
};

export default NavBar;