import React from 'react';
import Card from "../card/Card.jsx";
import * as styles from "./Item.module.css";

const logText = (e) => {
    e.preventDefault()
    console.log(e.target.parentNode.childNodes[0].childNodes[1].innerText)
    /* console.log(document.querySelectorAll('#text')[3]); */
}

const Item = ({text}) => {
    return (
        <li className={styles.item} id="panel-1">
            <div className={styles.box}>
                <img src="images/bank.svg" alt="bank" className={styles.img} id="panel-img1" />
                <p className={styles.text} id='text'>{text}</p>
            </div>
            <Card />
            <a href="#" className={styles.btn} id="panel-btn1" onClick={logText}>Открыть вклад</a>
        </li>
    )
};

export default Item;