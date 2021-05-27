import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom' 
function DealerModal(props) {
    
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
            Are You Sure You want to Select This dealership?
          </h1>
        </Modal.Body>
        <Modal.Footer>
          <Link to={`/book/${props.car}/${props.dealer}`}><Button variant="success" >Yes</Button> </Link>
          <Button variant="danger" onClick={props.onHide}>No</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default DealerModal
