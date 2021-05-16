import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
import "react-toastify/dist/ReactToastify.css";
// import Store from './store'
// import {Provider} from 'react-redux'
import './style/main.css' 
import { library } from '@fortawesome/fontawesome-svg-core'

import { faCheckSquare, faCoffee,faStore,faDollarSign } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee,faStore,faDollarSign)


const app=(
  <div>
    <App/>
  </div>

)

ReactDOM.render(app, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
