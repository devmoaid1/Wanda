import {GET_REPORTS,DELETE_REPORT,ADD_REPORT,SET_LOADING,UNSET_LOADING,GET_REPORT} from '../actions/types' 


const initialState={
    reports:[],
    report:{},
    loading:false
}


export const reportsReducer=(state=initialState,action)=>{

 switch(action.type){


    case GET_REPORTS:
         return {...state,reports:action.payload}

    case GET_REPORT:
          return {...state,report:action.payload}    

    case DELETE_REPORT:
     return {
          ...state,
          reports: state.reports.filter((item, index) => item.id !== action.payload)
        }; 
     
    case ADD_REPORT:
     return {
          ...state,
          reports: [...state.reports, action.payload]
        };
    case SET_LOADING:
         return{...state,loading:action.payload}
            
    case UNSET_LOADING:
          return{...state,loading:action.payload}   

        default:
            return state

 }





}