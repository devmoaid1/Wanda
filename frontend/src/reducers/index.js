import {combineReducers} from 'redux'; 
import { connectRouter } from 'connected-react-router';
import carsReducer from './cars' 
import signUpReducer from'./signup'
import LoginReducer from './login'
 
const createRootReducer=history=>

    combineReducers({
        router:connectRouter(history),
        cars:carsReducer,
        createUser:signUpReducer,
        auth:LoginReducer
        
    })


export default createRootReducer