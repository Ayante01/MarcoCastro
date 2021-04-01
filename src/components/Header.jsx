import React from 'react'
import { Link } from 'react-scroll'
import '../assets/styles/components/Header.scss';
import '../assets/styles/Hovers.scss';
import logo from '../assets/static/LOGO.svg';

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

import Hamburger from './Hamburger.jsx';

const Header = () => {
    return (
        <StickyHeader header = {
            <div>
            <nav className='header Header_root'>
              <img src={logo} alt='MARCO CASTRO' className='logo'/>
              <ul className='nav-list Header_links'>
                  <li className='list-item Header_link'><Link activeClass="active" to="hero" spy={true} smooth={true} duration={500} className='hvr-underline-from-left'>Inicio</Link></li>
                  <li className='list-item Header_link'><Link activeClass="active" to="about" spy={true} smooth={true} duration={500} className='hvr-underline-from-left'>Quienes Somos</Link></li>
                  <li className='list-item Header_link'><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className='hvr-underline-from-left'>Contactenos</Link></li>
              </ul>
              
              </nav>
              <Hamburger/>
            </div>
            
            }></StickyHeader>
    )
}

export default Header;
