import axios from "axios";
import { toastOnError } from "../utilities";
import {GET_REPORTS} from "./types"
import {setLoading,unsetLoading} from './login' 


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