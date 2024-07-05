import React from 'react';
import Top from "./top/Top.jsx";
import Contributions from "./contributions/Contributions.jsx";
import Blog from "./blog/Blog.jsx";
import * as styles from "./Main.module.css";

const Main = ({props}) => {
    return (
        <main className={styles.main}>
            <Top props={props}/>
            <Contributions props={props}/>
            {/* <Blog /> */}
        </main>
    )
};

export default Main;