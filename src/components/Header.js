import React from 'react';
import { NavLink } from "react-router-dom";
import image from '../assets/Phonebook__2_-removebg-preview.png'
import NavBar from './NavBar';


const Header = () => {
    const headerStyle = {
        backgroundColor: '#B0B5B3',
        height: '200px',
        width: '100%',
        textAlign: 'center',
        display: "flex",
        alignItems: "center",
       
    }

    const imgStyle = {
        width: "50%",
        padding: "5px"
    }

    return (

        <div style={headerStyle}>
            <div>
                <NavLink to="/"><img src={image} alt="logo" style={imgStyle} /></NavLink>
            </div>
            <div>
                <h1 style={{ marginTop: "0" }}>Bienvenue sur l'annuaire des developpeurs</h1>
            </div>
            <div>
                <NavBar />
            </div>
        </div>

    );
};



export default Header;