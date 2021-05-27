import GET_CARS ,{SET_LOADING,UNSET_LOADING} from '../actions/types';


const initialState={
    cars:[],
    loading:true
}


 function carsReducer(state=initialState,action){
    switch(action.type){
        case GET_CARS:
            return{...state,cars:action.payload};
    

        case SET_LOADING:
            return{...state,loading:action.payload}
                   
        case UNSET_LOADING:
            return{...state,loading:action.payload}   

         default:
             return state;
    
    
    
    
         }
}
export default carsReducer;
   
   



