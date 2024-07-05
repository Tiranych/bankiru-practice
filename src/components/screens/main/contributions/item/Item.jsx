import React from 'react';
import Card from "../card/Card.jsx";
import * as styles from "./Item.module.css";

const Item = () => {
    return (
        <li className={styles.item} id="panel-1">
            <div className={styles.box}>
                <img src="images/bank.svg" alt="bank" className={styles.img} id="panel-img1" />
                <p className={styles.text}>Вкладывайтесь</p>
            </div>
            <Card />
            <a href="#" className={styles.btn} id="panel-btn1">Открыть вклад</a>
        </li>
    )
};

export default Item;