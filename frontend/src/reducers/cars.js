import{GET_CARS} from './actions/types.js'


const initialState={
    cars:[]
}


 function carsReducer(state=initialState,action){
   if(action.type===GET_CARS){
       return{...state,cars:action.payload}
   }
   else 
   return state;
}
export default carsReducer;
   
   



