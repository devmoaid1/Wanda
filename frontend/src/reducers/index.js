import {combineReducers} from 'redux'; 
import carsReducer from './carscars'
export default combineReducers({cars:carsReducer})