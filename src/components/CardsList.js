import React from 'react';
import UserCard from './UserCard';

const CardsList = ({ filtredList }) => {

    return (
        <>
            <div  id="cards">
                {filtredList.results?.map((userData) => (
                    <UserCard key={userData.email} userData={userData} />
                ))}
            </div>
        </>
    );
};

export default CardsList;