import React, {useState ,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import{updateProfile} from '../../../actions/login'
import {Spinner} from "react-bootstrap"
import Sidebar from '../../Components/Sidebar'
import { toast } from "react-toastify";
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

                <div className=" divide-y divide-gray-300 flex flex-col justify-start space-y-5 py-7 px-7 w-1/3 h-68  rounded shadow-lg hover:shadow-xl"> 

                <div className="h-1/2 w-full  ">

                <div className=" mx-auto pb-3 overflow-hidden rounded-full w-40 h-40 max-h-40 ">
                <img alt="profile" src={auth.user.pic} class=" rounded-full "/>
                </div>

                
                 </div> 

                 <div>
                 <h1 className="text-3xl font-semibold mt-4">Profile Details</h1>
                <div className="h-6"></div>
                <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="#f75454">
               <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                   </svg> 
                   <span className="text-2xl ml-1">{auth.user.name}</span>

                </div>

                <div className="flex flex-row">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="#f75454">
                 <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg> 

                   <span className="text-2xl ml-1">{auth.user.phone}</span>

                </div>

                <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="#f75454">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
               </svg>
                   <span className="text-2xl ml-1">{auth.user.email}</span>

                </div>
                
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

       <button type="submit"className="bg-red-500 hover:bg-red-400 text-white text-xl  py-2 px-4 ml-4 mx-2 rounded">
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
