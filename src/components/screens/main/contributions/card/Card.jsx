import React from 'react';
import * as styles from "./Card.module.css";

const Card = ({ card }) => {
    return (
        <li className={styles.item} >
            <div className={styles.box}>
                <img src={card.logo} alt="bank-logo" className={styles.img} />
                <p className={styles.text}>{card.name}</p>
            </div>
            <div className={styles.card}>
                <div className={styles.row}>
                    <div className={styles.key}>Cтавка, %</div>
                    <div className={styles.value + ' ' + styles.value_strong}>{card.rate}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.key}>Срок</div>
                    <div className={styles.value}>{card.period}</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.key}>Сумма</div>
                    <div className={styles.value}>{card.amount} ₽</div>
                </div>
            </div>
            <a href={card.url} className={styles.btn}>Открыть вклад</a>
        </li>
    )
};

export default Card;