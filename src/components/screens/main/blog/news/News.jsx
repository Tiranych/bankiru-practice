import React from 'react';
import Item from "./item/Item.jsx";
import * as styles from "./News.module.css";

const News = () => {
    return (
        <ul className={styles.news}>
            <Item text={"Не только НДФЛ: какие еще налоги затронет реформа"}/>
            <Item text={"В Bank of China ответили на сообщения о прекращении приема платежей из РФ"}/>
            <Item text={"Hyundai Motor продает свой завод в России за 10 тыс. рублей"}/>
            <Item text={"Системные банки получат 256 млрд рублей для кредитования МСП"}/>
        </ul>
    )
}

export default News;