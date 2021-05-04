import axios from 'axios'
import * as actionTypes from './types'; 
import { toast } from "react-toastify"; 

 
const signUpNewUser=userData=>dispatch=>{
  dispatch({type:actionTypes.CREATE_USER_SUBMITTED}); 

  axios.post('http://127.0.0.1:8000/api/users/' ,userData).then(res=>{
      console.log(userData)
      toast.success(
          'Account for '+userData.username+' created succefully'
      ); 
      dispatch({type:actionTypes.CREATE_USER_SUCCESS});

  }).catch(err=>{

    if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(JSON.stringify(err.response.data));
        dispatch({
          type: actionTypes.CREATE_USER_ERROR,
          errorData: err.response.data
        });
      } else if (err.message) {
        // the error message is available,
        // let's display it on error toast
        toast.error(JSON.stringify(err.message));
      } else {
        // strange error, just show it
        toast.error(JSON.stringify(err));
      }

  })
 










}






export default signUpNewUser












// export const authStart=()=>{
//     return{
//         type:actionTypes.AUTH_START
//     }
// } 

// export const authSuccess=token=>{
//     return{
//         type:actionTypes.AUTH_SUCCSESS,
//         token:token
//     }

// } 

// export const authFail=error=>{

//     return{
//         type:actionTypes.AUTH_FAIL,
//         error:error
//     }
// } 



// export const logout=()=>{
//     localStorage.removeItem('user');
//     localStorage.removeItem('expirationDate');
//     return {
//         type:actionTypes.AUTH_LOGOUT
//     }
// }

//  export const checkAuthTimeout=expirationTime=>{
//     return dispatch=>{
//         setTimeout(()=>{
//             dispatch(logout())
//         },expirationTime*1000)

//     }
// }

// export const authLogin=(username,password)=>{
//     return dispatch=>{
//         dispatch(authStart()) 
//         axios.post('http://127.0.0.1:8000/api/v1/token/login/',{
//             username:username,
//             password:password
//         }).then(res=>{
//             const token=res.data.key;
//             const expirationDate=new Date(new Date().getTime()+3600 *1000);
//             localStorage.setItem('token',token);
//             localStorage.setItem('expirationDate',expirationDate);
//             dispatch(authSuccess(token));
//             dispatch(checkAuthTimeout(3600));
//         }).catch(err=>{
//             dispatch(authFail(err))
//         })
        
//     }
// }

// export const authSignUp=(username,password,email,fullname,phone,address)=>{
//     return dispatch=>{
//         dispatch(authStart()) 
//         axios.post('http://127.0.0.1:8000/api/v1/token/login/',{
//             username:username,
//             email:email,
//             password:password,
//             fullname:fullname,
//             phone:phone,
//             address:address
//         }).then(res=>{
//             const token=res.data.key;
//             const expirationDate=new Date(new Date().getTime()+3600 *1000);
//             localStorage.setItem('token',token);
//             localStorage.setItem('expirationDate',expirationDate);
//             dispatch(authSuccess(token));
//             dispatch(checkAuthTimeout(3600));
//         }).catch(err=>{
//             dispatch(authFail(err));
//         })
        
//     } 

// }

// export const authCheckState=()=>{
//     return dispatch=>{ 
//         const token=localStorage.getItem('token');

//         if(token===undefined){
//              dispatch(logout());
//         }else{
//             const expirationDate=new Date(localStorage.getItem('expirationDate'));
//             if(expirationDate<=new Date()){
//                 dispatch(logout())
//             }else{
//                 dispatch(authSuccess(token));
//                 dispatch(checkAuthTimeout( (expirationDate-new Date().getTime()) /1000) )
//             }
//         }
       
//     }
// }