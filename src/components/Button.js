import React from 'react';

const Button = ({ fetchUser }) => {

    const navStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    const buttonStyle = {
        width: "100px",
        margin: "5px",
        border: "1px solid gray",
        borderRadius: "10px",

    }

    return (
        <div>
            <div style={navStyle}>
                <button onClick={(e) => fetchUser(e.target.value)} style={buttonStyle}>Afficher la liste</button>
            </div>
        </div>
    );
};

export default Button;