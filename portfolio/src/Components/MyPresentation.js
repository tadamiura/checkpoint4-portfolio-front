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
                        <p>
                            {text.about}
                        </p>
                    )}
                </div>
                <footer className='footer-container'>
                    <p>N'hésitez pas à me suivre et me contacter</p>
                    {presentation.map((lien, index) =>
                    <div className='footer-links'>
                        <a key={index} href={`mailto:${lien.email}`} classname='mail'>{lien.email}</a><br/>
                        <a key={index} href={lien.github_profil} className='github'><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                        <a key={index} href={lien.linkedin_profil} className='linkedin'><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                    </div>
                    )}
                 
                </footer>
            </div>
        )
}

export default MyPresentation