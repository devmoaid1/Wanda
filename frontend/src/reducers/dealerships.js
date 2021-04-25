import {GET_DEALERSHIPS,GET_CAR} from '../actions/types'


const intialState={
    dealerships:[],
    car:{}
} 



const dealershipsReducer=(state=intialState,action)=>{ 

    switch(action.type){
        case GET_DEALERSHIPS:
            return{...state,dealerships:action.payload};
    
        case GET_CAR: 
           
        return{...state,car:action.payload};
 
       
 
         default:
             return state;
    
    
    
    
         }

} 

export default dealershipsReducer