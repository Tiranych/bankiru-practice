import React from 'react';
import Nav from './nav/Nav.jsx';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="burger">
                        <span></span>
                        <span className="middle-stick"></span>
                        <span></span>
                    </a>
                    <a className="header__logo" href="#">
                        <img src="//images/logo.svg" alt="Logo" />
                    </a>
                    <Nav />
                </div>
            </div>
        </div>
    )
};

export default Header;