import React from 'react';
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll'

import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/AboutUs.jsx';
import Gallery from '../components/Gallery.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
          <Header />
          <Element name="hero" className="element" >
            <Hero />
          </Element>
          <Element name="about" className="element" >
            <About />
          </Element>
          <Gallery />
          <Element name="contact" className="element" >
            <Contact />
          </Element>
          <Footer />
      </div>
    );
  }
};

export default Section;
