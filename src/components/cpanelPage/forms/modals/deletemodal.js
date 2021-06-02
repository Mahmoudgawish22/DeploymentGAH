import '../modals/deletemodal.css'
import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModalForDeleting(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{textAlign: 'center'}}>{props.textStatu}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>Cancel</Button>
          <Button variant="secondary" onClick={props.dispatch}>Yes, I am Sure</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default MyVerticallyCenteredModalForDeleting;