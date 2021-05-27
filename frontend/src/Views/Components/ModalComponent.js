import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
function ModalComponent(props) {
    
    const dispatch=useDispatch()
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirmation Massage
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <h1>
            Are You Sure You want to {props.action}{props.dealer}?
          </h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.onAction}>Yes</Button>
          <Button variant="danger" onClick={props.onHide}>No</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default ModalComponent
