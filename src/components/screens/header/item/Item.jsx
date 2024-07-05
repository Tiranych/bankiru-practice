import React from 'react';
import * as styles from "./Item.module.css";

const Item = ({text}) => {
    return (
        <li>
            <a className={styles.link} href="#">{text}</a>
        </li>
    )
};

export default Item;