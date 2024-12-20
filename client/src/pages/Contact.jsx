import { Link } from 'react-router-dom'
import styles from './Contact.module.css'
import { useState } from 'react'
import Footer from './Footer'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        message: '',
    })
    const navigate = useNavigate();
    const handlechange = (e) => {
        setUser((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
        console.log(user);
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://ronak-748n.onrender.com/send`, user);
            alert("thanks for connecting")
            navigate('/');
        }
        catch (err) {
            alert("use correct credentials")
            console.log(err);
        }
    }

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
                    <h1 className={styles.heading}>Contact Me</h1>
                    <div className={styles.form}>
                        <h3 className={styles.conn}>Connect with me on Linked
                            <a href={`https://www.linkedin.com/in/ronakbhowmik/`}>
                                <FontAwesomeIcon icon={faLinkedin} size="1x" />
                            </a>
                        </h3>
                        <h3 className={styles.conn}>Connect with me on GitHub
                            <a href={`https://github.com/curecode11`}>
                                <FontAwesomeIcon icon={faGithub} color='gray' />
                            </a>
                        </h3>
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input type="text" id="name" name="name" onChange={handlechange} required /><br /><br />
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input type="email" id="email" name="email" onChange={handlechange} required /><br /><br />
                        <label htmlFor="message">Message:</label><br />
                        <textarea id="message" name="message" rows={10} onChange={handlechange} required /><br /><br />
                        <button type="submit" onClick={handlesubmit} className={styles.btn}>Send Message</button>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Contact