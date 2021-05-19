import React ,{useEffect,useState} from 'react'
import Sidebar from '../../Components/Sidebar'
import { useSelector,useDispatch} from 'react-redux'
import {getBookings,getBookingDetails,approveBooking} from "../../../actions/booking" 

import Loader from '../../Components/loader'
import Moment from 'react-moment';
import ModalComponent from "../../Components/ModalComponent"
function ManageBookings() { 
    

    const dispatch=useDispatch() 
    const auth=useSelector((state)=>state.auth)
    const bookingsState=useSelector((state)=>state.manageBookings)
    const [modalShow, setModalShow] = useState(false);
    const [action,setAction]= useState('')
    const[id,setId]=useState(0)

    const onApprove=(id)=>{
        setId(id)
        setAction("Approve")
        setModalShow(true)
    }

    const onCancel=(id)=>{
        setId(id)
        setAction("Cancel")
        setModalShow(true)
    }
    

    const handleAction=()=>{
        if(action==="Approve"){
            setModalShow(false)
            dispatch(approveBooking(id))
        }
    }
   
    useEffect(()=>{
        dispatch(getBookings())          
         console.log(bookingsState)
      },[])
  
      const renderBookingsList=()=>{
        const bookings=bookingsState.bookings;
        const dealers=bookingsState.dealerships;
        const cars=bookingsState.cars
      
        return bookings.map((booking)=>( 

            
            <tbody key={booking.id}>       
                <ModalComponent onAction={handleAction} id={id} action={action} show={modalShow} onHide={()=>setModalShow(false)}/>
    
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
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                {booking.created_by}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                {booking.status==="pending"?
                <span class="rounded bg-yellow-500 py-1 px-3 text-xs text-white font-semibold">{booking.status}</span>:
                <span class="rounded bg-green-500 py-1 px-3 text-xs text-white font-semibold">{booking.status}</span> 
            }
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                <a href="#" on onClick={()=>onApprove(booking.id)}  class="text-green-400 hover:text-green-700 ">Approve</a>
                <a href="#" onClick={()=>onCancel(booking.id)}  class="text-red-500 hover:text-red-700 pl-6">Cancel</a> 
               
            </td>
           </tr>
        
        </tbody>
    
    
        ))
       } 














    return ( 

        
           <>

               {
                   bookingsState.loading?
                   <Loader/>
                   :
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
                      <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Created_BY</th>
                      <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                      <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
                  </tr>
              </thead>
                  
            {renderBookingsList()}
                  
          </table>
                            </div>
                      </div>
                      
                  </div>
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               }
   
   </>        
    ) 
}

export default ManageBookings
