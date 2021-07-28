import React,{useEffect} from 'react'
import Sidebar from '../../Components/Sidebar'
import Loader from '../../Components/loader'
import { useSelector,useDispatch} from 'react-redux'
import {getReport} from '../../../actions/reports'
import {Modal,Button} from 'react-bootstrap'
function ReportDetailsView(props){ 
    
    
    const reportState=useSelector((state)=>state.reports)
   
    const dispatch=useDispatch()

    
    const {report}=props
    useEffect(()=>{
        
    },[])
  
    return (

        <>

        {
          reportState.loading?
          <Loader/>:
          <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {report.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <div className="w-full h-full py-4 ">
               <p className="text-md font-light text-justify">{report.description}</p>
           </div>
           
          </Modal.Body>
          <Modal.Footer>
           
            <Button variant="danger" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
}
      </>
    )
}

export default ReportDetailsView
