import React, { useState } from 'react';
import { useEffect } from 'react';

const SearchBar = ({ list, setList, filterField = user => user, ...data }) => {
    const [input, setInput] = useState("");

    useEffect(() => {
        if (input) {
            setList(filterList())
        }
    }, [input])

    const filterList = () => {
        return list.filter(user => filterField(user).toLowerCase().includes(input.toLocaleLowerCase()))
    }


    return (
        <div>
            <input type="text" placeholder="Tapez le nom de la personne recherché" onChange={(e) => setInput(e.target.value)} {...data}></input>

        </div>
    );
};

export default SearchBar;