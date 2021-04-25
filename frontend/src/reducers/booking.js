import  { GET_DEALERSHIP,GET_CAR } from "../actions/types"; 


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
 
       
 
         default:
             return state;
    
    
    
    
         }

} 

export default bookingReducer