// import axios from 'axios'
// import { setAxiosAuthToken, toastOnError } from "../utilities"; 
// import { push } from "connected-react-router";
// import { toast } from "react-toastify"; 
// import {EDIT_PROFILE,GET_CUSTOMER} from "./types"

// export const updateProfile=(data)=>dispatch=>{

//   axios.patch('http://127.0.0.1:8000/api/users/me/',data,{headers:{'content-Type':'multipart/form-data'}}).then(res=>{
    
//     dispatch({
//         type:EDIT_PROFILE,
//         payload:res.data
//     })
//     toast.success("Profile edited successfully")
//     dispatch(push("/home/"))
//     // dispatch(getCustomer())
//   }).catch(err=>{
//       toastOnError(err)
//   })

// } 


// export const getCustomer=()=>dispatch=>{

//     axios.get("api/users/me/").then(res=>{
//         const user={
//             username:res.data.username,
//             email:res.data.email,
//             name:res.data.name,
//             phone:res.data.phone,
//             address:res.data.address,
//             pic:res.data.pic
//         }; 
//         dispatch({
//             type:GET_CUSTOMER,
//             payload:user
//         }) 
//     }).catch(err=>{
//         toastOnError(err)
//     })

// }