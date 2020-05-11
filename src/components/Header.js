import React from 'react';
import styles from './Header.module.css';
import '../App.min.css';

const Header = () => {
    return (
        <div className="row justify-content-center">
            <header className={styles.header1}>
                <img className={styles.logo} alt="logo" src={process.env.PUBLIC_URL + "./rsrc/logo1.png"}></img>
            </header>
        </div>

    );
}

export default Header;