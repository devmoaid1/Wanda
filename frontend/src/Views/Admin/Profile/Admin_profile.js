import React, {useState ,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import{updateProfile} from '../../../actions/login'
import {Spinner} from "react-bootstrap"
import Sidebar from '../../Components/Sidebar'

function AdminProfile() { 

    const auth=useSelector((state)=>state.auth)
    const dispatch=useDispatch() 

    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [pic,setPic]=useState(null) 

    useEffect(()=>{
        console.log(pic)
    })
    
    const handleSubmit=(e)=>{
          e.preventDefault()
          let formData=new FormData()
          formData.set("email",email)
          formData.set("phone",phone)
          formData.set("addres",address)
          formData.set("pic",pic)
          dispatch(updateProfile(formData,"/adminprofile/"))    
    }
   
   
    return (
        <div className="grid grid-cols-5 ">
            
            <Sidebar user={auth.user}/>

            <div className=" p-10 col-span-4 h-screen">
            
            <div className="  flex flex-row items-start space-x-20  justify-left">
                  

                  {/* profile card */}

                <div className=" font-body divide-y divide-gray-300 flex flex-col justify-start space-y-5 py-7 px-7 w-1/3 h-68  rounded shadow-lg hover:shadow-xl"> 

                <div className="h-1/2 w-full  ">

                <div className=" mx-auto pb-3 overflow-hidden rounded-full w-40 h-40 max-h-40 ">
                <img alt="profile" src={auth.user.pic} class=" rounded-full "/>
                </div>

                
                 </div> 

                 <div className="flex flex-col space-y-3">
                 <h1 className="text-3xl font-semibold mt-4">Profile Details</h1>
                <div className="h-3"></div>
                <ul className="space-y-2 font-body text-bold">
                  <li>
                  <div className="flex flex-row">
                  <svg class="h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#f75454">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
                   <span className="text-xl ml-1">{auth.user.name}</span>

                </div>
                  </li>

                  <li>
                  <div className="flex flex-row">

                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 " fill="none" viewBox="0 0 24 24" stroke="#f75454">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>

                    <span className="text-xl ml-1">{auth.user.phone}</span>

                   </div>

                  </li>


                  <li>
                    
                  <div className="flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 " fill="none" viewBox="0 0 24 24" stroke="#f75454">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                   <span className="text-xl ml-1">{auth.user.email}</span>

                </div>

                  </li>
                </ul>
                
                 </div>
                                
                </div>

                {/* edit profile form */}
                <div className=" flex flex-col w-1/3 h-full  mx-7 py-6 px-5 rounded shadow-lg hover:shadow-xl">

                    <h1 className="text-3xl font-semibold"> Edit Profile</h1>
                    <div className="h-5"></div>
                     <form onSubmit={handleSubmit} className="flex flex-col">
                     <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
         Email
       </label>
       <input  onChange={(e)=>setEmail(e.target.value)} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="email" type="email" placeholder={auth.user.email}/>
                        
       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
         Phone Number
       </label>
       <input  onChange={(e)=>setPhone(e.target.value)} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="phone" type="text" placeholder={auth.user.phone}/>

       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
         Address
       </label>
       <input  onChange={(e)=>setAddress(e.target.value)} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="address" type="text" placeholder={auth.user.address}/>

       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
        Profile Picture
       </label>
       <input  onChange={(e)=>setPic(e.target.files[0])} className=" rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="pic" type="file" placeholder={auth.user.pic}/>

       <button type="submit"className="bg-red-500 hover:bg-red-400 text-white text-xl  py-2 px-4  mx-2 rounded">
       { 
      auth.loading===true?       
      
      <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
      className="mr-2 mb-1"
      
    />:null
      }
     Edit
 </button>
                     </form>
                </div>





                </div>

            </div>
        </div>
    )
}

export default AdminProfile
