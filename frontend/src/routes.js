import React from "react";
import { Route  } from "react-router-dom";


import CarsView from './Views/Cars/cars' 
import LoginForm from './Views/Login/login';
import SignUpForm from './Views/Sign up/signup'
import CarDetail from './Views/Cars/car_detail'
import SelectDealership from './Views/select_dealership/select_dealership'

const BaseRouter = () => (
    <div>
     
      <Route exact path="/" component={LoginForm} />
      <Route  path="/catalog/:carID" component={CarDetail} />
      <Route  path="/home/" component={CarsView} />
      <Route  path="/signup/" component={SignUpForm} />
      <Route  path="/select/:carID" component={SelectDealership} />
      
    </div>
  );
  
  export default BaseRouter;
  