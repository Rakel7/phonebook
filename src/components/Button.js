import React, { useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import SearchBar from './SearchBar';

const Button = () => {
    const [data, setData] = useState([]);


    const fetchUser = async () => {
        const { data } = await axios.get('https://randomuser.me/api/?results=30');
        console.log('DATA:', data.results);
        setData(data.results);
    }

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

    const cardsStyle = {
        display: "grid",
        gridTemplateColumns: " repeat(4, 4fr)",
        gridGap: "60px",
        marginLeft:"60px",
    }


    return (
        <div>
            <div style={navStyle}>
                <button onClick={fetchUser} style={buttonStyle}>Afficher la liste</button>
                <SearchBar filterField={(user) => user.name.last} list={data} setList={setData} style={{ width: "140%", marginLeft:"5px" }} />
            </div>
            <div style={cardsStyle}>
                {data.map((userData) => (
                    <UserCard key={userData.name.last} userData={userData} />
                ))}
            </div>
        </div>
    );
};

export default Button;