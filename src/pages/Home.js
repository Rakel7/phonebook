import axios from 'axios';
import React, { useState } from 'react';
import CardsList from '../components/CardsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [data, setData] = useState([]);

    const fetchUser = async () => {
        const { data } = await axios.get('https://randomuser.me/api/?results=30');
        console.log('DATA:', data.results);
        setData(data.results);
    }

    return (
        <div style={{ backgroundColor: "#e8eef2" }}>
            <Header />
            <SearchBar fetchUser={fetchUser} data={data} setData={setData} />
            <CardsList data={data} fetchUser={fetchUser}/>
            <Footer />
        </div>
    );
};


export default Home;