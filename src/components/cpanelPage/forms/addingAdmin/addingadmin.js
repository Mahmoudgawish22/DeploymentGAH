import '../addingAdmin/addingadmin.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FileBase from 'react-file-base64'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import MyVerticallyCenteredModal from '../modals/modal.js'
import logo from '../../../../imgs/193171559_169250608475072_5253348756644639465_n.png'
import { signUp } from '../../../../actions/auth.js'
import LoadingModal from '../modals/loadingmodal.js'



function AddAdmin(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    repassword: '',
    email: '',
    photo: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
    
    const [modalShow, setModalShow] = useState(false);
    const [loadingModalShow, setLoadingModalShow] = useState(false);
    const clear=()=>setFormData({ firstName: '', lastName: '', password: '', repassword: '', email: '' });
    const [review, setReview] = useState('Nothing To Add, Sir!');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password == formData.repassword) {
          setLoadingModalShow(true);
          dispatch(signUp(formData,setReview,setModalShow, setLoadingModalShow));
        } else {
          setReview('The Two Passwords Don\'t Match');
          setModalShow(true);
        }
    }
    return (
      <div id='formbackadmin'>
        <div id='navCpanel'>
            <img id='logoCpanel' src={logo} alt='Logo'/>
            <label style={{color: 'white', fontFamily: "Poppins"}}>New Admin</label>
            </div>
        <form id='addpostadmin' onSubmit={handleSubmit}>
    <div class="form-group">
      <label for="first-name">First Name:</label>
      <input type="text" class="form-control" value={formData.firstName} onChange={handleChange} name='firstName' id="first-name" placeholder="Enter First Name" required/>
    </div>
    <div class="form-group">
      <label for="last-name">Last Name:</label>
      <input type="text" class="form-control" value={formData.lastName} onChange={handleChange} name='lastName' id="last-name" placeholder="Enter Second Name" required/>
    </div>
    <div class="form-group">
    <label for="password1">Password:</label>
    <input type="password" class="form-control" value={formData.password} onChange={handleChange} name='password' id="password1" placeholder="Enter Password" required/>
  </div>
  <div class="form-group">
    <label for="password2">Re-Password:</label>
    <input type="password" class="form-control" value={formData.repassword} onChange={handleChange} name='repassword' id="password2" placeholder="Re-Enter Password" required/>
  </div>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={formData.email} onChange={handleChange} name='email' id="email" aria-describedby="emailHelp" placeholder="Enter Email" required/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
    <div class="form-group">
    <label for="photo">Upload Profile:</label>
    <br/>
    <FileBase type='file' onDone={({base64}) => setFormData({...formData, photo: base64})} class="form-control-file" id="photo" multiple={false} required></FileBase>
  </div>
    <button type="submit" class="btn btn-dark btn-block">Add Admin</button>
    <br/>
  </form>
  <MyVerticallyCenteredModal
        show={modalShow}
        textStatu= {review}
        title= 'Progressing..'
        onHide={() => setModalShow(false)}
        onExit={clear}
  />
  <LoadingModal
        show={loadingModalShow}
        dialogClassName="modal-60w"
        backdrop="static"
  />
  </div>
    )
}
export default AddAdmin