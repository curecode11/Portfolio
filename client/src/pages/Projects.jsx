import { Link } from 'react-router-dom'
import styles from './Projects.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                console.log(process.env.REACT_APP_BACKEND_URL);
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects`);
                console.log(response.data)
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
                        <a className="nav-link active" aria-current="page" href="#"><Link className='text-white' to='/'>Home</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link className='text-white' to='/about'>About me</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link className='text-white' to='/contact'>Contact</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" ><Link className='text-white' to='/project'>My Projects</Link></a>
                    </li>
                </ul>

                <h1 className={styles.heading}>My Projects</h1>

                <div className={styles.main}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.project}>
                            <img src={project.image_url} alt="image" />

                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.project_link} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>

                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Projects