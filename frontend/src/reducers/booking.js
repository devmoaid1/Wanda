import  { GET_DEALERSHIP,GET_CAR,MAKE_BOOKING } from "../actions/types"; 


const initialState={
    dealership:{},
    car:{}
} 


const bookingReducer=(state=initialState,action)=>{ 

    switch(action.type){
        case GET_DEALERSHIP:
            return{...state,dealership:action.payload};
    
        case GET_CAR: 
           
        return{...state,car:action.payload};
        
        case MAKE_BOOKING:
         return {...state}
       
 
         default:
             return state;
    
    
    
    
         }

} 

export default bookingReducer