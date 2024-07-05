import React from 'react';
import Item from '../item/Item.jsx';
import * as styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <Item text={"Вклады"}/>
                <Item text={"Кредиты"}/>
                <Item text={"Займы"}/>
                <Item text={"Карты"}/>
                <Item text={"Ипотека"}/>
                <Item text={"Страхование"}/>
                <Item text={"Инвестиции"}/>
                <Item text={"Бизнес"}/>
                <Item text={"Новости"}/>
                <Item text={"Ещё"}/>
            </ul>
            <div className={styles.box}>
                <a className={styles.link} href="#"><img src="./images/map-point.svg" alt="map-point" /></a>
                <a className={styles.link} href="#"><img src="./images/exit.svg" alt="Exit" /></a>
            </div>
        </nav>
    )
};

export default Nav;