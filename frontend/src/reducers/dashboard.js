import {GET_DEALERSHIPS,GET_DEALERSHIP} from '../actions/types'


const intialState={
    dealerships:[],
    dealership:{}
} 



const dashboardReducer=(state=intialState,action)=>{ 

    switch(action.type){
        case GET_DEALERSHIPS:
            return{...state,dealerships:action.payload};
    
        case GET_DEALERSHIP: 
           
        return{...state,dealership:action.payload};
 
       
 
         default:
             return state;
    
    
    
    
         }

} 

export default dashboardReducer