import '../data/data.css'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../../imgs/193171559_169250608475072_5253348756644639465_n.png'


function Data(props) {
    const posts = useSelector((state) => state.posts);
    const users = useSelector((state) => state.userReducer);
    const messages = useSelector((state) => state.messageReducer);
    const slideShow = posts.filter(item=> item.slideshow != 0);
    return (
        <div id='data' >
            <div id='navCpanel'>
            <img id='logoCpanel' src={logo} alt='Logo'/>
            <label style={{color: 'white', fontFamily: "Poppins"}}>Dashboard</label>
            </div>
            <div id='numbers' className='container-fluid'>
                <div className='numbersToData'>
                    <div className='headerofData'>
                        <h2 className='loginContent' style={{fontSize: '30px'}}>Posts</h2>
                    </div>
                    <div className='contentofData'>
                        <h1 className='loginContent' style={{fontSize: '80px'}}>{posts.length}</h1>
                    </div>
                </div>
                <div className='numbersToData'>
                <div className='headerofData'>
                        <h2 className='loginContent' style={{fontSize: '30px'}}>In Slideshow</h2>
                    </div>
                    <div className='contentofData'>
                        <h1 className='loginContent' style={{fontSize: '80px'}}>{slideShow.length}</h1>
                    </div>
                </div>
                <div className='numbersToData'>
                <div className='headerofData'>
                        <h2 className='loginContent' style={{fontSize: '30px'}}>Admins</h2>
                    </div>
                    <div className='contentofData'>
                        <h1 className='loginContent' style={{fontSize: '80px'}}>{users.length}</h1>
                    </div>
                </div>
                <div className='numbersToData'>
                <div className='headerofData'>
                        <h2 className='loginContent' style={{fontSize: '30px'}}>Messages</h2>
                    </div>
                    <div className='contentofData'>
                        <h1 className='loginContent' style={{fontSize: '80px'}}>{messages.length}</h1>
                    </div>
                </div>
            </div>
            <div id='lastPost'>
                <div id='lastpostHeader'>
                <h2 style={{fontSize: '30px'}}>Lastest Post</h2>
                </div>
                <div>
                    <img id='lastpostPhoto' src={posts[posts.length-1]?.photo} alt='Last-Post'/>
                </div>
            </div>
        </div>
    )
}
export default Data