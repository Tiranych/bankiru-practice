import React, { useState } from 'react';
import CardList from "../cardlist/CardList.jsx";
import generateRandomString from "../generateString.jsx";
import * as styles from "./Content.module.css";

const Content = ({ props, cards }) => {

    const [cardsArr, setcardsArr] = useState(cards);

    const addCard = () => {
        const newCard = {
            name: generateRandomString(Math.floor(Math.random() * 15 + 1)),
            logo: "images/bank.svg",
            rate: `от ${(Math.random()*10).toFixed(1)}%`,
            period: Math.floor(Math.random() * 1000),   //от 0 до 1 умн. на 1000 и округление
            amount: Math.floor(Math.random() * 10**7),
            url: 'https://github.com/Tiranych/Finsweet'
        };
        setcardsArr([...cardsArr, newCard])
    }

    const removeCard = () => {
        setcardsArr(cardsArr.slice(0, cardsArr.length - 1))
    }

    return (
        <section className={styles.content}>
            <h2 className={props.title}>Вклады для души</h2>
            <p className={styles.text}>Fusce porta auctor bibendum. Donec convallis tellus risus,
                pharetra facilisis
                leo bibendum eget. Ut sit amet commodo nunc. Phasellus hendrerit, dui quis mollis eleifend,
                lacus
            </p>
            <CardList cards={cardsArr} />
            <button className={styles.btn} onClick={addCard}>Добавить карточку</button>
            <button className={styles.btn} onClick={removeCard}>Удалить карточку</button>
        </section>
    )
};

export default Content;