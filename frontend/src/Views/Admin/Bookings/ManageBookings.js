import React ,{useEffect} from 'react'
import Sidebar from '../../Components/Sidebar'
import { useSelector,useDispatch} from 'react-redux'
import {getBookings} from "../../../actions/booking" 


function ManageBookings() { 

    const dispatch=useDispatch() 
    const auth=useSelector((state)=>state.auth)
    const bookingsState=useSelector((state)=>state.booking)
    
    
    useEffect(()=>{
        dispatch(getBookings())          
         console.log(bookingsState)
      },[])
  
      const renderBookingsList=()=>{
        const bookings=bookingsState.bookings;
        
        return bookings.map((booking)=>( 
            <tbody>       
    
            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                #ux1123{booking.id}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                {booking.car}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                {booking.dealership}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                {booking.date}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <span class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold">{booking.status}</span>
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                <a href="#" class="text-blue-400 hover:text-blue-600 underline">Edit</a>
                <a href="#" class="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
            </td>
           </tr>
        
        </tbody>
    
    
        ))
       } 














    return (
        <div className="grid grid-cols-5">
            <Sidebar user={auth.user} /> 

            <div className=" flex flex-col space-y-20 py-10 px-10 col-span-4 h-screen">
              <div>
                  <h1 className="text-3xl font-semibold font-body "> BookingList</h1> 

              </div>
                  <div className=" ">
                     

                  <table class="border-collapse w-full ">
    <thead>
        <tr>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Car</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Dealer</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
        </tr>
    </thead>
        
  {renderBookingsList()}
        
</table>
                  </div>
            </div>
            
        </div>
    )
}

export default ManageBookings
