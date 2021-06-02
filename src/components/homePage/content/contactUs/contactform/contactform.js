import '../contactform/contactform.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createMessage } from '../../../../../actions/messages.js'
import MyVerticallyCenteredModal from '../../../../cpanelPage/forms/modals/modal.js'
import LoadingModal from '../../../../cpanelPage/forms/modals/loadingmodal.js'

function ContactForm(props) {
  const [messagePost, setMessagePost] = useState({
    email: '',
    phone: '',
    mBody: ''
})
const [modalShow, setModalShow] = useState(false);
const [loadingModalShow, setLoadingModalShow] = useState(false);
const clear=()=>setMessagePost({ email: '', phone: '', mBody: '' });
const dispatch = useDispatch();
const handleSubmit = (e) => {
  e.preventDefault();
  setLoadingModalShow(true);
  dispatch(createMessage(messagePost, setModalShow, setLoadingModalShow));
}
const handleChange = (e) => {
  setMessagePost({...messagePost, [e.target.name]: e.target.value});
}

    return (
        <div id='contactform'>
            <h1 style={{color: 'white'}}>
               Contact Us!
            </h1>
            <br/>
            <form style={{width: '80%'}} onSubmit={handleSubmit}>
            <div class="form-group">
    <label for="email" style={{color: 'white'}}>Email address:</label>
    <input type="email" value={messagePost.email} class="form-control" onChange={handleChange} name='email' id="email" aria-describedby="emailHelp" placeholder="Enter Email" required/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
      <label for="phone" style={{color: 'white'}}>Phone Number:</label>
      <input type="text" value={messagePost.phone} class="form-control" onChange={handleChange} name='phone' id="phone" placeholder="Enter phone" required/>
    </div>
  <div class="form-group">
    <label style={{color: 'white'}} for="emailbody">What Do U Want to Say?</label>
    <textarea class="form-control" value={messagePost.mBody} onChange={handleChange} name='mBody' id="emailbody" rows="3" required></textarea>
  </div>
  <button style={{width: '30%'}} type="submit" class="btn btn-danger">Send</button>

</form>
<MyVerticallyCenteredModal
        show={modalShow}
        textStatu= 'Message Sent, We Will Contact U!'
        title= {messagePost.email}
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
export default ContactForm