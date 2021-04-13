import {useState, useEffect} from 'react'
import Startup from '../Components/Startups/Startup'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import courses from '../public/courses'

export default function Home() {
  //create state
  const [coursesArr, setCoursesArr] = useState(courses);
  // const [upcomingStartups, setUpcomingStartups] = useState(upcoming);

  return(
    <section>
      <div className={styles.filler}></div>
      <div className={styles.banner}>
        <img src="./banner.png" alt="banner"/>
      </div>
      <h2 className={styles.subTitle}>my courses</h2>
      <div className={styles.startups + ' row'}>
        {coursesArr.map((item) => (
          <Startup key={item.projectName} course={item} />
        ))}
      </div>
      <h2 className={styles.subTitle}>featured courses</h2>
      <div className={styles.startups + ' row'}>
      {coursesArr.map((item) => (
          <Startup key={item.projectName} course={item} />
        ))}
      </div>
      <h2 className={styles.subTitle}>by category</h2>
      <div className={styles.startups + ' row'}>
      {/* {upcomingStartups.map((item) => (
          <Startup key={item.projectName} startup={item} />
        ))} */}
      </div>
    </section>
  )
}
