import React from 'react'
import styles from '../styles/Nav.module.css'

function Nav() {
    return (
        <nav className={styles.navContainer + ' row'}>
            <img className={'img-sm ' + styles.logo} src="./logo.png" alt="logo"/>
            <ul className={styles.links + ' row'}>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
            <div className={styles.btnBorder + ' center'}>
                <div className={styles.background}>
                    <button className={styles.btn}>connect wallet</button>
                </div>
            </div>
            <ul className={styles.links + ' row ' + styles.links2}>
                <li><a href="#">service</a></li>
                <li><a href="#">events</a></li>
                <li><a href="#">learn</a></li>
                <li><a href="#">join</a></li>
            </ul>
            <input className={styles.input} type="text"/>
            <div className={styles.searchIcon}>
                <i className="fas fa-search"></i>
            </div>
        </nav>
    )
}

export default Nav
