import '../ourservices/ourservices.css';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import img1 from '../../../../imgs/180788258_3772386382874583_1650539538634060360_n.jpg'


function OurServices(props) {
    return (
        <div id='ourservices'>
            <div id='uppersection' >
            <h2 id='whoIam'>
                Who Am I?
            </h2>
            <ScrollAnimation animateIn="slideInUp" animateOnce='true'>
            <img id='owner' src={img1}></img>
            <p id='whoIamDisc'>
            Omar Timo Agency for Creativity is an agency characterized by many broad artistic fields, As, 3D, Paper Painting, Sault Painting, Tea Panting, or even Grafite..
             and it was created with the personal efforts of its owner alone five years ago.
After many delving into small and large projects, the agency has proven its eligibility to be present in this field, and if it is not the only one, it has already proven that it is distinguished.
            </p>
            </ScrollAnimation>
            </div>
            </div>
    )
}
export default OurServices