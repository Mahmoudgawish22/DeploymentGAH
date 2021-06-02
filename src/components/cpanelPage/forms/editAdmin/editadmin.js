import '../editAdmin/editadmin.css'
import React, { useState } from 'react';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { updateUser, deleteUser } from '../../../../actions/auth.js';
import MyVerticallyCenteredModal from '../modals/modal'
import { useHistory } from 'react-router-dom'
import MyVerticallyCenteredModalForDeleting from '../modals/deletemodal.js'
import LoadingModal from '../modals/loadingmodal.js'



function EditAdmin(props) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
    const [formData, setFormData] = useState({
        firstName: props.name.split(' ')[0],
        lastName: props.name.split(' ')[1],
        password: '',
        repassword: '',
        email: props.email,
        photo: props.photo,
        admin: props.admin
      })

    const [modalShow, setModalShow] = useState(false);
    const [modalShowD, setModalShowD] = useState(false);
    const [loadingModalShow, setLoadingModalShow] = useState(false);
    const [review, setReview] = useState('Nothing To Add, Sir!');

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoadingModalShow(true);
        dispatch(updateUser(props.idDB ,formData, setModalShow, setReview, setLoadingModalShow));
    }
    const handleClick = () => {
      setReview('Are U Sure?');
      setModalShowD(true);
      
    }
    const dispatchFunc = () => {
      setModalShowD(false);
      setLoadingModalShow(true);
      dispatch(deleteUser(props.idDB, setModalShow, setReview, history, setLoadingModalShow))
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
      }
    return (
        <div id='editpostFB'>
            <form id='editpostFB' onSubmit={handleSubmit}>
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
    <input type="password" class="form-control" value={formData.password} onChange={handleChange} name='password' id="password1" placeholder="Enter Old Password Or New Password" required/>
  </div>
  <div class="form-group">
    <label for="password2">Re-Password:</label>
    <input type="password" class="form-control" value={formData.repassword} onChange={handleChange} name='repassword' id="password2" placeholder="Re-Enter Old Password Or New Password" required/>
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
  {user.result.admin==1? 
  formData.admin==0? 
    <a onClick={()=> setFormData({...formData, admin: 1})} class="btn btn-info btn-block">Make Owner</a>
  : <a onClick={()=> setFormData({...formData, admin: 0})} class="btn btn-light btn-block">Make Just Admin</a>
  : <span></span>
}
{user.result.admin==1?
  <a onClick={handleClick} class="btn btn-danger btn-block">Delete</a>
  : <span></span>
}
  
    <button type="submit" class="btn btn-dark btn-block">Update Admin</button>
    <br/>
  </form>
  <MyVerticallyCenteredModal
        show={modalShow}
        textStatu= {review}
        title= 'Progressing..'
        onHide={() => setModalShow(false)}
  />
  <MyVerticallyCenteredModalForDeleting
        show={modalShowD}
        backdrop="static"
        textStatu= {review}
        title= 'Progressing..'
        onHide={() => setModalShowD(false)}
        dispatch={dispatchFunc}
  />
  <LoadingModal
        show={loadingModalShow}
        dialogClassName="modal-60w"
        backdrop="static"
  />
        </div>
    )
}
export default EditAdmin
