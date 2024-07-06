import React from 'react';
import {CardList, addToCard} from "../cardlist/CardList.jsx";
import * as styles from "./Content.module.css";

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
            <button className={styles.btn} onClick={addToCard}>Добавить карточку</button>
        </section>
    )
};

export default Content;