import React from 'react';
import Header from "./header/Header.jsx"
import Main from "./main/Main.jsx"
import "../../styles/reset.css";
import * as styles from "../../styles/global.css";

const App = () => {
    return (
        <div>
            <Header props={styles}/>
            <Main props={styles}/>
        </div>
    )
}

export default App;