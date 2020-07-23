import React, { useState, useEffect} from 'react'
import axios from 'axios'

import './Paw.css'

const Paw = () => {

        const [projectPaw, setProjectPaw] = useState(null)
    
        const getProjectPaw = () => {
            axios.get('http://localhost:8080/api/project/presentation')
                .then((res) => setProjectPaw(res.data))
        }
    
        useEffect(() => getProjectPaw(), [])

    return projectPaw === null ?   
    <p>Loading</p>
    :(
        <div>
            {projectPaw.filter(item => item.project_title === 'PAW').map(info =>
            <div className='container-project'>
                <h2>{info.project_title}</h2>
                <p>crée le : {info.date_creation}</p>
                <p>{info.project_description}</p>
                <img key={info.id} src={info.url_image} alt={info.project_title} className='image-project'></img><br/>
                <a href={info.github_link} className='github-project'>Lien Github</a>
            </div>
                 )}
        </div>
    )
}

export default Paw