import React from 'react';
import Header from "./header/Header.jsx"
import Main from "./main/Main.jsx"
import Footer from "./footer/Footer.jsx"
import "../../styles/reset.css";
import * as styles from "../../styles/global.css";

const App = () => {
    return (
        <>
            <Header props={styles}/>
            <Main props={styles}/>
            <Footer props={styles}/>
        </>
    )
}

export default App;