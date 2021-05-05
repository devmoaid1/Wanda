import axios from 'axios'
import { setAxiosAuthToken, toastOnError } from "../utilities"; 
import { push } from "connected-react-router";
import { toast } from "react-toastify"; 
import * as actionTypes from '../actions/types' 

export const login=(userData,redirectTo)=>dispatch=>{
  
    axios.post('api/token/login/',userData).then(res=>{
        const {auth_token}=res.data; 
        setAxiosAuthToken(auth_token);
        dispatch(setToken(auth_token));
        dispatch(getCurrentUser(redirectTo));
    }).catch(err=>{
      dispatch(unsetCurrentUser());
      toastOnError(JSON.stringify(err));
    });
        
} 


export const getCurrentUser=redirectTo=>dispatch=>{

  axios.get("api/users/me/").then(res=>{
     const user={
         username:res.data.username,
         email:res.data.email,
         name:res.data.name,
         phone:res.data.phone,
         address:res.data.address,
         pic:res.data.pic
     }; 

     dispatch(setCurrentUser(user,redirectTo));

  }).catch(err=>{

    dispatch(unsetCurrentUser());
    toastOnError(err);
  });

}



export const setCurrentUser=(user,redirectTo)=>dispatch=>{
    localStorage.setItem("user",JSON.stringify(user));
    dispatch({
        type:actionTypes.SET_CURRENT_USER,
        payload:user
    });

    console.log("set user" + redirectTo);
  if (redirectTo !== "") {
    dispatch(push(redirectTo));
  }
}


export const setToken=token=>dispatch=>{

    setAxiosAuthToken(token); 
    localStorage.setItem('token',token); 
    dispatch({
        type: actionTypes.SET_TOKEN,
        payload: token
      });
}

export const unsetCurrentUser=()=>dispatch=>{
    setAxiosAuthToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({

       type:actionTypes.UNSET_CURRENT_USER

    })
} 


export const logout=()=>dispatch=>{
    axios
    .post("/api/token/logout/")
    .then(response => {
      dispatch(unsetCurrentUser());
      dispatch(push("/"));
      toast.success("Logout successful.");
    })
    .catch(error => {
      dispatch(unsetCurrentUser());
      toastOnError(error);
    });
}