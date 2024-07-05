import React from 'react';
import * as styles from "./Top.module.css";

const Top = ({props}) => {
    return (
        <section className={styles.top}>
            <div className={props.container}>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2 className={props.title}>
                            Поможем подобрать вклады по вашим потребностям
                        </h2>
                        <p>
                            Fusce porta auctor bibendum. Donec convallis tellus risus, pharetra facilisis leo
                            bibendum eget. Ut sit
                            amet commodo nunc. Phasellus hendrerit, dui quis mollis eleifend, lacus mauris accumsan
                            lacus, ac cursus
                            mi augue a justo. Aliquam erat volutpat.
                        </p>
                    </div>
                    <img className={styles.img} src="./images/wallet.png" alt="Wallet" />
                </div>
            </div>
        </section>
    )
};

export default Top;