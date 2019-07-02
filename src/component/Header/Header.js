import React from 'react';

import './Header.css';

const Header = (props) => {

    return (
        <header className="Header">
            <h1>ProLife</h1>
            <p>Plan your days, achieve your goals  <span role='img' aria-label='Cool emoji'>🔥</span></p>
        </header>
    );
};

export default Header;