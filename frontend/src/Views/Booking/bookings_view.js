import React ,{useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {getBookings,getBookingDetails} from '../../actions/booking'
import NavBarComponent from "../Components/navbar"
import Footer from '../Components/footer'
import Moment from 'react-moment'
import Loader from '../Components/loader'
function BookingsListView(){ 
    
    const dispatch=useDispatch()
    const auth=useSelector((state)=>state.auth)
    const bookingState=useSelector((state)=>state.manageBookings) 

    useEffect(()=>{
        dispatch(getBookings())          
    },[])
    
    console.log(bookingState)

    const bookingStatus=(status)=>{
        if(status==="pending"){

           return <span class="rounded bg-yellow-500 py-1 px-3 text-xs text-white font-semibold">{status}</span>
        }else if(status==="active"){

            return <span class="rounded bg-green-500 py-1 px-3 text-xs text-white font-semibold">{status}</span>
        }
         
    else if(status==="denied"){

        return <span class="rounded bg-red-500 py-1 px-3 text-xs text-white font-semibold">{status}</span>

    }
          
    }
    const renderBookings=()=>{

           const bookings=bookingState.bookings 
           const dealers=bookingState.dealerships;
           const cars=bookingState.cars
           const user=auth.user.username
           return bookings.filter(booking=> booking.created_by===user).map(booking=>(

            <tbody key={booking.id}>       
            
        <tr class="bg-white text-medium font-body lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
            #ux1123{booking.id}
        </td>
        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
            {getBookingDetails(cars,dealers,booking.car,booking.dealership)[0]}
        </td>
        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
            {getBookingDetails(cars,dealers,booking.car,booking.dealership)[1]}
        </td>
        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
            <Moment format="DD-MM-YYYY HH:mm">
            {booking.date}            
            </Moment>
        </td>
        
        <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
           {bookingStatus(booking.status)}
        </td>
        
       </tr>
    
    </tbody>



             ))



    }
    
    return ( 

        <> 

          {
              bookingState.loading? 
              <Loader/>:
          
        <div className="flex flex-col h-screen">
            <header>

            <NavBarComponent user={auth}/>
            </header>
            <div className="flex flex-col space-y-4 p-5 h-5/6">
                <h1 className="text-3xl font-semibold text-center"> Bookings List</h1> 
                <div >
                <table class="border-collapse w-full ">
              <thead>
                  <tr>
                      <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                      <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Car</th>
                      <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Dealer</th>
                      <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                  
                      <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
            
                  </tr>
              </thead>
                  {renderBookings()}
            
      </table>
          </div>
        </div>

            <footer >
            <Footer/>
            </footer>

        </div>
        }
        </>
    )
}

export default BookingsListView
