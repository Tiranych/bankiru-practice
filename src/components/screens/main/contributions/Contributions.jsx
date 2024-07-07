import React from 'react';
import Content from "./content/Content.jsx";
import {cards} from "./CardsData.jsx";
import * as styles from "./Contributions.module.css";

const Contributions = ({ props }) => {
    return (
        <article className={styles.contributions}>
            <div className={props.container}>
                <Content props = {props} cards={cards.slice(0, 4)} />
                <Content props = {props} cards={cards.slice(4, 8)} />
                <Content props = {props} cards={cards.slice(8, 12)}/>
            </div>
        </article>
    )
};

export default Contributions;