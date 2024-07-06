import React from 'react';
import Content from "./content/Content.jsx";
import * as styles from "./Contributions.module.css";

const Contributions = ({ props }) => {
    return (
        <article className={styles.contributions}>
            <div className={props.container}>
                <Content props = {props} text={["Вклад 1", "Вклад 2", "Вклад 3", "Вклад 4"]}/>
                <Content props = {props} text={["Вклад 5", "Вклад 6", "Вклад 7", "Вклад 8"]}/>
                <Content props = {props} text={["Вклад 9", "Вклад 10", "Вклад 11", "Вклад 12"]}/>
            </div>
        </article>
    )
};

export default Contributions;