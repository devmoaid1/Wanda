import React from "react";
import { Route } from "react-router-dom";

import Home from './Views/home'
import CarsView from './Views/Cars/cars' 
import LoginForm from './Views/Login/login';

const BaseRouter = () => (
    <div>

      <Route exact path="/" component={LoginForm} />
      <Route  path="/cars/" component={CarsView} />
      <Route  path="/home/" component={Home} />
      <Route  path="/login/" component={LoginForm} />
    </div>
  );
  
  export default BaseRouter;
  