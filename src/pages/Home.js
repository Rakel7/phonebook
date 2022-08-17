import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import CardsList from '../components/CardsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [users, setUser] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=30')
        .then((res) => setUser(res.data))
    }, []);

    return (

        <div style={{ backgroundColor: "#e8eef2" }}>
            <Header />

            <SearchBar
                setInput={searchQuery => setSearchQuery(searchQuery)}
            />
            
            <CardsList
                filtredList={users}
            />
            <Footer />
        </div>
    );
};


export default Home;