import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import {Provider} from 'react-redux'
import { createBrowserHistory } from "history"; 
import { routerMiddleware, ConnectedRouter } from "connected-react-router";




const Root = ({ children, initialState = {} }) => {
    const history = createBrowserHistory();
    const middleware = [thunk, routerMiddleware(history)];
  
    const store = createStore(
      rootReducer(history),
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    );
  
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </Provider>
    );
  };

//const middleware=[thunk]

//const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk)))
export default Root;

