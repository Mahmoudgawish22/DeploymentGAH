import React, { useState } from "react";
import './slideshow.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from 'react-bootstrap/Carousel'  
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const posts = useSelector((state) => state.posts)
    const slideShowPosts = posts.filter(item=> item.slideshow != 0);
    return (
      <div id='secondSection'>
        <h1 id='slidcontent'>OUR NEW WORK..</h1>
        <ScrollAnimation animateIn="slideInUp" animateOnce='true'>
          <div className='divforCar' style={{display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginTop:'5px', borderRadius:'10px', backgroundColor:'#242321'}}>
        {
          !slideShowPosts.length? 
          <div class="spinner-box">
          <div class="configure-border-1">  
          <div class="configure-core"></div>
          </div>  
          <div class="configure-border-2">
          <div class="configure-core"></div>
          </div> 
          </div>
          : <Carousel className='carsousel' activeIndex={index} onSelect={handleSelect} style={{minHeight: '500px', width: '100%' , display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop:'5px', padding: '20px'}}> 
          {slideShowPosts.map(item =>
            <Carousel.Item style={{height:"500px"}}>
            <div className='slideshowitem' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <img style={{height: 'auto', width:'400px'}} src={item.photo}/>
            </div>
        </Carousel.Item>
            )}
        </Carousel>
  }
       </div>
      </ScrollAnimation>
      </div>
    );
  }
export default ControlledCarousel