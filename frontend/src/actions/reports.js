import axios from "axios";
import { toastOnError } from "../utilities";
import {GET_REPORTS,DELETE_REPORT,ADD_REPORT,GET_REPORT} from "./types"
import {setLoading,unsetLoading} from './login' 
import { toast } from "react-toastify";

//reports model actions


// get reports List
export const getReports=()=>dispatch=>{
    dispatch(setLoading())

    axios.get("/api/reports/").then(res=>{
      dispatch({
          type:GET_REPORTS,
          payload:res.data
      })

      dispatch(unsetLoading())

    }).catch(err=>{
        toastOnError(err)
    })
} 

//get single report by ID
export const getReport=(id)=>dispatch=>{
    dispatch(setLoading())

    axios.get(`/api/reports/${id}`).then(res=>{
      dispatch({
          type:GET_REPORT,
          payload:res.data
      })

      dispatch(unsetLoading())

    }).catch(err=>{
        toastOnError(err)
    })
} 

//adding a report 
export const addReport=(data)=>dispatch=>{
     dispatch(setLoading())
    axios.post("/api/reports/",data).then(res=>{
      
        dispatch({
            type:ADD_REPORT,
            payload:res.data
        })
        
        dispatch(unsetLoading())
        toast.success("report created successfully")
    })

}


//delete report 
export const deleteReport=id=>dispatch=>{
  dispatch(setLoading())
  axios.delete(`/api/reports/${id}`).then(res=>{

       dispatch({
           type:DELETE_REPORT,
           payload:id
       }) 
       dispatch(unsetLoading())
       toast.success("report deleted successfully")

  }).catch(err=>{
      toastOnError(err)
  })



}