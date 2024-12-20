import { Link } from 'react-router-dom'
import styles from './Projects.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from './Footer'
import React from 'react'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [fetched, setfetched] = useState(true);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`https://ronak-748n.onrender.com/projects`);
                setfetched(false);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, [])
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

                <h1 className={styles.heading}>My Projects</h1>
                {fetched ? (
                    <div className={styles.spinnercont}>
                    </div>
                ) : (
                    <div className={styles.main}>
                        {projects.map((project) => (
                            <div key={project.id} className={styles.project}>
                                <img src={project.image_url} alt="image" />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.project_link} target="_blank" rel="noopener noreferrer">
                                    <button className={styles.btn}>view project</button>
                                </a>
                            </div>
                        ))}
                    </div>
                )
                }
            </div>
            <Footer/>
        </>
    )
}

export default Projects