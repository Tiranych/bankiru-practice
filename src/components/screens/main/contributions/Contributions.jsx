import React from 'react';
import Content from "./content/Content.jsx";
import * as styles from "./Contributions.module.css";

const Contributions = ({ props }) => {
    return (
        <article className={styles.contributions}>
            <div className={props.container}>
                <Content props = {props} text={["Вкладывайтесь", "Большой заработок", "Выгодные проценты", "Я очень длинное название уберите …"]}/>
                <Content props = {props} text={["Положительные отзывы", "Гарантия качества", "Множество успешных кейсов", "Работаем по всему миру"]}/>
                <Content props = {props} text={["Круглосуточная поддержка", "И еще много интересного", "Просто и быстро", "Свои правила с Банки.ру"]}/>
            </div>
        </article>
    )
};

export default Contributions;