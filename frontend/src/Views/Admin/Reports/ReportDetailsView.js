import React,{useEffect} from 'react'
import Sidebar from '../../Components/Sidebar'
import Loader from '../../Components/loader'
import { useSelector,useDispatch} from 'react-redux'
import {getReport} from '../../../actions/reports'
function ReportDetailsView(props){ 
    
    const auth=useSelector((state)=>state.auth)
    const reportState=useSelector((state)=>state.reports)
    const report=reportState.report 
    const dispatch=useDispatch()

    
    useEffect(()=>{
        const reportID=props.match.params.reportID
        dispatch(getReport(reportID)) 
        console.log(reportState)

    },[])

    return (

        <>

        {
          reportState.loading?
          <Loader/>:
        <div className="grid grid-cols-5 ">
            <div className="h-screen">

            <Sidebar user={auth.user}/>
            </div>
            <div className="col-span-4"> 

            <h1> this  report details page</h1>
            <h1> {report.title}</h1>
            <h1>{report.content}</h1>
            
            </div>
        </div>
}
      </>
    )
}

export default ReportDetailsView
