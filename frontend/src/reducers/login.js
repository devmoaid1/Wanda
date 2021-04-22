import * as actionTypes from '../actions/types'


const initialState={
    isAuthenticated:false,
    user:{},
    token:""
}






const LoginReducer=(state=initialState,action)=>{

   switch(action.types){
       case actionTypes.SET_TOKEN:
           return{...state,isAuthenticated:true,token:action.payload};
   
       case actionTypes.SET_CURRENT_USER:
           return{...state,user:action.payload};

       case actionTypes.UNSET_CURRENT_USER:
           return initialState; 

        default:
            return state;
   
   
   
   
        }

} 

export default LoginReducer