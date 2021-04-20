import * as actionTypes from '../actions/types';
//import {updateObject} from '../utilities';

const initialState={
    token:null,
    error:null,
    loading:false
}

//  const authStart=(state,action)=>{
//     return updateObject(state,{
//          error:null,
//          loading:true
//     });
// }

//  const authSuccess=(state,action)=>{
//     return updateObject(state,{
//          token:action.token,
//          error:false,
//          loading:false
//     });
// } 


//  const authFail=(state,action)=>{
//     return updateObject(state,{
//         token:action.token,
//         error:false,
//         loading:false
//    });
// }


// const authLogout=(state,action)=>{
//     return updateObject(state,{
//         token:null,
        
//    });
// }

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.CREATE_USER_SUBMITTED:
        return {
          usernameError: "",
          passwordError: "",
          isSubimtted: true
        };
      case actionTypes.CREATE_USER_ERROR:
        const errorState = {
          usernameError: "",
          passwordError: "",
          isSubimtted: false
        };
        if (action.errorData.hasOwnProperty("username")) {
          errorState.usernameError = action.errorData["username"];
        }
        if (action.errorData.hasOwnProperty("password")) {
          errorState.passwordError = action.errorData["password"];
        }
        return errorState;
      case actionTypes.CREATE_USER_SUCCESS:
        return {
          usernameError: "",
          passwordError: "",
          isSubimtted: false
        };
      default:
        return state;
    }
  }

export default signupReducer;