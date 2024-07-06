import React from 'react';
import CardList from "../cardlist/CardList.jsx";
import * as styles from "./Content.module.css";
import Item from '../item/Item.jsx';

const Content = ({props, text}) => {
    return (
        <section className={styles.content}>
            <h2 className={props.title}>Вклады для души</h2>
            <p className={styles.text}>Fusce porta auctor bibendum. Donec convallis tellus risus,
                pharetra facilisis
                leo bibendum eget. Ut sit amet commodo nunc. Phasellus hendrerit, dui quis mollis eleifend,
                lacus
            </p>
            <CardList text={text}/>
            <button className={styles.btn}>Добавить карточку</button>
        </section>
    )
};

export default Content;