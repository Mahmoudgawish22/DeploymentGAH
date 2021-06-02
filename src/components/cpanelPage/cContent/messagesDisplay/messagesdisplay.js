import '../messagesDisplay/messagesdisplay.css'
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import logo from '../../../../imgs/193171559_169250608475072_5253348756644639465_n.png'
import { useDispatch } from 'react-redux'
import { deleteMessage } from '../../../../actions/messages.js'
import MyVerticallyCenteredModalForDeleting from '../../forms/modals/deletemodal.js'
import { useHistory } from 'react-router-dom'
import LoadingModal from '../../forms/modals/loadingmodal.js'


function MessageDisplay(props) {
    const history = useHistory();
    const messages = useSelector((state) => state.messageReducer);
    const dispatch = useDispatch();
    const [modalShowD, setModalShowD] = useState(false);
    const [loadingModalShow, setLoadingModalShow] = useState(false);
    const [review, setReview] = useState('Nothing To Add, Sir!');
    const [idString, setIdString] = useState('');
    const dispatchFunc = () => {
        setModalShowD(false);
        setLoadingModalShow(true);
        dispatch(deleteMessage(idString, setModalShowD, history, setLoadingModalShow));
      }
    const handleClick = (id) => {
        setIdString(id);
        setReview('Are U Sure?');
        setModalShowD(true);
    }
    return (
        <div id='messagesdisplay'>
            <div id='navCpanel'>
            <img id='logoCpanel' src={logo} alt='Logo'/>
            <label style={{color: 'white', fontFamily: "Poppins"}}>Messages</label>
            </div>
            {
          !messages.length? 
          <div class="spinner-box">
          <div class="configure-border-1">  
          <div class="configure-core"></div>
          </div>  
          <div class="configure-border-2">
          <div class="configure-core"></div>
          </div> 
          </div>
          : <ul className='messagespost container-fluid'>
          {messages.slice(0).reverse().map(item=> <li key={item._id} className='messagelink container-fluid'>
              <a className='itemlinkMS'>
                  <div style={{display: 'flex', flexDirection:'column',alignSelf:'flex-start', justifyContent:'flex-start', gap:'1px'}}>
                  <label style={{textAlign:'left'}}>From: {item.email}</label>
                  <label style={{textAlign:'left'}}>Phone: {item.phone}</label>
                  <p style={{textAlign:'left'}}>Message: {item.mBody}</p>
                  <p style={{textAlign:'left'}}>Date: {item.time}</p>
                  </div>
                  <button onClick={()=>handleClick(item._id)} className="btn btn-danger">Delete</button>
              </a>
          </li>)}
      </ul>}
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
export default MessageDisplay