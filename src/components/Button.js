import React, { useState } from 'react';
import axios from 'axios';

const Button = () => {
    const [data, setData] = useState([]);

    const handleClick = async () => {

        const { data } = await axios.get('https://randomuser.me/api/?results=12');
        console.log('DATA:', data);
        setData(data);
    }

    return (
        <div>
            <button onClick={handleClick}>Afficher la liste</button>
        </div>
    );
};

export default Button;