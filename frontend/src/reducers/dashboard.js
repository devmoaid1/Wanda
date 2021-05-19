import {GET_DEALERSHIPS,GET_DEALERSHIP,GET_TOTAL_SALES,GET_DEALERS_SALES,SET_LOADING,UNSET_LOADING} from '../actions/types'


const intialState={
    dealerships:[],
    dealership:{},
    totalSales:0,
    sales:[],
    loading:false

} 



const dashboardReducer=(state=intialState,action)=>{ 

    switch(action.type){
        case GET_DEALERSHIPS:
            return{...state,dealerships:action.payload};
    
        case GET_DEALERSHIP: 
           
            return{...state,dealership:action.payload};
 
        case GET_TOTAL_SALES:
            return{...state,totalSales:action.payload};

        case GET_DEALERS_SALES:
            return{...state,sales:action.payload};   

        case SET_LOADING:
            return{...state,loading:action.payload}
                   
        case UNSET_LOADING:
            return{...state,loading:action.payload}   

         default:
             return state;
    
    
    
    
         }

} 

export default dashboardReducer