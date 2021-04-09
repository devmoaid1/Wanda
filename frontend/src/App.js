
import './App.css';
import 'antd/dist/antd.css'; 
import CarsView from './components/cars' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <div className="App">
      <div class="jumbotron text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
     </div>
      <CarsView/>
    </div>
  );
}

export default App;
