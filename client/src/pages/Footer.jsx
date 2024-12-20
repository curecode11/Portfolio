import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.cont}>
        <pre className={styles.lastline}>
            &lt;&lt;&lt;&copy; 2024 Ronak Bhowmik. All rights reserved.&gt;&gt;&gt;   
        </pre>
        <pre className={styles.links}>
          <a href="https://leetcode.com/u/curecode11/" className={styles.link}><img src="/images/leetcode.png" alt="" className={styles.img}/></a>
          <a href="https://www.geeksforgeeks.org/user/curecode11/" className={styles.link}><img src="/images/gfg.png" alt="" className={styles.img}/></a>
          <a href="https://www.linkedin.com/in/ronakbhowmik/" className={styles.link}><img src="/images/linkedin.png" alt="" className={styles.img}/></a>
          <a href="https://github.com/curecode11" className={styles.link}><img src="/images/github.png" alt="" className={styles.img}/></a>
        </pre>
    </div>
  )
}

export default Footer