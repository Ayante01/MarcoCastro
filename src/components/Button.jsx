import React from 'react';
import '../assets/styles/components/Button.scss';
import '../assets/styles/Hovers.scss';

import { Link } from 'react-scroll'

const Button = ({name}) => {
    return (
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className='primary-button hvr-grow '>
            <button className='button'>
                {name}
            </button>
        </Link>
    )
}

export default Button
