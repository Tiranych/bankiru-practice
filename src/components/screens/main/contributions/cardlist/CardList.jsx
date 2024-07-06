import React from 'react';
import Item from "../item/Item.jsx";
import * as styles from "./CardList.module.css";

const CardList = ({text}) => {
    return (
        <ul className={styles.card__list}>
            <Item text={text[0]}/>
            <Item text={text[1]}/>
            <Item text={text[2]}/>
            <Item text={text[3]}/>
        </ul>
    )
};

export default CardList;