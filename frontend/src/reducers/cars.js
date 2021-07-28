import GET_CARS ,{GET_CAR,SET_LOADING,UNSET_LOADING} from '../actions/types';


const initialState={
    cars:[],
    car:{},
    loading:true
}


 function carsReducer(state=initialState,action){
    switch(action.type){
        case GET_CARS:
            return{...state,cars:action.payload};

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
export default carsReducer;
   
   



