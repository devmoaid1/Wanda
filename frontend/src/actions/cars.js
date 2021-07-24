import axios from 'axios'

import GET_CARS from '../actions/types'
import {unsetLoading} from './login'

//get cars action
const getCars=()=>dispatch=>{
    
    axios
    .get("/api/cars/")
    .then(res =>{
        dispatch({
            type:GET_CARS,
            payload:res.data
        }); 

        dispatch(unsetLoading())
       
    }).catch(err=>console.log(err))}
export default getCars 
   