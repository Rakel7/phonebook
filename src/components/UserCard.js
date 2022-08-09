import React from 'react';

const UserCard = ({ userData }) => {

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
            <img src={userData.picture.large} alt="picture"></img>
            <p>{userData.name.title} {userData.name.last} {userData.name.first}</p>
            <p>{userData.email}</p>
        </div>
    );
};

export default UserCard;