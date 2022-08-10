import React from 'react';
import UserCard from './UserCard';

const CardsList = ({ data }) => {
    const cardsStyle = {
        display: "grid",
        gridTemplateColumns: " repeat(4, 4fr)",
        gridGap: "60px",
        marginLeft: "60px",
    }

    return (
        <>
            <div style={cardsStyle}>
                {data.map((userData) => (
                    <UserCard key={userData.name.last} userData={userData} />
                ))}
            </div>
        </>
    );
};

export default CardsList;