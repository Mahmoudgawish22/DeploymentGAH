import "../headerLogo/headerLogo.css"
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import decode from 'jwt-decode'
import { useDispatch } from 'react-redux'


function HeaderLogo(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const logOut = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    }
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    return (
        <div id='reusableheader'>
            <p id='reusablecontent'>{props.disc}</p>
            <a href='#secondSection' style={{width: '30%', marginBottom:'10px'}} className='btn btn-light'>Get Started!</a>
            <a href='#contactform' style={{width: '30%'}} className='btn btn-danger'>Contact Us!</a>
            {
            user? 
            <a href='/cpanel' class="nav-link" style={{fontSize:'14px',display:'flex',alignItems:'center', marginTop:'7px'}} target="_self"><i style={{color:'#000 ',fontSize:'18px',marginRight:'10px'}} class="fas fa-gamepad"></i> Enter C-panel</a>
            : <a href='/login' class="nav-link" style={{fontSize:'14px',display:'flex',alignItems:'center', marginTop:'7px'}} target="_self"><i style={{color:'#000 ',fontSize:'18px',marginRight:'10px'}} class="fas fa-sign-in-alt"></i> Are you an Admin?</a>
        }
            </div>
    )
}
export default HeaderLogo