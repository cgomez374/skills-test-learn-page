import React from 'react'
import styles from '../../styles/Category.module.css'

function Category({ category }) {
    return (
        <div className={styles.borderRadient}>
              <div className={styles.card + ' col'}>
                <h4>{category.title}</h4>
                {category.multiImg === true 
                    ? <div className={styles.images}>
                        <img src={category.img1} alt='picture' />
                        <img src={category.img2} alt='picture' />
                    </div>
                    : <img className={styles.categoryImages} src={category.img} alt='picture' /> }
            </div>
        </div>
    )
}

export default Category
