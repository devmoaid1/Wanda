import React, { useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import PieChar from './DongutChart'

import {logout} from '../../../actions/login'
import NavBarAdmin from '../../Components/navbar_admin'
import Footer from'../../Components/footer'
import {getDealers} from '../../../actions/dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
  function DashboardScreen() {
   
      const dispatch=useDispatch()
      const auth=useSelector((state)=>state.auth)
      const dashboard=useSelector((state)=>state.dashboard)
      var nf = new Intl.NumberFormat();
      const logoutFunction=logout()
      useEffect(()=>{
        dispatch(getDealers())          
         console.log(dashboard)
      },[])
   
    return (
        <>
        <header>
            <NavBarAdmin logout={logoutFunction} user={auth}/>
        </header>
        <div className="w-full h-full flex flex-col space-y-7 px-3 font-roboto">
            <div> <h1 className="text-3xl font-semibold mx-5 my-6"> Welcome, {auth.user.name}!</h1> 
          </div>            
    
    <div className="grid grid-cols-3 px-5 py-3 gap-2">
                <div className=" flex flex-row items-center justify-start w-3/4 px-3 py-6 space-x-3 rounded-md shadow-md hover:shadow-lg"> 
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


                 <div className=" flex flex-row items-center justify-start w-3/4 px-3 py-4 space-x-3 rounded-md shadow-md hover:shadow-lg"> 
                <div>
                <FontAwesomeIcon icon="store" size="5x" color="#f75454" className="align-left"/>
                </div>
               
                <div className="flex flex-col space-y-3" >
                <span className="text-lg text-gray-700 ">
                 Total Number of Dealerships
               </span> 
               
               <span className="text-2xl ml-1 font-medium">{dashboard.dealerships.length} </span>
                </div>
                </div> 


               <div className=" flex flex-row items-center justify-start w-3/4 px-3 py-4 space-x-6 rounded-md shadow-md hover:shadow-lg"> 
                <div>
                <FontAwesomeIcon icon="dollar-sign" size="5x" color="#f75454" className="align-left"/>
                </div>
               
                <div className="flex flex-col space-y-3" >
                <span className="text-lg text-gray-700 ">
                Total Revenues 
               </span> 
               
               <span className="text-2xl ml-1 font-medium">{nf.format(dashboard.totalSales)} EGP</span>
                </div>
                </div> 
            </div> 



            
            <div className=" mx-auto  px-3 ml-5 flex flex-col items-center  w-1/4 h-68 rounded shadow-lg hover:shadow-xl" >
                <div> <h1 className="text-2xl">Dealerships sales ratio</h1></div>
                    <div className="mx-auto ">
                    <PieChar data={dashboard.sales}/>
                    </div>
            </div>
        </div>

        <footer>
            <Footer/>
        </footer>
        </>
    ) }
 



export default DashboardScreen
