import axios from 'axios';
import React, { useState, useEffect} from 'react';
// import Fuse from 'fuse.js'
import CardsList from '../components/CardsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [users, setUser] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [myFavorite, setMyFavorite] = useState();
    const [cardDetails, setCardDetails] = useState();
    const [openPop, setOpenPop] = useState(false);
    const [star, setStar] = useState(false);
    // const [test, setTest] = useState([]);

    // const options = {
    //         includeScore: true,
    //         // minMatchCharLenght:3,
    //         keys: ['gender']
    //     };

    // let fuse = null;

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=30')
        .then((res) => setUser(res.data))
        // .then((res) => fuse = new Fuse(res.data.results, options))
    }, []);
    
    // [] empeche un appel ulterieur == componentDidMount

   
    // componentDidMount(){
    //     console.log("blablalbal");
    // };

    // const retour = fuse.search('female');


    // console.log("FilterList1", users.results)

    // console.log("FilterList2", users)

    // console.log("Fuse", fuse)

    // console.log("Retour:", retour)

    return (

        <div style={{ backgroundColor: "#e8eef2" }}>
            <Header />

            <SearchBar
                setInput={searchQuery => setSearchQuery(searchQuery)}
                favorite={myFavorite}
            />
             {console.log("LAAAAAA",myFavorite)}
            <CardsList
                usersList={users}
                favorite={myFavorite}
                setFavorite={setMyFavorite}
                setDetailsCard={setCardDetails}
                detailsCard={cardDetails}
                openPopUp={openPop}
                setPopUp={setOpenPop}
                star={star}
                setStar={setStar}
                // test={test}
                // setTest={setTest}
            />
            
           
            <Footer />
        </div>
    );
};


export default Home;