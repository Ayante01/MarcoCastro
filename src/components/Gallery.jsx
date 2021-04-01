import React from 'react';
import GalleryItem from './GalleryItem.jsx';
import ImageOne from '../assets/static/hero-one.png';

import '../assets/styles/components/Gallery.scss';
import '../assets/styles/components/GalleryItem.scss';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  mobile: {
    breakpoint: {
      max: 539,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1025,
      min: 540
    },
    items: 3
  }
};

const Gallery = () => {
    const textOne = 'CALIDAD';
    const textTwo = 'SATISFACCIÓN';
    const textThree = 'COMPROMISO';
    const textFour = 'CONFIANZA';
    const textFive = 'DIFERENCIA';
    const textSix = 'SEGURIDAD';
    const textSeven = 'AGILIDAD';
    const textEight = 'GARANTÍA';
    return (
        <div className='container'>
            <div className='gallery-content'>
                <h2 className='about-title'>Galería</h2>
                <div className='gallery'>
                    <GalleryItem text={textOne} img={ImageOne}/>
                    <GalleryItem text={textTwo} img={ImageOne}/>
                    <GalleryItem text={textThree} img={ImageOne}/>
                    <GalleryItem text={textFour} img={ImageOne}/>
                    <GalleryItem text={textFive} img={ImageOne}/>
                    <GalleryItem text={textSix} img={ImageOne}/>
                    <GalleryItem text={textSeven} img={ImageOne}/>
                    <GalleryItem text={textEight} img={ImageOne}/>
                </div>
                <Carousel
                additionalTransfrom={0}
                arrows
                centerMode={false}
                className="mobile-carousel"
                containerClass="container"
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                >
                  <div className='gallery-item'>
                    <img className='image' src={ImageOne} alt="Maquinaria"/>
                    <p className='text'>{textOne}</p>
                  </div>
                  <div className='gallery-item'>
                    <img className='image' src={ImageOne} alt="Maquinaria"/>
                    <p className='text'>{textTwo}</p>
                  </div>
                  <div className='gallery-item'>
                    <img className='image' src={ImageOne} alt="Maquinaria"/>
                    <p className='text'>{textThree}</p>
                  </div>
                  <div className='gallery-item'>
                    <img className='image' src={ImageOne} alt="Maquinaria"/>
                    <p className='text'>{textFour}</p>
                  </div>
                  <div className='gallery-item'>
                    <img className='image' src={ImageOne} alt="Maquinaria"/>
                    <p className='text'>{textFive}</p>
                  </div>
                  <div className='gallery-item'>
                    <img className='image' src={ImageOne} alt="Maquinaria"/>
                    <p className='text'>{textSix}</p>
                  </div>
                  <div className='gallery-item'>
                    <img className='image' src={ImageOne} alt="Maquinaria"/>
                    <p className='text'>{textSeven}</p>
                  </div>
                  <div className='gallery-item'>
                    <img className='image' src={ImageOne} alt="Maquinaria"/>
                    <p className='text'>{textEight}</p>
                  </div>
                </Carousel>
            </div>
            
        </div>
    );
};

export default Gallery;
