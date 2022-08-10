import React, { useState } from 'react';
import { useEffect } from 'react';

const SearchQuery = ({ list, setList, filterField = user => user, ...data }) => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (searchQuery) {
            setList(filterList())
        }
        else{
            setList(list)
        }
    }, [searchQuery])

    const filterList = () => {
        return list.filter(user => filterField(user).toLowerCase().includes(searchQuery.toLocaleLowerCase()))
    }

    return (
        <div>
            <input type="text" placeholder="Tapez le nom de la personne recherché" onChange={(e) => setSearchQuery(e.target.value)} {...data}></input>
        </div>
    );
};

export default SearchQuery;