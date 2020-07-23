import React from 'react'
import './FormAboutMe'

const UpdateAboutMe = () => {
    return (
        <div>
            <form className='update-about-me'>
                <h2 className='title-form'>Mettre à jour son texte de présentation</h2>
                <textarea name='message' id='message-description' required className='form-textarea' rows="10" cols="30" /><br />
                <h2 className='title-form'>Mettre à jour son texte de descriptiion dans About Me</h2>
                <textarea name='message' id='message-about' required className='form-textarea' rows="10" cols="30" /><br />
                <div className='testform'>
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' name='email' id='email' required className='form-input' />
                </div>
                <div className='testform'>
                    <label htmlFor='github-link'>lien Github</label>
                    <input type='text' name='github-link' id='github-link' className='form-input' />
                </div>
                <div className='testform'>
                    <label htmlFor='linkedin-link'>lien LinkedIn</label>
                    <input type='text' name='linkedin-link' id='linkedin-link' className='form-input' />
                </div>
                <input type='submit' value='ENVOYER' className='button-send' />
            </form>
        </div>
    )
}

export default UpdateAboutMe