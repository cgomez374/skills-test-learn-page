import {useState, useEffect} from 'react'
import Courses from '../Components/Courses/Courses'
import Category from '../Components/Categories/Category'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import courses from '../public/courses'
import categories from '../public/categories'

export default function Home() {
  //create state
  const [coursesArr, setCoursesArr] = useState(courses);
  const [categoriesArr, setCategories] = useState(categories);

  return(
    <section>
      <div className={styles.filler}></div>
      <div className={styles.banner}>
        <img src="./banner.png" alt="banner"/>
      </div>
      <h2 className={styles.subTitle}>my courses</h2>
      <div className={styles.startups + ' row'}>
        {coursesArr.map((item) => (
          <Courses key={item.projectName} course={item} />
        ))}
      </div>
      <h2 className={styles.subTitle}>featured courses</h2>
      <div className={styles.startups + ' row'}>
      {coursesArr.map((item) => (
          <Courses key={item.projectName} course={item} />
        ))}
      </div>
      <h2 className={styles.subTitle}>by category</h2>
      <div className={styles.startups + ' row'}>
      {categoriesArr.map((item, index) => (
          <Category key={index} category={item} />
        ))}
      </div>
    </section>
  )
}
