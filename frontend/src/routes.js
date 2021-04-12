import React from "react";
import { Route } from "react-router-dom";

import Home from './components/home'
import CarsView from './components/cars' 
import LoginForm from './components/login';

const BaseRouter = () => (
    <div>

      <Route exact path="/" component={Home} />
      <Route exact path="/cars/" component={CarsView} />
      <Route exact path="/login/" component={LoginForm} />
    </div>
  );
  
  export default BaseRouter;
  