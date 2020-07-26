import React, { useState, useEffect} from 'react'
import axios from 'axios'

import './Project.css'

const Project = (props) => {

        const [project, setProject] = useState(null)
    
        const getProject = () => {
            axios.get(`http://localhost:8080/api/project/presentation`)
                .then((res) => setProject(res.data))
        }
    
        useEffect(() => getProject(), [])

    return project === null ?   
    <p>Loading</p>
    :(
        <div className='container-getProject'>
            {project.map( info =>
            <div className='container-project' key={info.id}>
                <h2 className='project-name'>{info.project_title}</h2>
                <p className='project-date'>Créé le : {info.date}</p>
                <p className='project-languages'>{info.language}</p>
                <p className='project-duration'>Durée du projet : {info.duration}</p>
                <p className='project-description'>Description : {info.project_description}</p>
                <img className='image-project' src={info.url_image} alt={info.project_title} ></img><br/>
                <a className='github-project' href={info.github_link} >Le lien Github</a>
            </div>
                 )}
        </div>
    )
}

export default Project