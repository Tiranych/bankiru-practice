import React from 'react';
import Content from "./content/Content.jsx";
import * as styles from "./Contributions.module.css";

const Contributions = ({ props }) => {
    return (
        <article className={styles.contributions}>
            <div className={props.container}>
                <Content props = {props}/>
                <Content props = {props}/>
                <Content props = {props}/>
            </div>
        </article>
    )
};

export default Contributions;