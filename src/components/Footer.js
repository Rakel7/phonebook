import React from 'react';

const Footer = () => {

    const footerStyle = {
        backgroundColor: '#B0B5B3',
        height: '100px',
        width: '100%',
        textAlign: 'center',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <div style={footerStyle}>
            <p>© Copyright 2022 <a href="https://rm-devweb.com/" 
            rel="noreferrer" target="_blank" style={{color: "#000"}}>Rachel Mauriange</a>. Tous droits réservés.</p>
        </div>
    );
};

export default Footer;