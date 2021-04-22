import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import {Provider} from 'react-redux'
import { createBrowserHistory } from "history"; 
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import {isEmpty} from './utilities';
import {setCurrentUser,setToken} from './actions/login'




const Root = ({ children, initialState = {} }) => {
    const history = createBrowserHistory();
    const middleware = [thunk, routerMiddleware(history)];
  
    const store = createStore(
      rootReducer(history),
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    ); 

    if (!isEmpty(localStorage.getItem("token"))) {
      store.dispatch(setToken(localStorage.getItem("token")));
    }
    if (!isEmpty(localStorage.getItem("user"))) {
      const user = JSON.parse(localStorage.getItem("user"));
      store.dispatch(setCurrentUser(user, ""));
    }
  
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </Provider>
    );
  };

//const middleware=[thunk]

//const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk)))
export default Root;

