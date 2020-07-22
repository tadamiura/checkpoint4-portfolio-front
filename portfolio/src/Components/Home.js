import React, { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu';  
import axios from 'axios'

import './Home.css'

const Home = () => {

    const [aboutMe, setAboutMe] = useState(null)

    const getAboutMe = () => {
        axios.get('http://localhost:8080/api/about/home')
            .then((res) => setAboutMe(res.data) || console.log('res', res.data))
    }

    useEffect(() => getAboutMe(), [])


    return aboutMe === null
        ? <p>Loading</p>
        : (
            <div>
                <div>
                    <BurgerMenu />
                </div>
                <div className='about-me-home'>
                    {aboutMe.map(me =>
                        <div>
                            <h1>{me.firstname}</h1>
                            <h2>{me.lastname}</h2>
                            <h3>{me.description}</h3>
                        </div>
                    )}
                </div>
            </div>
        )
}

export default Home