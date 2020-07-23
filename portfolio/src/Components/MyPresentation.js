import React, { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';
import axios from 'axios'

import './MyPresentation.css'

const MyPresentation = () => {

    const [presentation, setPresentation] = useState(null)

    const getPresentation = () => {
        axios.get('http://localhost:8080/api/about/presentation')
            .then((res) => setPresentation(res.data) || console.log('res', res.data))
    }

    useEffect(() => getPresentation(), [])

    return presentation === null
        ? <p>Loading</p>
        : (
            <div>
                <div>
                    <BurgerMenu />
                </div>
                <div className='about-me-presentation'>
                    {presentation.map(text =>
                        <p>
                            {text.about}
                        </p>
                    )}
                </div>
                <footer>
                    <p>N'hésitez pas à me suivre et me contacter</p>
                    {presentation.map((lien, index) =>
                    <a key={index} href={lien.email}>mail</a>
                    // <p>{lien.github_profil}</p>
                    // <p>{lien.linkedin_profil}</p>
                    )}
                 
                </footer>
            </div>
        )
}

export default MyPresentation