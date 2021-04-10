import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Store from './store'
import {Provider} from 'react-redux'


const app=(
  <Provider store={Store}>
    <App/>
  </Provider>

)

ReactDOM.render(app, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
