import React, { useState } from 'react'
import axios from 'axios'
import './FormAboutMe'

const UpdateAboutMe = () => {
    const [data, setData] = useState({
        description: null,
        about: null,
        email: null,
        github_profil: null,
        linkedin_profil: null
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .put('http://localhost:8080/api/about/1', data)
            .then((res) => res.data)
            .then((res) => alert(`${res}`))
            .catch((err) => alert(`erreur : ${err.response.data} `))
    }

    return (
        <div>
            <form className='update-about-me' onSubmit={handleSubmit}>
                <h2 className='title-form'>Mettre à jour son texte de présentation</h2>
                <textarea name='description' id='message-description' required className='form-textarea' rows="10" cols="30" onChange={handleChange}/><br />
                <h2 className='title-form'>Mettre à jour son texte de description dans About Me</h2>
                <textarea name='about' id='message-about' required className='form-textarea' rows="10" cols="30" onChange={handleChange}/><br />
                <div className='testform'>
                    <label htmlFor='email'>e-mail</label>
                    <input type='email' name='email' id='email' required className='form-input' onChange={handleChange}/>
                </div>
                <div className='testform'>
                    <label htmlFor='github_profil'>lien Github</label>
                    <input type='text' name='github_profil' id='github_profil' className='form-input' onChange={handleChange}/>
                </div>
                <div className='testform'>
                    <label htmlFor='linkedin_profil'>lien LinkedIn</label>
                    <input type='text' name='linkedin_profil' id='linkedin_profil' className='form-input' onChange={handleChange}/>
                </div>
                <input type='submit' value='ENVOYER' className='button-send' />
            </form>
        </div>
    )
}

export default UpdateAboutMe