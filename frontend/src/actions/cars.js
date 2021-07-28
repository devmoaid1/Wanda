import axios from 'axios'

import GET_CARS ,{GET_CAR}from '../actions/types'
import {unsetLoading,setLoading} from './login'

//get cars action
const  getCars=()=>dispatch=>{
    
    axios
    .get("/api/cars/")
    .then(res =>{
        dispatch({
            type:GET_CARS,
            payload:res.data
        }); 

        dispatch(unsetLoading())
       
    }).catch(err=>console.log(err))}


export const getCarById=id=>dispatch=>{
    dispatch(setLoading())
    axios.get(`/api/cars/${id}`).then(res=>{
        dispatch({
            type:GET_CAR,
            payload:res.data
        })
    }).catch(err=>{
        console.log(err)
    });
}

export default getCars 
   
