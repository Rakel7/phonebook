import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const UserCard = ({ userData, favorite, setFavorite, setDetailsCard, setPopUp, setStar, star, test, setTest }) => {

    const cardStyle = {
        width: "80%",
        borderRadius: "20px",
        textAlign: 'center',
        padding: "5px",
        margin: "5px",
        border: "solid 1px",
        boxShadow: "10px 5px 5px rgba(0, 0, 255, .2)",

    }

    const starStyle = {
        width: "40px",
        height: "40px",
    }

    const buttonStyle = {
        border: "none"
    }

    const starStatus = () => {
        if(star === false){
            setStar(true)
            document.getElementById(userData.email).style.color = 'gold';
            // setTest([favorite])
            
        }else{
            setStar(false)
            document.getElementById(userData.email).style.color = 'black';
        }
    }

    return (
        <div style={cardStyle}>
            <img src={userData.picture.large} alt="profilPicture" style={{ borderRadius: "50%" }}></img>
            <p>{userData.name.title} {userData.name.last} {userData.name.first}</p>
            <p>{userData.email}</p>

            <div style={{display:"flex", justifyContent: "space-evenly"}}>
                <button style={{borderRadius:"10px", width: "80px"}} onClick={() => [setDetailsCard(userData), setPopUp(true)]}>Afficher détails</button>

                <button style={buttonStyle} onClick={() => [setFavorite(userData), starStatus()]}><StarBorderIcon id={userData.email} style={starStyle} /></button>
            </div>
        </div>
    );
};     

export default UserCard;