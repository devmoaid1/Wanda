import React from "react";
import { Route } from "react-router-dom";

import Home from './Views/home'
import CarsView from './Views/Cars/cars' 
import LoginForm from './Views/Login/login';
import SignUpForm from './Views/Sign up/signup'

const BaseRouter = () => (
    <div>

      <Route exact path="/" component={LoginForm} />
      <Route  path="/cars/" component={CarsView} />
      <Route  path="/home/" component={Home} />
      <Route  path="/login/" component={LoginForm} />
      <Route  path="/signup/" component={SignUpForm} />
    </div>
  );
  
  export default BaseRouter;
  