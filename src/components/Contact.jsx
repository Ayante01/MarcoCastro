import React from 'react';
import Form from './Form.jsx';
import Image from '../assets/static/contact.jpg';
import '../assets/styles/components/Contact.scss';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-content'>
                <h2 className='title-mobile'>Contáctenos</h2>
                <div className='contact-image'>
                    <img className='image' src={Image} alt="Contact"></img>
                </div>
                <div className='contact-form'>
                    <h2 className='title'>Contáctenos</h2>
                    <p className='text'>Estamos ubicados en el <span>Barrio la Riviera en Esparza Puntarenas</span>, costado Norte a la iglesia católica.</p>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact
