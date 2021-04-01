import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-scroll'

import '../assets/styles/components/Hamburger.scss';

class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <Menu right disableAutoFocus id={ "sidebar" }>
        <Link activeClass="active" to="hero" spy={true} smooth={true} duration={500} className="menu-item">Inicio</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className="menu-item">Quienes Somos</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="menu-item">Contactenos</Link>
      </Menu>
    );
  }
}

export default Hamburger;