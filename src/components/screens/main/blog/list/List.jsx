import React from 'react';
import Item from "./item/Item.jsx";
import * as styles from "./List.module.css";

const List = () => {
    return (
        <ul className={styles.list}>
            <Item text={"Как открыть свой таксопарк"}/>
            <Item text={"Как открыть ИП без посещения налоговой"}/>
            <Item text={"Что такое гарантийное письмо и в каких случаях оно необходимо"}/>
        </ul>
    )
}

export default List;