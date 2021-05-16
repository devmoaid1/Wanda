import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { withRouter } from "react-router-dom"; 
import propTypes from 'prop-types'
import {logout} from '../../../actions/login'
import NavBarAdmin from '../../Components/navbar_admin'
import Footer from'../../Components/footer'
import {getDealers} from '../../../actions/dashboard'
 
 
  function DashboardScreen() {
      
      const auth=useSelector((state)=>state.auth)
      const dashboard=useSelector((state)=>state.dashboard)
      
      const logoutFunction=logout()
      useEffect(()=>{
          getDealers()
      })
   
    return (
        <>
        <header>
            <NavBarAdmin logout={logoutFunction} user={auth}/>
        </header>
        <div className="w-full h-full">
            <div className="grid grid-cols-3 px-3 py-3 gap-4">
                <div className=" flex flex-col bg-red-300"> 
                <h1 className="text-xl">
                {dashboard.dealership.name} 
                </h1>

                <h1 className="text-xl">
                hello 1
                </h1>
                
                
                </div>
                <div className="bg-yellow-300">hello 2</div>
                <div className="bg-green-300"> hello 3</div>
            </div>
            
            
        </div>

        <footer>
            <Footer/>
        </footer>
        </>
    ) }
 
// const mapStateToProps=state=>({
    
//     auth:state.auth,
//     dashboard:state.dashboard
//    })


export default DashboardScreen
