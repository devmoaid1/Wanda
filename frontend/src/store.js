import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import {composeWithDevtools} from 'redux-devtools-extension'



const initialState={}


const middleware=[thunk]

const store=createStore(initialState,rootReducer,composeWithDevtools(applyMiddleware(...middleware))) 


export default store