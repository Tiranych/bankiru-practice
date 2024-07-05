import React from 'react';
import * as styles from "./Card.module.css";

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.row}>
                <div className={styles.key}>Cтавка, %</div>
                <div className={styles.value + ' ' + styles.value_strong}>от 9,3%</div>
            </div>
            <div className={styles.row}>
                <div className={styles.key}>Срок</div>
                <div className={styles.value + ' ' + styles.value_strong}>181 дн.</div>
            </div>
            <div className={styles.row}>
                <div className={styles.key}>Сумма</div>
                <div className={styles.value + ' ' + styles.value_strong}>30 000—10 000 000 ₽</div>
            </div>
        </div>
    )
};

export default Card;