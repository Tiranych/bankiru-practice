import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/screens/App.jsx';
import * as styles from "./index.module.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className={styles.wrapper}>
        <App />
    </div>
);