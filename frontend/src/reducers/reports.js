import {GET_REPORTS,SET_LOADING,UNSET_LOADING} from '../actions/types' 


const initialState={
    reports:[],
    loading:false
}


export const reportsReducer=(state=initialState,action)=>{

 switch(action.type){


    case GET_REPORTS:
         return {...state,reports:action.payload} 

    case SET_LOADING:
         return{...state,loading:action.payload}
            
    case UNSET_LOADING:
          return{...state,loading:action.payload}   

        default:
            return state






 }





}