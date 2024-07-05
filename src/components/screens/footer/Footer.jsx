import React from 'react';
import List from './list/List.jsx';
import * as styles from "./Footer.module.css";

const Footer = ({ props }) => {
    return (
        <footer className={styles.footer}>
            <div className={props.container}>
                <div className={styles.inner}>
                    <a className={styles.logo} href="#">
                        <img src="images/footer-logo.svg" alt="Logo"/>
                    </a>
                    <p className={styles.text}>Самый большой финансовый маркетплейс в России*</p>
                    <List />
                </div>
            </div>
        </footer>
    )
};

export default Footer;