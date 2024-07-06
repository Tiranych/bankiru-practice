import React, { useState } from 'react';
import Item from './item/Item.jsx';
import * as styles from "./Header.module.css";

const Header = ({ props }) => {

    const [isNavActive, setIsNavActive] = useState(false);

    return (
        <header className={styles.header}>
            <div className={props.container}>
                <div className={styles.inner}>
                    <a href='#' className={styles.burger} onClick={() => {isNavActive ? setIsNavActive(false) : setIsNavActive(true)}}>
                        <span></span>
                        <span className={styles.midstick}></span>
                        <span></span>
                    </a>
                    <a href="#">
                        <img src="./images/logo.svg" alt="Logo" />
                    </a>
                    <nav className={styles.nav}>
                        <ul className={isNavActive ? styles.list + ' ' + styles.list_active : styles.list}>
                            <Item text={"Вклады"} />
                            <Item text={"Кредиты"} />
                            <Item text={"Займы"} />
                            <Item text={"Карты"} />
                            <Item text={"Ипотека"} />
                            <Item text={"Страхование"} />
                            <Item text={"Инвестиции"} />
                            <Item text={"Бизнес"} />
                            <Item text={"Новости"} />
                            <Item text={"Ещё"} />
                        </ul>
                        <div className={styles.box}>
                            <a className={styles.link} href="#"><img src="./images/map-point.svg" alt="map-point" /></a>
                            <a className={styles.link} href="#"><img src="./images/exit.svg" alt="Exit" /></a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default Header;