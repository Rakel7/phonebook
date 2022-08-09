import { findByLabelText } from '@testing-library/react';
import React from 'react';

const Card = ({ item }) => {

    const cardStyle = {
        backgroundColor: "#B2DDF7",
        maxWidth: "60%",
        borderRadius: "20px",
        textAlign: 'center',
        padding: "5px",
        margin: "5px",

    }


    return (
        <div style={cardStyle}>
            <img src={item.picture.large} alt="picture"></img>
            <p>{item.name.title} {item.name.last} {item.name.first}</p>
            <p>{item.email}</p>
        </div>
    );
};

export default Card;