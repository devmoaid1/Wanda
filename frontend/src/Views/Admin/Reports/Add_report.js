import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {addReport} from '../../../actions/reports'
function AddReport(props) {
    
    const dispatch=useDispatch()
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
   
   
    const handleAdd=(e)=>{
        e.preventDefault()
        props.onHide()
        let formData=new FormData() 
        
        formData.set('title',title)
        formData.set('description',content)
        dispatch(addReport(formData))
    }
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Report
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="flex flex-col space-y-10">
            
             <div>
                 <form>
          <div>

       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
         title
       </label>
       <input  onChange={(e)=>setTitle(e.target.value)} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="title" type="text" placeholder="title"/>
      
          </div>

          <div>

       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="content">
         Content
       </label>
       <input  onChange={(e)=>setContent(e.target.value)} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="content" type="text" placeholder="content"/>
      
          </div>

                 </form>
             </div>
         </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleAdd}>Yes</Button>
          <Button variant="danger" onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default AddReport
