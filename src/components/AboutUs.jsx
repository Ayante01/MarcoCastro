import React from 'react';
import brandOne from '../assets/static/brand-one.png';
import brandTwo from '../assets/static/brand-two.png';

import '../assets/styles/components/AboutUs.scss'

const AboutUs = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='about-main-content'>
                    <div className='about-text'>
                        <h2 className='about-title'>Quiénes somos</h2>
                        <p className='main-description'>
                        Marco Castro se distingue por ser una empresa basada en los valores de <span>honestidad y responsabilidad</span>, 
                        poniendo en primera línea <span>resultados de calidad</span> para asegurar la mayor satisfacción de nuestros clientes.
                        Además, consideramos garantizar la mayor seguridad y confianza en el trabajo junto al equipo humano contemplando <span>todos los seguros de Instituto Nacional de Seguros
                        (INS) y la Caja Costarricense de Seguro Social.</span> 
                        </p>
                    </div>
                </div>
                <div className='brand-container'>
                    <h3 className='brand-title'>Nuestra<br />Maquinaria:</h3>
                    <img className='brand-img' src={brandOne} alt="caterpillar"/>
                    <img className='brand-img' src={brandTwo} alt="max"/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
