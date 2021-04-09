import {combineReducers} from 'redux'; 
import carsReducer from './cars'
export default combineReducers({cars:carsReducer})