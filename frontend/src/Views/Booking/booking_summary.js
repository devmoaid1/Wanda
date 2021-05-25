import React,{useEffect} from 'react'
import { useLocation } from 'react-router'
import { useSelector,useDispatch} from 'react-redux'
import {logout} from '../../actions/login'
import {getDealership} from '../../actions/booking'
import NavBarComponent from '../Components/navbar'
import Footer from "../Components/footer"
import Moment from 'react-moment';
function BookingSummary() { 
    const dispatch=useDispatch()
    const auth=useSelector((state)=>state.auth)
    const booking=useSelector((state)=>state.booking)
    const location=useLocation()
    const data=location.state
    useEffect(()=>{
        const car=data.car
        const dealer= data.dealership
        dispatch(getDealership(car,dealer))
        console.log(data)
        console.log(booking)
    },[])
    return (
        <div className="h-screen bg-gray-100"> 
            <header>
                <NavBarComponent user={auth} />
            </header>
            <div className="w-full flex flex-col h-5/6 px-10 py-10">
               <div>
                     <h1 className="text-3xl text-center font-semibold">Booking Summary</h1> 
               </div> 

               <div className="flex flex-row divide-x-2 divide-gray-200 rounded overflow-hidden w-2/3 h-1/2 shadow-lg  mx-auto mt-10">
                   <div className="h-full w-2/3"> 
                   <img className="h-full w-full" src={booking.car.picture} alt="car"></img>
                   </div> 

                   <div className=" flex flex-col space-y-6  p-6 w-2/3 bg-white ">
                       <div className="flex flex-col divide-y-2 divide-gray-400 divide-dashed space-y-6">
                       <div className="flex flex-row justify-between ">
                         <p className="text-lg font-normal">SubTotal :</p>
                         <p className="text-lg font-medium">{booking.car.price} EGP</p>
                       </div>
                       <div className="flex h-1/3 mt-3 flex-row justify-between ">
                         <p className="text-lg font-normal">Date and time :</p>
                         <Moment  className="text-lg font-medium" format="DD-MM-YYYY HH:mm">
                          {data.date}            
                       </Moment>
                       </div>
                       <div className="flex h-1/3 mt-3 flex-row justify-between ">
                         <p className="text-lg font-normal">Car Name :</p>
                         <p className="text-lg font-medium">{booking.car.name}</p>
                       </div>
                       <div className="flex h-1/3 mt-3 flex-row justify-between ">
                         <p className="text-lg font-normal">DealerShip Name :</p>
                         <p className="text-lg font-medium">{booking.dealership.name}</p>
                       </div>
                       </div>
                       <div className="flex h-1/5 mt-3 flex-row justify-between ">
                         <p className="hidden">Checkout</p>
                         <button className="bg-red-500 hover:bg-red-400 text-white py-2 px-6 rounded">Checkout</button>
                       </div>
                   </div> 
                   
               </div>
            </div>
            <footer>
               <Footer/>
            </footer>
        </div>
    )
}

export default BookingSummary
