import './homepage.css';
import React from 'react';
import Header from './header/header.js'
import SecondHeader from './content/secondheader/secondHeader.js'
import OurServices from './content/ourservices/ourservices.js'
import Products from '../homePage/content/products/products.js'
import AboutUs from '../homePage/content/contactUs/aboutus/aboutus.js'
import ContactForm from '../homePage/content/contactUs/contactform/contactform.js'
import Footer from './footer/footer.js'
import ControlledCarousel from './content/slideshow/slideshow.js'
import ScrollAnimation from 'react-animate-on-scroll';

function Homepage() {
  return (
    <div className="homepage">
      <Header/>
      <SecondHeader/>
      <OurServices/>
      <ControlledCarousel/>
      <Products/>
      <AboutUs/>
      <ScrollAnimation animateIn="slideInUp" animateOnce='true'>
      <ContactForm/>
      <Footer/>
      </ScrollAnimation>
    </div>
  );
}

export default Homepage;