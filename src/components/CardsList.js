import React from 'react';
import UserCard from './UserCard';

const CardsList = ({ list }) => {
    const cardsStyle = {
        display: "grid",
        gridTemplateColumns: " repeat(4, 4fr)",
        gridGap: "60px",
        marginLeft: "60px",
    }

    return (
        <>
            <div style={cardsStyle}>
                {list?.map((userData) => (
                    <UserCard key={userData.email} userData={userData} />
                ))}
            </div>
        </>
    );
};

export default CardsList;