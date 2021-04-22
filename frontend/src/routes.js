import React from "react";
import { Route } from "react-router-dom";


import CarsView from './Views/Cars/cars' 
import LoginForm from './Views/Login/login';
import SignUpForm from './Views/Sign up/signup'
import CarDetail from './Views/Cars/car_detail'
import requireAuth from './Authenticated'
const BaseRouter = () => (
    <div>

      <Route exact path="/" component={LoginForm} />
      <Route  path="/catalog/:carID" component={requireAuth(CarDetail)} />
      <Route  path="/home/" component={requireAuth(CarsView)} />
      
      <Route  path="/signup/" component={SignUpForm} />
    </div>
  );
  
  export default BaseRouter;
  