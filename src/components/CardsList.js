import React from 'react';
import UserCard from './UserCard';
import DetailsCards from './DetailsCards';


const CardsList = ({ usersList, favorite, setFavorite, detailsCard, setDetailsCard, openPopUp, setPopUp, star, setStar, test, setTest }) => {

    return (
        <>
            <div id="cards">
                {usersList.results?.map((userData) => (
                    <UserCard key={userData.email} 
                    userData={userData} 
                    favorite={favorite}
                    setFavorite={setFavorite} 
                    setDetailsCard={setDetailsCard} 
                    setPopUp={setPopUp}
                    star={star}
                    setStar={setStar}
                    // test={test}
                    // setTest={setTest}
                    />
                ))}

                <div>
                    {detailsCard && openPopUp===true && (
                    <DetailsCards detailsCard={detailsCard} 
                    setDetailsCard={setDetailsCard} 
                    openPopUp={openPopUp} 
                    setPopUp={setPopUp} />) }
                </div>
            </div>

        </>
    );
};

export default CardsList;