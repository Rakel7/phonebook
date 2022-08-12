import React from 'react';


const Searchbar = ({ fetchTrigger, setInput }) => {

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
        <div style={navStyle}>
            <button onClick={() => fetchTrigger()} style={buttonStyle}>Afficher la liste</button>

            <input type="text" placeholder="Tapez le nom de la personne recherché" id="searchBar" onChange={(e) => setInput(e.target.value)} ></input>

        </div>
    );
};

export default Searchbar;
