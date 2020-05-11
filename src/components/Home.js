import React from 'react';
import styles from './Both.module.css';
import '../App.min.css';
import Header from './Header';

const Home = () => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="row justify-content-center holi">
                <div className={styles.banner}></div>
            </div>
        </div>

    );
}

export default Home;