import React ,{useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import NavBarComponent from "../Components/navbar"
import Footer from '../Components/footer'
function BookingsListView(){ 
    
    const auth=useSelector((state)=>state.auth)
    
    return (
        <div className="grid grid-rows-6">
            <div className="row-span-1">

            <NavBarComponent user={auth}/>
            </div>
            <div className="row-span-4">
                <h1 className="text-3xl font-semibold text-center"> Bookings List</h1>
               
            </div>
            <div className="row-span-1">

            <Footer/>
            </div>
        </div>
    )
}

export default BookingsListView
