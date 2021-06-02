import '../cpanelPage/cpanel.css'
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import add from '../../imgs/add.svg'
import addadmin from '../../imgs/follow.svg'
import deletepost from '../../imgs/edit-info.svg'
import deleteadmin from '../../imgs/profile.svg'
import home from '../../imgs/house.svg'
import logout from '../../imgs/arrow.svg'
import email from '../../imgs/email.svg'
import Addphoto from '../cpanelPage/forms/addingPost/addphoto.js'
import PhotoDisplay from '../cpanelPage/cContent/postsDisplay/photodisplay.js'
import AddAdmin from '../cpanelPage/forms/addingAdmin/addingadmin.js'
import logo from '../../imgs/180788258_3772386382874583_1650539538634060360_n.jpg'
import Data from '../cpanelPage/cContent/data/data.js'
import dashboard from '../../imgs/statistics.svg'
import background from '../../imgs/192166475_465791097850428_441314903489211223_n.jpg'
import AdminDisplay from '../cpanelPage/cContent/adminDisplay/admindisplay.js'
import MessageDisplay from '../cpanelPage/cContent/messagesDisplay/messagesdisplay.js'
import decode from 'jwt-decode'

function Cpanel(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    
    const [CpanelState, setCpanelState] = useState({
        isOpen: 0
    })
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [CpanelState]);

    const handleClick = (str) => {
        switch (str) {
            case 'addP':
                setCpanelState({ isOpen: 2 })
                break;
            case 'editP':
                setCpanelState({ isOpen: 3 })
                break;
            case 'addA':
                setCpanelState({ isOpen: 4 })
                break;
            case 'editA':
                setCpanelState({ isOpen: 5 })
                break;
            case 'mess':
                setCpanelState({ isOpen: 6 })
                break;
            default:
                setCpanelState({ isOpen: 1 })
                break;
        }
    }
    const logOut = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    }
    if (user?.result?.name) {
        return (
            <div id='cpanel'>
                <div id='cpanelContent'>
                <div id='sidebar'>
                    <div id='userInfo'>
                        <img id='userIcon' src={user?.result.imageUrl || user?.result.photo} alt='user-logo'/>
                        <h4 id='userName'>{user?.result.familyName || user?.result.name}</h4>
                        <label style={{color: 'white'}}>{user?.result.email}</label>
                    </div>
                    <div id='cnav-list' className='container-fluid'>
                    <button onClick={()=> handleClick('x')} style={{width: '100%'}} class=" cnav-link btn btn-light"><img src={dashboard} className='iconc'/> <span className='span'>Dashboard</span></button>
                    <button onClick={()=> handleClick('addP')} style={{width: '100%'}} class=" cnav-link btn btn-light"><img src={add} className='iconc'/> <span className='span'>New Post</span></button>
                    <button onClick={()=> handleClick('editP')} style={{width: '100%'}} class="cnav-link btn btn-light"><img src={deletepost} className='iconc'/> <span className='span'>Edit Posts</span></button>
                    <button onClick={()=> handleClick('addA')} style={{width: '100%'}} class="cnav-link btn btn-light"><img src={addadmin} className='iconc'/> <span className='span'>Add Admin</span></button>
                    <button onClick={()=> handleClick('editA')} style={{width: '100%'}} class="cnav-link btn btn-light"><img src={deleteadmin} className='iconc'/> <span className='span'>{user.result.admin==0? 'Edit Profile': 'Edit Admins'}</span></button>
                    <button onClick={()=> handleClick('mess')} style={{width: '100%'}} class="cnav-link btn btn-light"><img src={email} className='iconc'/> <span className='span'>Messages</span></button>
                    <button onClick={()=> window.open('/', '_self')} style={{width: '100%'}} class="cnav-link btn btn-light "><img src={home} className='iconc'/> <span className='span'>Home Page</span></button>
                    <button onClick={logOut} style={{width: '100%'}} class="cnav-link btn btn-light "><img src={logout} className='iconc'/> <span className='span'>Log Out</span></button>
                    </div>
                </div>
            <div id='cpanelControls' style={{backgroundImage: `url(${background})`}}>
        {CpanelState.isOpen==1? 
            <Data/>
        : CpanelState.isOpen==2?
        <Addphoto/>
        : CpanelState.isOpen==3?
        <PhotoDisplay/>
        :CpanelState.isOpen==4?
        <AddAdmin/>
        : CpanelState.isOpen==5?
        <AdminDisplay/>
        : CpanelState.isOpen==6?
        <MessageDisplay/>
        : CpanelState.isOpen==0?
         <label style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', color: 'black', padding: '50px', borderRadius: '5px'}}>Hi {user?.result.givenName || user?.result.name}, Welcome To Your C-Panel..</label>
         : <span></span>
    }
                </div>
                </div>
                </div>
        )
    } else {
        window.location.replace("/login");
    }
    

 }    
export default Cpanel