import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Button = () => {
    const [data, setData] = useState([]);

    const handleClick = async () => {

        const { data } = await axios.get('https://randomuser.me/api/?results=30');
        // console.log('DATA:', data.results);
        setData(data.results);
    }

    const buttonStyle = {
        width: "100px",
    }

    const cardsStyle = {
        display: "grid",
        gridTemplateColumns: " repeat(4, 4fr)",
        gridGap: "10px",
 

    }

    return (
        <div>
            <button onClick={handleClick} style={buttonStyle}>Afficher la liste</button>
            <div style={cardsStyle}>
                {data.map((item) => (
                    <Card key={item.name.last} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Button;