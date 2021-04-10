import React from "react";
import { Route } from "react-router-dom";

import Home from './components/home'
import CarsView from './components/cars'

const BaseRouter = () => (
    <div>

      <Route exact path="/" component={Home} />
      <Route exact path="/cars/" component={CarsView} />
      
    </div>
  );
  
  export default BaseRouter;
  