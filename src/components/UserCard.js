import React from 'react';

const UserCard = ({ userData }) => {

    const cardStyle = {
        width: "80%",
        borderRadius: "20px",
        textAlign: 'center',
        padding: "5px",
        margin: "5px",
        border: "solid 1px"
        

    }


    return (
        <div style={cardStyle}>
            <img src={userData.picture.large} alt="picture" style={{ borderRadius: "50%" }}></img>
            <p>{userData.name.title} {userData.name.last} {userData.name.first}</p>
            <p>{userData.email}</p>
        </div>
    );
};

export default UserCard;