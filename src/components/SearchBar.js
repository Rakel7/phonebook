import React, { useEffect, useState } from 'react';


const Searchbar = ({ fetchUser, list, setList, filterFiled = user => user, ...props }) => {

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

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (searchQuery !== "") {
            setList(filterList())
        }
        else {
            fetchUser()
            console.log("List :", list)
        }
    }, [searchQuery])

    const filterList = () => {
        return list.filter(user => filterFiled(user).toLowerCase().includes(searchQuery.toLocaleLowerCase()))
    }

    return (
        <div style={navStyle}>
            <button onClick={(e) => fetchUser(e.target.value)} style={buttonStyle}>Afficher la liste</button>
            <input type="text" placeholder="Tapez le nom de la personne recherché" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} {...props}></input>
        </div>

    );
};

export default Searchbar;