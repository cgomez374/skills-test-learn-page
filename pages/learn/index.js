import React from 'react'
import Styles from '../../styles/Learn.module.css'

export default function LearnMore() {
  let module = 1;
  return(
    <section className={Styles.section}>
        <h1 className={Styles.title}>intro to blockchain</h1>
        <h2 className={Styles.subTitle}>blockchain, cryptocurrency, fundamentals</h2>
        <div className={Styles.cardContainer + ' row'}>
          <div className={Styles.borderRadient}>
            <div className={Styles.card}>
              <h3>module {module++}</h3>
              <p>sections completed: 8</p>
              <p>total sections: 10</p>
              <button className={Styles.btn}>start</button>
            </div>
          </div>
          <div className={Styles.borderRadient}>
            <div className={Styles.card}>
              <h3>module {module++}</h3>
              <p>sections completed: 8</p>
              <p>total sections: 10</p>
              <button className={Styles.btn}>start</button>
            </div>
          </div>
          <div className={Styles.borderRadient}>
            <div className={Styles.card}>
              <h3>module {module++}</h3>
              <p>sections completed: 8</p>
              <p>total sections: 10</p>
              <button className={Styles.btn}>start</button>
            </div>
          </div>
          <div className={Styles.borderRadient}>
            <div className={Styles.card}>
              <h3>module {module++}</h3>
              <p>sections completed: 8</p>
              <p>total sections: 10</p>
              <button className={Styles.btn}>start</button>
            </div>
          </div>
          <div className={Styles.borderRadient}>
            <div className={Styles.card}>
              <h3>module {module++}</h3>
              <p>sections completed: 8</p>
              <p>total sections: 10</p>
              <button className={Styles.btn}>start</button>
            </div>
          </div>
        </div>
    </section>
  )
}
