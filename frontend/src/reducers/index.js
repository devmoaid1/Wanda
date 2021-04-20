import {combineReducers} from 'redux'; 
import { connectRouter } from 'connected-react-router';
import carsReducer from './cars' 
import signUpReducer from'./signup'
 
const createRootReducer=history=>

    combineReducers({
        router:connectRouter(history),
        cars:carsReducer,
        createUser:signUpReducer
        
    })


export default createRootReducer