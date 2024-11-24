import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import React from 'react'
const Home = () => {
    return (
        <>
            <div className={styles.cont}>

                <ul className="nav justify-content-center text-bg-dark pt-4 pb-4 ">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to='/'>Home</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link className="text-white" to='/about'>About me</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link className='text-white' to='/contact'>Contact</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><Link className='text-white' to='/project'>My Projects</Link></a>
                    </li>
                </ul>
                <div className='main'>
                    <h1 className={styles.name}>RONAK BHOWMIK</h1>
                    <div className={styles.content}>
                        <button className={styles.btn}><Link className={styles.btn1} to={'/contact'}>Hire Me</Link></button>
                        <img src="/images/Capture2.PNG" alt="img" className={styles.img} />
                        <a href={`https://drive.google.com/file/d/1-4hPJyA5uQZK97mBsPs4xzyFMWlrjfXV/view?usp=sharing`} download="RonakBhowmik_CV_2025.pdf">
                            <button className={styles.btn}>download cv</button>
                        </a>
                    </div>
                    <h1 className={styles.line}>I AM <span className={styles.word}>Programmer</span></h1>
                </div>

            </div>
        </>
    )
}

export default Home