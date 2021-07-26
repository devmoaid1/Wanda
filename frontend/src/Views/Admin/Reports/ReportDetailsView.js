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
            <Sidebar user={auth.user} page={"reports"}/>
            </div>

            <div className="col-span-4"> 
            <div className="flex flex-col p-4">
           
            <h1 className="text-2xl font-bold"> {report.title}</h1>
            <h1 className="text-2xl font-Semibold">{report.description}</h1>

            </div>
            
            </div>
        </div>
}
      </>
    )
}

export default ReportDetailsView
