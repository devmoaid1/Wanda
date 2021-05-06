import {combineReducers} from 'redux'; 
import { connectRouter } from 'connected-react-router';
import carsReducer from './cars' 
import signUpReducer from'./signup'
import LoginReducer from './login'
import dealershipsReducer from './dealerships'
import bookingReducer from './booking'
import EditProfileReducer from './edit_profile'
const createRootReducer=history=>

    combineReducers({
        router:connectRouter(history),
        cars:carsReducer,
        createUser:signUpReducer,
        auth:LoginReducer,
        dealerships:dealershipsReducer,
        booking:bookingReducer,
        editProfile:EditProfileReducer

        
    })


export default createRootReducer