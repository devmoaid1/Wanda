import React, { useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'
 

import {logout} from '../../../actions/login'
import NavBarAdmin from '../../Components/navbar_admin'
import Footer from'../../Components/footer'
import {getDealers} from '../../../actions/dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
  function DashboardScreen() {
   
      const dispatch=useDispatch()
      const auth=useSelector((state)=>state.auth)
      const dashboard=useSelector((state)=>state.dashboard)
      
      const logoutFunction=logout()
      useEffect(()=>{
        dispatch(getDealers())          
         
      },[])
   
    return (
        <>
        <header>
            <NavBarAdmin logout={logoutFunction} user={auth}/>
        </header>
        <div className="w-full h-full font-roboto">
            <div className="grid grid-cols-3 px-3 py-3 gap-4">
                <div className=" flex flex-row items-center justify-start  px-3 py-4 space-x-3 rounded-md shadow-md hover:shadow-lg"> 
                <div>
                <FontAwesomeIcon icon="store" size="5x" color="#f75454" className="align-left"/>
                </div>
               
                <div className="flex flex-col space-y-3" >
                <span className="text-lg text-gray-700 ">
                 The most selling Dealership 
               </span> 
               
               <span className="text-xl ml-1 font-medium">{dashboard.dealership.name}</span>
                </div>
                

               
                
                </div> 


                 <div className=" flex flex-row items-center justify-start  px-3 py-4 space-x-3 rounded-md shadow-md hover:shadow-lg"> 
                <div>
                <FontAwesomeIcon icon="store" size="5x" color="#f75454" className="align-left"/>
                </div>
               
                <div className="flex flex-col space-y-3" >
                <span className="text-lg text-gray-700 ">
                 The most selling Dealership 
               </span> 
               
               <span className="text-xl ml-1 font-medium">{dashboard.dealership.name}</span>
                </div>
                

               
                
                </div> 


               <div className=" flex flex-row items-center justify-start  px-3 py-4 space-x-3 rounded-md shadow-md hover:shadow-lg"> 
                <div>
                <FontAwesomeIcon icon="dollar-sign" size="5x" color="#f75454" className="align-left"/>
                </div>
               
                <div className="flex flex-col space-y-3" >
                <span className="text-lg text-gray-700 ">
                 The most selling Dealership 
               </span> 
               
               <span className="text-2xl ml-1 font-medium">{dashboard.dealership.name}</span>
                </div>
                </div> 

            </div>
            
        </div>
            <div className="h-1/2"></div>

        <footer>
            <Footer/>
        </footer>
        </>
    ) }
 



export default DashboardScreen
