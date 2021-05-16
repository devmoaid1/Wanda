import React from 'react'; 
import logo from'../../images/wandalogo.svg'
import './navbar.css'
import {useDispatch} from 'react-redux'



function NavBarAdmin (props){ 
  
  const dispatch=useDispatch()
  
  const {user}=props.user 

  return(
    <div style={{background:'#091c29'}}>
        <div className="flex flex-row items-center  w-10/12 mx-auto py-1 text-white"> 
          <div className="flex flex-row justify-left pt-3  text-white"><img width="50"
          height="50"  src={logo} alt="logo"></img>        
          
           <h1 className="text-2xl font-sans font-bold text-white"> Wanda</h1>
          </div>

           <div className="inline-block justify-left ml-7">
             <span className="text-xl mr-4  focus:ring-white"><a className=" hover:purple-700" href="/dashboard/">Dashboard</a></span>
             <span  className="text-xl mr-4"><a href="/cars/">Bookings</a></span>
           <span  className="text-xl mr-4 hover:purple-700"><a  onClick={()=>dispatch(props.logout)} href="#">Logout</a></span>
           </div> 
             <div className=" inline-block w-2/3 bg-red-300"></div>
           <div className="inline-block ">
         
           
              <a href="/editprofile/" class="block relative">
              <img alt="profile" src={user.pic} class="mx-auto object-cover rounded-full h-12 w-12 "/>
            </a>
           
           
             
           </div>
  
        </div>
      </div>
  )
  

  

  
}





export default NavBarAdmin;

