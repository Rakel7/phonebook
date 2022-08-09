import React from 'react';

const Header = () => {
    const headerStyle = {
        backgroundColor: '#CABAC8',
        height: '200px',
        width: '100%',
        textAlign: 'center',

    }
    return (
        <div>
            <div style={headerStyle}>
                <h1>Annuaire Dev</h1>
            </div>
        </div>
    );
};



export default Header;