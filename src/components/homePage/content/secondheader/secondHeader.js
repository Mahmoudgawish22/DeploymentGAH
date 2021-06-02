import '../secondheader/secondHeader.css';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import logo from "../../../../imgs/192166475_465791097850428_441314903489211223_n.jpg";
import logo2 from "../../../../imgs/pexels-photo-1053687.jpg";
import HeaderLogo from '../slideshow/headerLogo/headerLogo.js'

function SecondHeader() {
    return (
        <div id='secondheader' style={{backgroundImage: `url(${logo2})`}}>
            <ScrollAnimation animateIn="slideInLeft" animateOnce='true'>
            <HeaderLogo disc='Welcome To The Easest and Best Way To Get Your Own Creative Paint Design!'/>
            </ScrollAnimation>
        </div>
    )
}
export default SecondHeader