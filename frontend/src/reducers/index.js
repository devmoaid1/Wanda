import {combineReducers} from 'redux'; 
import carsReducer from './cars' 
import authReducer from'./auth'
export default combineReducers({cars:carsReducer
    ,auth:authReducer
})