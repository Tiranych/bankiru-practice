import React from 'react';
import Card from "../card/Card.jsx";
import * as styles from "./Item.module.css";

const logText = (e) => {
    e.preventDefault()
    console.log(e.target.parentNode.childNodes[0].childNodes[1].innerText)
}

const Item = ({text}) => {
    return (
        <li className={styles.item} >
            <div className={styles.box}>
                <img src="images/bank.svg" alt="bank" className={styles.img} />
                <p className={styles.text}>{text}</p>
            </div>
            <Card />
            <a href="#" className={styles.btn} onClick={logText}>Открыть вклад</a>
        </li>
    )
};

export default Item;