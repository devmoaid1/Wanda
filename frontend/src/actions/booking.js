import axios from "axios";
import { toastOnError } from "../utilities";
import { GET_DEALERSHIP,GET_CAR,MAKE_BOOKING,GET_BOOKINGS,GET_DEALERSHIPS,CONFIRM_BOOKING,CANCEL_BOOKING} from "./types"; 
import { toast } from "react-toastify"; 
import { push } from "connected-react-router";
import {setLoading,unsetLoading} from "./login"  
import getCars from './cars'


//get dealer by id 
export const getDealership=(dealerId,carId)=>dispatch=>{
    dispatch(setLoading()) //set loading to true before fetching data
    axios.get(`http://127.0.0.1:8000/api/dealerships/${dealerId}`).then(res=>{

         dispatch({
             type:GET_DEALERSHIP,
             payload:res.data
         }) 

         dispatch(getCar(carId))
         dispatch(unsetLoading()) //set loading to false once finishing fetching data
    }).catch(err=>{
        toastOnError(err);
    })
}

//get car by Id
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

// make a booking
export const makeBooking=(booking)=>dispatch=>{
    dispatch(setLoading())
    axios.post('/api/bookings/',booking).then(res=>{
        toast.success(
            ' Payment was successfull and Booking created succefully'
        ); 
        dispatch({type:MAKE_BOOKING})
        dispatch(unsetLoading()) 
        dispatch(push("/home"));
    }).catch(err=>{
        toastOnError(err);
    })
} 

//get list of bookings
export const getBookings=()=>dispatch=>{
    dispatch(setLoading())
   axios.get('/api/bookings/').then(res=>{
         
    dispatch({
        type:GET_BOOKINGS,
        payload:res.data
    })

     dispatch(getCars())
     dispatch(getDealershipsList())
     

   }).catch(err=>{
       toastOnError(err)
   })



} 

export const getDealershipsList=()=>dispatch=>{
    
    axios.get('http://127.0.0.1:8000/api/dealerships/').then(res=>{
        dispatch(
            {
                type:GET_DEALERSHIPS,
                payload:res.data
            }
            );
            
            dispatch(unsetLoading()) 
    }).catch(err=>{
        toastOnError(err);
    });
}  

export const getBookingDetails=(carsList,dealersList,car,dealer)=>{
     let bCar={}
     let bDealer={}

      carsList.map((item)=>( 
          item.id===car?
          bCar=item:null    

      )
      )

      dealersList.map((item)=>( 
        item.id===dealer?
        bDealer=item:null    

    )
    )
    return [bCar.name,bDealer.name]



}

export const approveBooking=(id)=>dispatch=>{ 
    let data={status:"active"}
    dispatch(setLoading())
    axios.patch(`/api/bookings/${id}/`,data).then(res=>{
    
        dispatch({
            type:CONFIRM_BOOKING,
            payload:res.data
        })
         
        console.log(res.data)
       
        toast.success("Booking Approved Succefully")
        dispatch(unsetLoading())
        
        
      }).catch(err=>{
          toastOnError(err)
      })    
} 

export const cancelBooking=(id)=>dispatch=>{ 
    let data={status:"denied"}
    dispatch(setLoading())
    axios.patch(`/api/bookings/${id}/`,data).then(res=>{
    
        dispatch({
            type:CANCEL_BOOKING,
            payload:res.data
        })
         
        console.log(res.data)
       
        toast.success("Booking Cancled Succefully")
        dispatch(unsetLoading())
        
        
      }).catch(err=>{
          toastOnError(err)
      })    
}