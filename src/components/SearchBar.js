import React from 'react';
import Button from './Button';
import SearchQuery from './SearchQuery';


const Searchbar = ({ fetchUser, data, setData }) => {
    

    const navStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <div style={navStyle}>
            <Button fetchUser={fetchUser} />
            <SearchQuery fetchUser={fetchUser} filterField={(user) => user.name.last} list={data} setList={setData} style={{ width: "140%", marginLeft: "5px" }} />

        </div>
    );
};

export default Searchbar;