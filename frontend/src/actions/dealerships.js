import axios from "axios";
import { toastOnError } from "../utilities";
import  { GET_DEALERSHIPS,GET_CAR } from "./types"; 



export const getDealerships=(id)=>dispatch=>{

    axios.get('http://127.0.0.1:8000/api/dealerships/').then(res=>{
        dispatch(
            {
                type:GET_DEALERSHIPS,
                payload:res.data
            }
            );
            
            dispatch(getCar(id))
    }).catch(err=>{
        toastOnError(err);
    });
} 

export const getCar=(id)=>dispatch=>{
    
    axios.get(`http://127.0.0.1:8000/api/cars/${id}`).then(res=>{
      dispatch(
          {
              type:GET_CAR,
              payload:res.data
          }
      ); 
    }).catch(err=>{
        toastOnError(err);
    })
    
} 

