import React,{useEffect,useState} from 'react'
import Sidebar from '../../Components/Sidebar'
import { useSelector,useDispatch} from 'react-redux'
import {getReports,deleteReport} from "../../../actions/reports"
import { Link } from 'react-router-dom'
import Loader from '../../Components/loader'
import ModalComponent from '../../Components/ModalComponent'
import Moment from 'react-moment';
import AddReport from './Add_report'
import ReportDetailsView from './ReportDetailsView'
function ReportsView() {

    const dispatch=useDispatch()
    const auth=useSelector((state)=>state.auth)
    const reportsState=useSelector((state)=>state.reports)
    const [modalShow, setModalShow] = useState(false);
    const [modalFormShow,setmodalFormShow]=useState(false)
    const[view,setView]=useState(false)
    const [action,setAction]= useState('')
    const[id,setId]=useState(0)
    const[reportObject,setReport]=useState({title:"",description:""})

     useEffect(()=>{
         dispatch(getReports());
        console.log(reportsState)


     },[]) 

    const onView=(report)=>{
        setReport(report)
        setView(true)
    }
     const onDelete=(id)=>{
         setId(id)
         setAction("Delete") 
         setModalShow(true)
     }

     const handleAction=()=>{
        if(action==="Delete"){
            setModalShow(false)
            dispatch(deleteReport(id))
       
    }
     }

     const renderReports=()=>{
         const reports =reportsState.reports 
          
         return reports.map((report)=>(
            <tbody key={report.id}>       
            <ModalComponent onAction={handleAction} id={id} action={action} show={modalShow} onHide={()=>setModalShow(false)}/>
            <ReportDetailsView show={view}  onHide={()=>setView(false)} report={reportObject} />
        <tr  class="bg-white text-medium font-body lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
            #RX2323{report.id}
        </td>

        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
            
            {report.title}            
            
        </td>
       
        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
            <Moment format="DD-MM-YYYY">
            {report.date}            
            </Moment>
        </td>
       
        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
            <a href="#" onClick={()=>onView(report)} class="text-blue-500 hover:text-blue-800 pl-6">View</a> 
            <a href="#" onClick={()=>onDelete(report.id)}  class="text-red-500 hover:text-red-700 pl-6">Delete</a>
            
        </td>
       </tr> 
       
    
    </tbody>

         ))
       
     }




    return (


        <>

        {
            reportsState.loading?
            <Loader/>:
        
        <div className="grid grid-cols-5">
             <Sidebar user={auth.user} page={"reports"}/>
            <div className=' flex flex-col space-y-20 py-10 px-10 col-span-4 h-screen'>
            <div>
               <h1 className="text-3xl font-semibold font-body "> Reports List </h1> 
            </div>


            
            <table class="table-auto border-collapse w-full  ">
              <thead>
                  <tr>
                      <th class="p-3 font-bold uppercase bg-gray-300 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                      <th class="p-3 font-bold uppercase bg-gray-300 text-gray-600 border border-gray-300 hidden lg:table-cell">Title</th>
                      <th class="p-3 font-bold uppercase bg-gray-300 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                      <th class="p-3 font-bold uppercase bg-gray-300 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                  </tr>
              </thead>
                  
           {renderReports()}
                  
          </table>
            <div><button onClick={()=>setmodalFormShow(true)} className="bg-red-500 hover:bg-red-400 text-white px-6 py-3 rounded">Add Report </button></div> 
            </div>
            <AddReport show={modalFormShow} onHide={()=>setmodalFormShow(false)} />
        </div> 
           }
        </>
    )
}
export default ReportsView
