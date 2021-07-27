import React,{useState} from 'react'; 
import { useSelector,useDispatch} from 'react-redux'
 
import logphoto from '../../images/loginphoto.jpeg'; 

import {login} from '../../actions/login'
import {Spinner} from 'react-bootstrap'










const LoginForm=()=>{ 

    
 
  
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  
 const dispatch=useDispatch()
 const auth=useSelector((state)=>state.auth)

  
  
  

 const handleSubmit=e=>{
    e.preventDefault();
    const userData={
      username:username,
      password:password
    }
     if(userData.username==="yousef123"){

       dispatch(login(userData,"/dashboard"))
     } else{
      dispatch(login(userData,"/home"))
     }

  }
    
  
 
    
    
     
    
  
        return(
         <div>  
            
          
          
            
            
               
            
                 <div>  
                
                 <div className=" mt-20 rounded-md overflow-hidden shadow-lg w-2/3   mx-auto my-100 lg:flex flex-row sm:flex-col">
 
                 <div className="h-full"><img src={logphoto} alt="logphoto"></img></div> 
                 <div className=" mt-5 mb-3  pl-3">
                     <h1 className="text-5xl text-bold ml-4 mt-6 ">Login</h1> 
                     <h1 className='ml-4 mt-6'> Sign in with your  account </h1>
                     
                     <form onSubmit={handleSubmit} className="w-full mt-6 "> 
                                            
  
     <div className="mb-2 ml-4 mt-1 mr-2">
       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
         Username
       </label>
       <input value={username} onChange={(e)=>setUsername(e.target.value)}  required="true" className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="username" type="text" placeholder="username"/>
 
     </div>
     <div className="mb-2 ml-4 mr-2">
       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
         Password
       </label>
       <input value={password} required="true" onChange={(e)=>setPassword(e.target.value)} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="password" type="password" placeholder="*********************"/>
      
     </div>
     
     <button type="submit"className="  bg-red-500 hover:bg-red-400 text-white  py-2 px-6 ml-4 mx-2 rounded" > 
      { 
      auth.loading===true?       
      
      <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
      className="mr-2"
      
    />:null
      }
   Login
 </button>
   <span className="block ml-4 mt-2">Dont have an account? <span className="text-red-600 hover:text-red-800"><a href="/signup/">Sign Up </a></span></span>
  
                     </form>
 
                 </div>
 
 
             
              </div>
                 
                  </div>
            
    

</div>
        )
    }
 







export default LoginForm;