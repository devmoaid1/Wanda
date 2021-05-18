import React from 'react'
import {useDispatch} from "react-redux" 
import {logout} from "../../actions/login"

function Sidebar(props) {
    const user=props.user
    const dispatch=useDispatch() 
    
    return (
        
        <div className="flex flex-col space-y-16 bg-gray-800 text-white px-4 py-10 h-full col-span-1">
               
               
        <div className="flex flex-row space-x-1 mr-3">
        <div className=" mx-auto pb-3 overflow-hidden rounded-full w-16 h-16 max-h-40 ">
                <img alt="profile" src={user.pic} class=" rounded-full "/>
                </div>
        <div className="flex flex-col space-y-1">
        <span className="font-semibold text-xl">{user.name}</span>
        <span className="font-small text-md">Admin</span>
        </div>
        </div>

        <ul class="space-y-10 text-lg">
     <li>
         <a href="/dashboard/" class="flex items-center space-x-3 text-gray-300 p-2 rounded-md font-medium hover:bg-gray-200  focus:shadow-outline">
             <span class="text-gray-300">
                 <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
             </span>
             <span>Dashboard</span>
         </a>
     </li>
     
     
     <li>
         <a href="/adminprofile/" class="flex items-center space-x-3 text-gray-300 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
             <span class="text-gray-300">
                 <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
             </span>
             <span> Profile</span>
         </a>
     </li>
     <li>
         <a href="/bookings/" class="flex items-center space-x-3 text-gray-300 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
             <span class="text-gray-300">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
             </span>
             <span>Bookings</span>
         </a>
     </li>
     
     
                 <li>
         <a  onClick={()=>dispatch(logout())}    href="#" class="flex items-center space-x-3 text-gray-300 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
             <span class="text-gray-300">
                 <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                 </svg>
             </span>
             <span>Logout</span>
         </a>
     </li>
 </ul>

     </div>


    )
}

export default Sidebar
