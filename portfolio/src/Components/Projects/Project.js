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
            {project.map( (info,index) =>
            <div className='container-project' key={info.id}>
                <h2>{info.project_title}</h2>
                <p>crée le : {info.date}</p>
                <p>{info.language}</p>
                <p>{info.duration}</p>
                <p>{info.project_description}</p>
                <img key={info.id} src={info.url_image} alt={info.project_title} className='image-project'></img><br/>
                <a href={info.github_link} className='github-project'>Lien Github</a>
            </div>
                 )}
        </div>
    )
}

export default Project