import { Link } from 'react-router-dom'
import styles from './About.module.css'
import Footer from './Footer'
import React from 'react'

const About = () => {
    return (
        <>
            <div className={styles.page}>
                <ul className="nav justify-content-center text-bg-dark pt-4 pb-4 ">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"><Link className={styles.und} to='/'>Home</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link className={styles.und} to='/about'>About me</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link className={styles.und} to='/contact'>Contact</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><Link className={styles.und} to='/project'>My Projects</Link></a>
                    </li>
                </ul>
                <div className={styles.main}>
                    <h1 className={styles.heading}>About Me</h1>

                    <div className={styles.intro}>
                        <pre>Hi, I'm <em>Ronak Bhowmik</em>, an aspiring software engineer specializing in building dynamic and responsive full stack web applications.
                        </pre>
                    </div>

                    <div className={styles.skills}>
                        <pre>
                            <h2>Technical Skills</h2>
                            <h3>Languages :</h3>
                            
                            <img src="https://skillicons.dev/icons?i=c,cpp,java,js,py" className={styles.img}/>
                            <br />
                            <h3>Databases :</h3> 
                            <img src="https://skillicons.dev/icons?i=mysql,mongodb" className={styles.img}/>
                            <br />
                            <h3>Frameworks :</h3>
                            <img src="https://skillicons.dev/icons?i=react,express,nodejs,bootstrap" className={styles.img}/>
                            <br />
                            <h3>Other :</h3>
                            <img src="https://skillicons.dev/icons?i=git,linux,vscode,html,css,latex" className={styles.img}/>
                        </pre>
                    </div>

                    <div className={styles.Education}>
                        <pre>
                            <h2>Education</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Degree</th>
                                        <th>University</th>
                                        <th>Grades</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Master of Computer Applications</td>
                                        <td>Guru Gobind Singh Indraprastha University</td>
                                        <td>9.40</td>
                                    </tr>
                                    <tr>
                                        <td>B.Sc. Electronic Science(Hons.)</td>
                                        <td>University of Delhi</td>
                                        <td>8.05</td>
                                    </tr>
                                </tbody>
                            </table>
                        </pre>
                    </div>

                    <div className={styles.achievment}>
                        <pre>
                            <h2>Achievment</h2>
                            <ol>
                                <li>Solved more than 500 DSA problems across different coding platforms with 350+ at <em>leetcode</em> and 200+ at <em>geeks for geeks</em>.</li>
                                <li>Ranked among top 150 coders in gfg University rankings.</li>
                                <li>Successfully managed and facilitated the submission of over 100 research papers for IndiaCom 2024, ensuring smooth technical review and organization.</li>
                                <li>Awarded by <em>Hindustani Bhasha Academy</em> for excellency in regional language.</li>
                            </ol>
                        </pre>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About