import React from 'react';
import '../assets/styles/components/Footer.scss';
import '../assets/styles/Hovers.scss';


import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='row-one'>
                    <div className='services'>
                        <h4 className='footer-title'>Servicios</h4>
                        <div className='text-container'>
                            <p className='footer-text'>Venta de agregados</p>
                            <p className='footer-text'>Movimientos de tierra</p>
                            <p className='footer-text'>Alquiler de backhoe</p>
                        </div>
                    </div>
                    <div className='contact'>
                        <h4 className='footer-title'>Contact</h4>
                        <div className='text-container'>
                            <div className='icons-text'>
                                <PhoneIcon className='icon'/>
                                <p className='footer-text'>8568-2813</p></div>
                            <div className='icons-text'>
                                <MailIcon className='icon'/>
                                <p className='footer-text'>marcocastrovindas@hotmail.com</p></div>
                            <div className='icons-text'>
                                <LocationOnIcon className='icon'/>
                                <p className='footer-text'>Barrio La Riviera, Esparza, Puntarenas</p></div>
                        </div>
                    </div>
                    <div className='social'>
                        <FacebookIcon className='social-icon hvr-bob'/>
                        <InstagramIcon className='social-icon hvr-bob'/>
                    </div>
                </div>
                <div className='row-two'>
                    <div className='copyright'>
                        <CopyrightIcon className='icon'/>
                        <p className='copy-text'>Copyright 2021, Marco Castro.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
