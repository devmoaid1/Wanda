import axios from "axios";
import { toastOnError } from "../utilities";
import  { GET_DEALERSHIP,GET_CAR } from "./types"; 


export const getDealership=(dealerId,carId)=>dispatch=>{

    axios.get(`http://127.0.0.1:8000/api/dealerships/${dealerId}`).then(res=>{

         dispatch({
             type:GET_DEALERSHIP,
             payload:res.data
         }) 

         dispatch(getCar(carId))
    }).catch(err=>{
        toastOnError(err);
    })
}

export const getCar=(id)=>dispatch=>{
    
    axios.get(`/api/cars/${id}`).then(res=>{
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