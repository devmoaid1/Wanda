
import './App.css';
import 'antd/dist/antd.css'; 
import CarsView from './components/cars' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
  <Provider store={store}>
      <div className="App">
          <div class="jumbotron text-center">
            <h1>My First Bootstrap Page</h1>
             <p>Resize this responsive page to see the effect!</p> 
           </div>
          <CarsView/>
    </div>
  </Provider>
  );
}

export default App;
