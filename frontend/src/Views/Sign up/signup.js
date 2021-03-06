import React,{useState,Fragment} from 'react'; 

import logphoto from '../../images/loginphoto.jpeg' 
import { useSelector,useDispatch} from 'react-redux'
import '../Login/login.css'


import signUpNewUser from '../../actions/signup' 
import {
  Form,
  FormControl,

} from "react-bootstrap"; 

import './signup.css'






const SignUpForm=()=>{
    


const dispatch=useDispatch()
const newUserState=useSelector((state)=>state.createUser)

  const[username,setUsername]=useState("")
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[address,setAddress]=useState("")
  const[pic,setPic]=useState(null)

  


 console.log(newUserState)
  
  const handelSubmit=e=>{
    e.preventDefault();
    let formdata= new FormData()
    formdata.append('username',username)
    formdata.append('password',password)
    formdata.append('name',name)
    formdata.append('email',email)
    formdata.append('phone',phone)
    formdata.append('address',address)
    formdata.append('pic',pic)

    dispatch(signUpNewUser(formdata));
   

   
  } 

  




    

       
        return(
            <Fragment>
               
           
                
            
            <div className="grid grid-cols-6 py-4 ">  
                
                <div className="  rounded-md overflow-hidden shadow-lg col-start-2 col-span-4  flex flex row ">

                <img  src={logphoto} alt="logphoto"></img> 
                <div className=" col-span-1 row-span-4 mb-3  py-2">
                    <h1 className="text-5xl text-bold ml-4 mt-3">Sign Up</h1> 
                    <h1 className='ml-4 mt-3'> Sign up with new account </h1>
                    
                    <form onSubmit={handelSubmit} className="w-full h-full  "> 
                      <div className="flex flex wrap ml-3  "> 
                      
                      <div class=" ml-2 mt-3 ">
      
      
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <FormControl onChange={(e)=>setUsername(e.target.value)}   class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="username" type="text" placeholder="Username" name="username" isInvalid={newUserState.usernameError}/>
      <FormControl.Feedback type="invalid">
                  {newUserState.usernameError}
                </FormControl.Feedback>
    
      </div>
    <div class="mb-2 ml-2 mt-3">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <Form.Control onChange={(e)=>setPassword(e.target.value)}   class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="password" type="password" placeholder="****************" name="password" isInvalid={newUserState.passwordError}/>
      <FormControl.Feedback type="invalid">
                  {newUserState.passwordError}
                </FormControl.Feedback>
    </div>
                       
                      </div>
                    
 
    <div class="mb-2 ml-4 mt-1 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Full Name
      </label>
      <input  onChange={(e)=>setName(e.target.value)}  required="true" class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="fullname" type="text" placeholder="Full Name" name="name"/>
    
    </div>
    <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="emailaddress">
        Email Address
      </label>
      <input  onChange={(e)=>setEmail(e.target.value)}  required="true"  class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="emailaddress" type="email" placeholder="Email Address" name="email"/>
      
    </div>
     <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Phone Number">
        Phone Number
      </label>
      <input onChange={(e)=>setPhone(e.target.value)} required="true" class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="phonenumber" type="tel" pattern="[0-9]{11}" placeholder=" phone number"  name="phone"/>
     
    </div>
    <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
       Address
      </label>
      <input onChange={(e)=>setAddress(e.target.value)} required="true"  class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="address" type="text" placeholder="Address" name="address"/>
    
    </div>

    <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
      Picture
      </label>
      <input onChange={(e)=>setPic(e.target.files[0])}  accept="image/*" class="   rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="address" type="file"  name="pic"/>
      </div>

    <button type="submit"className="bg-red-500 hover:bg-red-600 text-white w-1/3 py-2 px-4 ml-4 mx-2 rounded">
  Sign Up
</button>
<span className="block ml-4 mt-2">Already have an account? <span className="text-red-600 hover:text-red-800"><a href="/">login</a></span></span>
 
                    </form>

                </div>


            
             </div>
                
                 </div>
            
   

            </Fragment>
        )
    }





export default SignUpForm