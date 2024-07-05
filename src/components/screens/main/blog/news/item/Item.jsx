import React from 'react';
import * as styles from "./Item.module.css";

const Item = ({text}) => {
    return (
        <li className={styles.item}>
            <a href="#" className={styles.link}>
                <p className={styles.subtitle}>
                    {text}
                </p>
                <time dateTime="2024-05-29" className={styles.time}>29.05.2024</time>
            </a>
        </li>
    )
}

export default Item;