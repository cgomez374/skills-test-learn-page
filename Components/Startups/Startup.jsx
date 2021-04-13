import React from 'react'
import styles from '../../styles/Startup.module.css'

function Startup({ course }) {
    return (
        <div className={styles.borderRadient}>
              <div className={styles.card + ' col'}>
                <div className={styles.earn}>
                    <div className={styles.circle}></div>
                    <p id={styles.earnP}>earn $30</p>
                </div>
                <h4>{course.title}</h4>
                <p className={styles.pSmall}>{course.desc !== '' ? course.desc : " "}</p>
                <div className={styles.buttonContainer + ' row'}>
                    <button id={styles.lt}>learn</button>
                </div>
                <p>{course.completed}/{course.total} Modules</p>
                <img className={styles.img} src="./progressbar.png" alt="progress bar"/>
                <p className={styles.pSmall}>83% Completed</p>
            </div>
        </div>
    )
}

export default Startup
