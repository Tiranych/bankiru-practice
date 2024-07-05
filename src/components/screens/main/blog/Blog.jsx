import React from 'react';
import List from "./list/List.jsx";
import News from "./news/News.jsx";
import * as styles from "./Blog.module.css";

const Blog = ({ props }) => {
    return (
        <section className={styles.blog}>
            <div className={props.container}>
                <h2 className={styles.title}>
                    Полезные материалы
                </h2>
                <div className={styles.content}>
                    <List />
                    <News />
                </div>
            </div>
        </section>
    )
};

export default Blog;