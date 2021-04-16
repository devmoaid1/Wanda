import React,{Component,Fragment} from 'react'; 
import{Spinner} from 'react-bootstrap'; 
//import logo from '../images/wanda.svg'
import logphoto from '../../images/loginphoto.jpeg' 
import {connect} from 'react-redux'

import '../Login/login.css'

class SignUpForm extends Component{
    
  

   alertMassage=(title)=>{
     return(
      <div role="alert">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Danger
      </div>
      <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{title}</p>
      </div>
    </div>
     )
   }

  

    render(){

        let errorMassage=null;
        if(this.props.error){
            errorMassage=(<p> {this.props.error.massage}</p>)
                
            
        }
        return(
            <Fragment>
                {errorMassage} 
           {
                 this.props.loading?
            
            
                 <Spinner animation="border" variant="danger" />:
            
            <div className="w-full h-full ">  
                
                <div className="mb-10 mt-4 rounded-md overflow-hidden shadow-lg w-2/3 mx-auto flex flex row">

                <img src={logphoto} alt="logphoto"></img> 
                <div className=" mb-3  py-3">
                    <h1 className="text-5xl text-bold ml-4 mt-3">Sign Up</h1> 
                    <h1 className='ml-4 mt-3'> Sign up with new account </h1>
                    
                    <form className="w-full"> 
                      <div className="flex flex wrap ml-3  "> 
                      <div class=" ml-2 mt-3 ">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="username" type="text" placeholder="Username" name="username"/>
    </div>
    <div class="mb-2 ml-2 mt-3">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="password" type="password" placeholder="****************" name="password"/>
      
    </div>
                       
                      </div>
                    
 
    <div class="mb-2 ml-4 mt-1 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="fullname">
        Full Name
      </label>
      <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="fullname" type="text" placeholder="Full Name" name="fullname"/>
      
    </div>
    <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="emailaddress">
        Email Address
      </label>
      <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="emailaddress" type="password" placeholder="Email Address" name="emailaddress"/>
      
    </div>
     <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Phone Number">
        Phone Number
      </label>
      <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="phonenumber" type="text" placeholder=" phone number"  name="phonenumber"/>
      
    </div>
    <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
       Address
      </label>
      <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="address" type="text" placeholder="Address" name="address"/>
      
    </div>
    <button type="submit"class="bg-red-500 hover:bg-red-600 text-white  py-2 px-4 ml-4 mx-2 rounded">
  Sign Up
</button>
 
 
                    </form>

                </div>


            
             </div>
                
                 </div>
            
    }

            </Fragment>
        )
    }
} 



const mapStateToProps=state=>{
    return{
        loading:state.loading,
        error:state.error
    }
}

export default connect(mapStateToProps)(SignUpForm);