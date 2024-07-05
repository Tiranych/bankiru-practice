import React from 'react';
import Nav from './nav/Nav.jsx';
import * as styles from "./Header.module.css";

const Header = ({props}) => {
    return (
        <header className={styles.header}>
            <div className={props.container}>
                <div className={styles.inner}>
                    <a href="#" className={styles.burger}>
                        <span></span>
                        <span className={styles.midstick}></span>
                        <span></span>
                    </a>
                    <a href="#">
                        <img src="/images/logo.svg" alt="Logo" />
                    </a>
                    <Nav />
                </div>
            </div>
        </header>
    )
};

export default Header;