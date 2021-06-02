import '../adminDisplay/admindisplay.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import EditAdmin from '../../forms/editAdmin/editadmin.js'
import logo from '../../../../imgs/193171559_169250608475072_5253348756644639465_n.png'


function AdminDisplay(props) {
    const users = useSelector((state) => state.userReducer);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const ourAdmin = users.filter(item => item._id == user.result._id);
    return (
        <div id='admindisplay'>
            <div id='navCpanel'>
            <img id='logoCpanel' src={logo} alt='Logo'/>
            <label style={{color: 'white', fontFamily: "Poppins"}}>Edit Admins</label>
            </div>
            {
          !users.length? 
          <div class="spinner-box">
          <div class="configure-border-1">  
          <div class="configure-core"></div>
          </div>  
          <div class="configure-border-2">
          <div class="configure-core"></div>
          </div> 
          </div>
          : <ul className='adminpostcs container-fluid'>
          {
          user.result.admin==1?
          users.slice(0).reverse().map(item=> <li key={item._id} className='adminlinkc container-fluid'>
              <a className='itemlinkca'>
                  <img className='imgadminsc' src={item.photo} alt='admin'/>
                 <div>
                  <EditAdmin admin={item.admin} name={item.name} email={item.email} photo={item.photo} idDB={item._id}/>
                 </div> 
              </a>
          </li>)
        :   <li key={ourAdmin[0]._id} className='adminlinkc container-fluid'>
        <a className='itemlinkca'>
            <img className='imgadminsc' src={ourAdmin[0].photo} alt='admin'/>
           <div>
            <EditAdmin admin={ourAdmin[0].admin} name={ourAdmin[0].name} email={ourAdmin[0].email} photo={ourAdmin[0].photo} idDB={ourAdmin[0]._id}/>
           </div> 
        </a>
    </li>
        }
      </ul>}
      
        </div>
    )
}
export default AdminDisplay