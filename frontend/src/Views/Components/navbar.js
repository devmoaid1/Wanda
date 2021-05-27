import React,{Component} from 'react'; 
import { useSelector,useDispatch} from 'react-redux'
import logo from'../../images/Group 1.svg'
import './navbar.css'
import {logout} from '../../actions/login'

const NavBarComponent =(props)=> {
  
  const dispatch=useDispatch()
  

   const onLogout=()=>{
     dispatch(logout())
   }
    

   

  
  
    const user=props.user.user
    
    return (
      
      <div style={{background:'#091c29'}}>
        <div className="flex flex-row items-center  w-10/12 mx-auto py-1 text-white"> 
          <div className="flex flex-row justify-left pt-2  text-white"><img width="100"
          height="100"  src={logo} alt="logo"></img>        
          
           
          </div>

           <div className="inline-block justify-left ml-7">
             <span className="text-xl mr-4  focus:ring-white"><a className=" hover:purple-700" href="/home/">Home</a></span>
             <span  className="text-xl mr-4"><a href="/cars/">Cars</a></span>
           <span  className="text-xl mr-4 hover:purple-700"><a  onClick={onLogout} href="#">Logout</a></span>
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





export default NavBarComponent;

