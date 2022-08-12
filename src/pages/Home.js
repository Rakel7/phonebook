import axios from 'axios';
import React, { useState } from 'react';
import CardsList from '../components/CardsList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [users, setUser] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const fetchUser = async () => {
        const { data } = await axios.get('https://randomuser.me/api/?results=30');
        console.log('DATA:', data.results);
        setUser(data.results);
    }

    // filter la liste des users ici
    // return si searchQuery ? filtré selon la query : liste de base
    const filterList = (searchQuery) => {
        
        if (searchQuery) {
            searchQuery?.filter(user => user.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        else {
            return users
        }
    }

    return (

        <div style={{ backgroundColor: "#e8eef2" }}>
            <Header />

            <SearchBar
                // ecouter les events venant de l'enfant
                // searchQuery={event.target.value(input)}
                // fetchTrigger='event du clique du button'

                setInput={searchQuery => setSearchQuery(searchQuery)}

                // Button axios
                fetchTrigger={fetchUser}
            />
            
            <CardsList
                // passer la liste filtré
                filtredList={filterList()}
            />
            <Footer />
        </div>
    );
};


export default Home;