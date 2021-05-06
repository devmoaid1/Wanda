import * as actionTypes from '../actions/types'


const initialState={
   
    user:{},
    
}






const EditProfileReducer=(state=initialState,action)=>{

   switch(action.type){
      
   
       case actionTypes.GET_CUSTOMER:
           return{...state,user:action.payload};

       case actionTypes.EDIT_PROFILE:
           return {...state}; 

        default:
            return state;
   
   
   
   
        }

} 

export default EditProfileReducer