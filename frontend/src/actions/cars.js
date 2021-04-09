import axios from 'axios'

import GET_CARS from '../actions/types'


//get cars action
const getCars=()=>dispatch=>{

    axios
    .get("/api/cars/")
    .then(res =>{
        dispatch({
            type:GET_CARS,
            payload:res.data
        });
       
    }).catch(err=>console.log(err))}
export default getCars 
   