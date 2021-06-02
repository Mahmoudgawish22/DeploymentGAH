import React from 'react';
import Modal from 'react-bootstrap/Modal'
import '../modals/loadingmodal.css'

function LoadingModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Please Wait..
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="spinner-boxh">
          <div class="configure-border-1h">  
          <div class="configure-coreh"></div>
          </div>  
          <div class="configure-border-2h">
          <div class="configure-coreh"></div>
          </div> 
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  export default LoadingModal;