import React ,{useState} from 'react'


import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom' 


import NavBarComponent from '../Components/navbar' 
import Footer from '../Components/footer' 
import clockPhoto from '../../images/booking.jpeg'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'


const  BookingView=(props)=>{
    

   
    const auth=useSelector((state)=>state.auth)
    const car=props.match.params.carID
    const dealer=props.match.params.dealerID 
    const{user}=auth
    const [date,setDate]=useState("")

    const booking={
        date:date,
        car:car,
        dealership:dealer,
        status:"pending",
        created_by:user.username
    }
    
     

   





    

   const handleChange=(e)=>{
        
        setDate(e.target.value) 
        console.log(booking)
    } 

   
   
  
      return( 
          <div className="bg-gray-100">       
        <header>
        <NavBarComponent user={auth} />
    </header>
          <div className="w-full h-screen bg-gray-100 ">
              <div className=" flex flex-row  w-3/4 h-3/4  mx-auto my-20 rounded overflow-hidden shadow-lg md:flex flex-col">
                
           <img className="w-1/2 h-full " src={clockPhoto} alt="clock"></img> 
           <div className=" flex flex-col items-center w-1/2  h-full  py-4 px-2  ">
            
            <div className="mx-auto flex flex-row items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>  <h1 className=" ml-2 inline-block font-bold text-3xl">Booking details</h1></div>
             <div className="mx-auto mt-6"><h1 className="text-xl">Specify booking date and time</h1></div>
             <div className="h-20"></div> 
             <div className="w-1/2 h-10 mx-auto mt-20 "><DateTimePickerComponent  onChange={handleChange} placeholder="choose date and time" ></DateTimePickerComponent> </div> 
             <div className="h-20"></div>
             <Link to={{ pathname: '/bookingsummary/', state: booking }}>  <button  className="bg-red-500 hover:bg-red-700 text-white  py-2 px-20 rounded ">Confirm</button></Link>


           </div> 
             

                  
              </div>
          </div> 

          <footer >
         <Footer/>
         </footer>
          </div>

      )
  }




 export default BookingView