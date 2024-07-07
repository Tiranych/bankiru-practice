import React  from 'react';
import Card from "../card/Card.jsx";
import * as styles from "./CardList.module.css";

const CardList = ({cards}) => {

    let res = [];

    cards.map(card => {
        res.push(<Card key={card.id} card={card}/>)
    })

    return (
        <ul className={styles.card__list}>
            {res}
        </ul>
    )

};

export default CardList;