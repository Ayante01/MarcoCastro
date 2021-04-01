import React from 'react';
import '../assets/styles/components/Hero.scss';
import Button from './Button';

import imageOne from '../assets/static/one.png';
import imageTwo from '../assets/static/hero-two.png';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 1
  }
};

const Hero = () => {
    return (
        <div className='hero-container'>
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay
              autoPlaySpeed={5000}
              centerMode={false}
              className="carousel"
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <img
                src={imageOne}
                alt='backhoe'
                className='hero-image'
              />
              <img
                src={imageTwo}
                alt='truck'
                className='hero-image'
              />
            </Carousel>
            <div className='main-content'>
              <h1 className='main-title'>Venta de agregados y Movimientos de tierra</h1>
              <p className='secoundary-title'>Alquiler de backhoe, movimientos de tierra, limpieza de lotes y venta de agregados de construcción.</p>
              <Button name='contáctenos'/>
            </div>
            
        </div>
    );
};

export default Hero;
