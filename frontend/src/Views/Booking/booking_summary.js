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
        <div className="w-screen h-screen bg-gray-100"> 
            <header>
                <NavBarComponent user={auth} />
            </header>
            <div className="w-full h-5/6 px-10 py-10">
               <div className="h-68">
                     <h1 className="text-2xl ml-10">Booking Summary</h1> 
               </div> 

               <div className="flex flex-row divide-x-2 divide-gray-200 rounded overflow-hidden w-3/4 h-1/2 shadow-lg mx-auto mt-20">
                   <div className="h-full w-1/3"> 
                   <img className="h-full" src={booking.car.picture} alt="car"></img>
                   </div> 

                   <div className=" flex flex-col space-y-6 divide-y-2 divide-gray-400 divide-dashed p-6 w-2/3 bg-white ">
                       <div className="flex flex-row justify-between ">
                         <p>SubTotal</p>
                         <p>{booking.car.price} EGP</p>
                       </div>
                       <div className="flex h-1/4 mt-3 flex-row justify-between ">
                         <p>Date and time</p>
                         <Moment format="DD-MM-YYYY HH:mm">
                          {data.date}            
                       </Moment>
                       </div>
                       <div className="flex h-1/4 mt-3 flex-row justify-between ">
                         <p>Car Name</p>
                         <p>{booking.car.name}</p>
                       </div>
                       <div className="flex h-1/4 mt-3 flex-row justify-between ">
                         <p>DealerShip Name</p>
                         <p>{booking.dealership.name}</p>
                       </div>

                       <div className="flex h-1/4 mt-3 flex-row justify-between ">
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
