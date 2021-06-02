import '../postsDisplay/photodisplay.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import EditPost from '../../forms/editPost/editpost.js'
import logo from '../../../../imgs/193171559_169250608475072_5253348756644639465_n.png'


function PhotoDisplay(props) {
    const posts = useSelector((state) => state.posts)
    return (
        <div id='photodisplay'>
            <div id='navCpanel'>
            <img id='logoCpanel' src={logo} alt='Logo'/>
            <label style={{color: 'white', fontFamily: "Poppins"}}>Edit Posts</label>
            </div>
            {
          !posts.length? 
          <div class="spinner-box">
          <div class="configure-border-1">  
          <div class="configure-core"></div>
          </div>  
          <div class="configure-border-2">
          <div class="configure-core"></div>
          </div> 
          </div>
          : <ul className='photopostsc'>
          {posts.slice(0).reverse().map(item=> <li key={item._id} className='photolinkc'>
              <a className='itemlinkc'>
                  <img className='imgpostsc' src={item.photo} alt='post'/>
                  <div>
                  <EditPost slideshow={item.slideshow} title={item.title} subtitle={item.subtitle} tags={item.tags} photo={item.photo} idDB={item._id}/>
                  </div>
              </a>
          </li>)}
      </ul>}
      
        </div>
    )
}
export default PhotoDisplay