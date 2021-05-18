import axios from "axios";
import { toastOnError } from "../utilities";
import  { GET_DEALERSHIP,GET_CAR,MAKE_BOOKING,GET_BOOKINGS } from "./types"; 
import { toast } from "react-toastify"; 
import { push } from "connected-react-router";

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

export const makeBooking=(booking,user)=>dispatch=>{
    axios.post('/api/bookings/',booking).then(res=>{
        toast.success(
            'Booking for '+ user.username+' created succefully'
        ); 
        dispatch({type:MAKE_BOOKING})
        dispatch(push("/home"));
    }).catch(err=>{
        toastOnError(err);
    })
} 

export const getBookings=()=>dispatch=>{

   axios.get('/api/bookings/').then(res=>{
         
    dispatch({
        type:GET_BOOKINGS,
        payload:res.data
    })



   }).catch(err=>{
       toastOnError(err)
   })



}