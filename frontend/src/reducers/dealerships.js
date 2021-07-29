import {GET_DEALERSHIPS,GET_CAR,SET_LOADING,UNSET_LOADING} from '../actions/types'


const intialState={
    dealerships:[],
    car:{},
    loading:false
} 



const dealershipsReducer=(state=intialState,action)=>{ 

    switch(action.type){
        case GET_DEALERSHIPS:
            return{...state,dealerships:action.payload};
    
        case GET_CAR: 
           
            return{...state,car:action.payload};
    
        case SET_LOADING:
            return{...state,loading:action.payload}
                   
        case UNSET_LOADING:
            return{...state,loading:action.payload} 
       
 
         default:
             return state;
    
    
    
    
         }

} 

export default dealershipsReducer