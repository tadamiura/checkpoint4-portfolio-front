import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './FormAboutMe.css'

const UpdateAboutMe = () => {
    const [data, setData] = useState({
        description: null,
        about: null,
        email: null,
        github_profil: null,
        linkedin_profil: null
    })

    const getData = () => {
        const url = 'http://localhost:8080/api/about'
        axios.get(url)
            .then((res) => setData(res.data[0] || console.log("getData", res.data))
            )
    }

    useEffect(() => getData(), [])

    const handleChange = (e) => {
        // const { name, value } = e.target
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .put('http://localhost:8080/api/about/1', data)
            .then((res) => res.data)
            .then((res) => alert(`${res}`))
            .catch((err) => alert(`erreur : ${err.response.data} `))
    }

    return data === null ?
        <p>Loading ...</p>
        : (
            <div>
                <form className='update-about-me' onSubmit={handleSubmit}>
                    <h2 className='title-form'>Mettre à jour son texte de présentation</h2>
                    <textarea name='description' id='message-description' required className='form-textarea' value={data.description} onChange={handleChange} /><br />
                    <h2 className='title-form'>Mettre à jour son texte de description dans About Me</h2>
                    <textarea name='about' id='message-about' required className='form-textarea' value={data.about} onChange={handleChange} /><br />
                    <div className='testform'>
                        <label htmlFor='email'>e-mail</label>
                        <input type='email' name='email' id='email' required className='form-input' value={data.email} onChange={handleChange} />
                    </div>
                    <div className='testform'>
                        <label htmlFor='github_profil'>lien Github</label>
                        <input type='text' name='github_profil' id='github_profil' className='form-input' value={data.github_profil} onChange={handleChange} />
                    </div>
                    <div className='testform'>
                        <label htmlFor='linkedin_profil'>lien LinkedIn</label>
                        <input type='text' name='linkedin_profil' id='linkedin_profil' className='form-input' value={data.linkedin_profil} onChange={handleChange} />
                    </div>
                    <input type='submit' value='ENVOYER' className='button-send' />
                </form>
            </div>
        )
}

export default UpdateAboutMe