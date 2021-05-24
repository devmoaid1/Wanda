import React,{useEffect} from 'react'
import { useLocation } from 'react-router'
import { useSelector,useDispatch} from 'react-redux'
import {logout} from '../../actions/login'
import {getDealership} from '../../actions/booking'
import NavBarComponent from '../Components/navbar'
import Footer from "../Components/footer"
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
        <div> 
            <header>
                <NavBarComponent user={auth} />
            </header>
            <div className="w-screen h-screen">
               <div className="h-68">
                     <h1 className="text-2xl ml-10">Booking Summary</h1> 
               </div> 

               <div className="flex flex-row rounded overflow-hidden w-3/4 h-1/4 shadow-lg mx-auto mt-20">
                   <div className="h-full w-1/3"> 
                   <img src={booking.car.picture}></img>
                   </div> 

                   <div className="w-2/3 bg-red-300"></div>
               </div>
            </div>
            <footer>
               <Footer/>
            </footer>
        </div>
    )
}

export default BookingSummary
