import React from 'react';


const DetailsCards = ({ detailsCard, setPopUp }) => {

    return (
        <div>
            {console.log("test")}
            <div id="popupBox">
                <div id="box">
                    <button id="close" onClick={() => setPopUp(false)} >X</button>
                    <img src={detailsCard.picture.large} alt="profilPicture" style={{ borderRadius: "50%" }}></img>
                    <p>{detailsCard.name.title} {detailsCard.name.last} {detailsCard.name.first}</p>
                    <p>Email : {detailsCard.email}</p>
                    <p>Location: {detailsCard.location.city}, {detailsCard.location.country}</p>
                    <p>Phone : {detailsCard.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsCards;