import React from "react";
import { Route  } from "react-router-dom";


import CarsView from './Views/Cars/cars' 
import LoginForm from './Views/Login/login';
import SignUpForm from './Views/Sign up/signup'
import CarDetail from './Views/Cars/car_detail'
import SelectDealership from './Views/select_dealership/select_dealership'
import BookingView from './Views/Booking/booking'
import BookingsListView from './Views/Booking/bookings_view'
import EditProfile from './Views/Edit_Profile/Edit_Profile'
import DashboardScreen from './Views/Admin/dashboard/dashboard'
import AdminProfile from './Views/Admin/Profile/Admin_profile'
import ManageBookings from './Views/Admin/Bookings/ManageBookings'
import ReportsView from './Views/Admin/Reports/ReportsView'
import BookingSummary from './Views/Booking/booking_summary'
import Checkout from './Views/Booking/Checkout'
import ReportDetailsView from './Views/Admin/Reports/ReportDetailsView'
const BaseRouter = () => (
    <div>
     
      <Route exact path="/" component={LoginForm} />
      <Route  path="/catalog/:carID" component={CarDetail} />
      <Route  path="/home/" component={CarsView} />
      <Route  path="/signup/" component={SignUpForm} />
      <Route  path="/select/:carID" component={SelectDealership} />
      <Route  path="/book/:carID/:dealerID" component={BookingView} />
      <Route  path="/bookingsummary/" component={BookingSummary} />
      <Route  path="/bookingslist/" component={BookingsListView} />
      <Route  path="/checkout/" component={Checkout} />
      <Route  path="/editprofile/" component={EditProfile} />
      <Route  path="/dashboard/" component={DashboardScreen} />
      <Route  path="/adminprofile/" component={AdminProfile} />
      <Route  path="/bookings/" component={ManageBookings} />
      <Route  path="/reports/" component={ReportsView} />
      <Route  path="/report/:reportID" component={ReportDetailsView} />
      
    </div>
  );
  
  export default BaseRouter;
  