
import './App.css';
import 'antd/dist/antd.css'; 

import 'bootstrap/dist/css/bootstrap.min.css'; 
//import {Provider} from 'react-redux'
//import store from './store'
import {BrowserRouter} from 'react-router-dom';
import BaseRouter from './routes'
import NavBarComponent from './components/navbar'
function App() {
  return (
  
      <div className="App"> 
         <BrowserRouter>
         <NavBarComponent/>
         <BaseRouter/>
         </BrowserRouter>
    </div>

  );
}

export default App;
