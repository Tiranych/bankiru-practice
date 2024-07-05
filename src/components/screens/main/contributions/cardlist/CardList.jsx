import React from 'react';
import Item from "../item/Item.jsx";
import * as styles from "./CardList.module.css";

const CardList = () => {
    return (
        <ul className={styles.card__list}>
            <Item />
            <Item />
            <Item />
            <Item />
        </ul>
    )
};

export default CardList;