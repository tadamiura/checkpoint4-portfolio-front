import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub,
    faLinkedin 
} from "@fortawesome/free-brands-svg-icons"

import axios from 'axios'
import './MyPresentation.css'

const MyPresentation = () => {

    const [presentation, setPresentation] = useState(null)

    const getPresentation = () => {
        axios.get('http://localhost:8080/api/about/presentation')
            .then((res) => setPresentation(res.data))
    }

    useEffect(() => getPresentation(), [])

    return presentation === null
        ? <p>Loading</p>
        : (
            <div> 
                <div className='about-me-presentation'>
                    {presentation.map(text =>
                        <p key={text.id}>
                            {text.about}
                        </p>
                    )}
                </div>
                <footer className='footer-container'>
                    <p>N'hésitez pas à me suivre et me contacter</p>
                    {presentation.map(lien =>
                    <div key={lien.id} className='footer-links'>
                        <a href={`mailto:${lien.email}`} className='mail'>{lien.email}</a><br/>
                        <div className='logo-container'>
                        <a href={lien.github_profil} className='github'><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                        <a href={lien.linkedin_profil} className='linkedin'><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                        </div>
                    </div>
                    )}
                 
                </footer>
            </div>
        )
}

export default MyPresentation