import  GET_CARS, { GET_DEALERSHIP,GET_CAR,MAKE_BOOKING,GET_BOOKINGS,SET_LOADING,UNSET_LOADING, GET_DEALERSHIPS,CONFIRM_BOOKING,CANCEL_BOOKING } from "../actions/types"; 


const initialState={
    loading:false,
    dealership:{},
    car:{},
    
    
} 


export const bookingReducer=(state=initialState,action)=>{ 

    switch(action.type){
        case GET_DEALERSHIP:
                return{...state,dealership:action.payload};
    
        case GET_CAR: 
           
                return{...state,car:action.payload};
        
        case MAKE_BOOKING:
                return {...state} 
        
         

        case SET_LOADING:
                return{...state,loading:action.payload}
                
        case UNSET_LOADING:
                return{...state,loading:action.payload}   
       
 
         default:
             return state;
    
    
    
    
         }

} 


const bookingsState={ 
    loading:false,
    bookings:[],
    cars:[],
    dealerships:[]
} 


export const manageBookingsReducer=(state=bookingsState,action)=>{
    switch(action.type){

        case GET_DEALERSHIPS:
            return{...state,dealerships:action.payload};
    
        case GET_CARS: 
           
            return{...state,cars:action.payload};
        
        
         case GET_BOOKINGS:
             return {...state,bookings:action.payload} 
          
        case CONFIRM_BOOKING:
            const updatedBookings = state.bookings.map(item => {
                if (item.id === action.payload.id) {
                  return { ...item, ...action.payload };
                }
                return item;
              });
            return{...state,bookings:updatedBookings}   
            case CANCEL_BOOKING:
                const canceledBookings = state.bookings.map(item => {
                    if (item.id === action.payload.id) {
                      return { ...item, ...action.payload };
                    }
                    return item;
                  });
                return{...state,bookings:canceledBookings}   

        case SET_LOADING:
             return{...state,loading:action.payload}
                
        case UNSET_LOADING:
             return{...state,loading:action.payload}   
       
 
         default:
             return state;
    
    
    
    
         }


}

