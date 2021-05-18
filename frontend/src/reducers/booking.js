import  { GET_DEALERSHIP,GET_CAR,MAKE_BOOKING,GET_BOOKINGS } from "../actions/types"; 


const initialState={
    dealership:{},
    car:{},
    bookings:[]
} 


const bookingReducer=(state=initialState,action)=>{ 

    switch(action.type){
        case GET_DEALERSHIP:
            return{...state,dealership:action.payload};
    
        case GET_CAR: 
           
        return{...state,car:action.payload};
        
        case MAKE_BOOKING:
         return {...state} 
        
         case GET_BOOKINGS:
            return {...state,bookings:action.payload}
       
 
         default:
             return state;
    
    
    
    
         }

} 

export default bookingReducer