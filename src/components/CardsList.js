import React from 'react';
import UserCard from './UserCard';

const CardsList = ({ filtredList }) => {
    const cardsStyle = {
        display: "grid",
        gridTemplateColumns: " repeat(4, 4fr)",
        gridGap: "60px",
        marginLeft: "60px",
    }

    return (
        <>
            <div style={cardsStyle}>
                {console.log(filtredList)}
                {filtredList?.map((userData) => (
                    <UserCard key={userData.email} userData={userData} />
                ))}
            </div>
        </>
    );
};

export default CardsList;