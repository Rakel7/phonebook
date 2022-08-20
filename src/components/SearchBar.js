import React from 'react';

const Searchbar = ({ setInput, favorite }) => {

    const navStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <div style={navStyle} >
            <input type="text" placeholder="Tapez le nom de la personne recherché" id="searchBar" onChange={(e) => setInput(e.target.value)} ></input>
            {favorite ? "Mon favori est : " + favorite.name.title + " " + favorite.name.last + " " + favorite.name.first : null}
        </div>
        
    );
};

export default Searchbar;
