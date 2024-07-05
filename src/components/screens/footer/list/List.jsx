import React from 'react';
import Item from './item/Item.jsx';
import * as styles from "./List.module.css";

const List = () => {
    return (
        <ul className={styles.list}>
            <Item url="images/dzen.svg"/>
            <Item url="images/twitter.svg"/>
            <Item url="images/vk.svg"/>
            <Item url="images/telegram.svg"/>
            <Item url="images/ok.svg"/>
        </ul>
    )
};

export default List;