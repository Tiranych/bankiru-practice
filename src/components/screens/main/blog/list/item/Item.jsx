import React from 'react';
import * as styles from "./Item.module.css";

const Item = ({text}) => {
    return (
        <li className={styles.item}>
            <a href="#">
                <img src="images/blog-img.jpg" alt="blog-img" />
                <p className={styles.subtitle}>
                    {text}
                </p>
                <time dateTime="2024-05-20" className={styles.time}>
                    20.05.2024
                </time>
            </a>
        </li>
    )
}

export default Item;