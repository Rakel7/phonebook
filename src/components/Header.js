import React from 'react';

const Header = () => {
    const headerStyle = {
        backgroundColor: '#81D6E3',
        height: '200px',
        width: '100%',
        textAlign: 'center',

    }
    return (
        <div>
            <div style={headerStyle}>
                <h1 style={{margin:"0"}}>Annuaire Dev</h1>
            </div>
        </div>
    );
};



export default Header;