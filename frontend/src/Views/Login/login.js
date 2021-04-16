import React,{Component,Fragment} from 'react'; 
import{Spinner} from 'react-bootstrap'; 
//import logo from '../images/wanda.svg'
import logphoto from '../../images/loginphoto.jpeg' 
import {connect} from 'react-redux'

import './login.css'

class LoginForm extends Component{
    
  

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
            
                 <div className="w-full h-full  ">  
                
                 <div className="mb-10 mt-4 rounded-md overflow-hidden shadow-lg w-2/3   mx-auto flex flex row">
 
                 <div className="h-full"><img src={logphoto} alt="logphoto"></img></div> 
                 <div className=" mt-5 mb-3  pl-3">
                     <h1 className="text-5xl text-bold ml-4 mt-6 ">Login</h1> 
                     <h1 className='ml-4 mt-6'> Sign in with your  account </h1>
                     
                     <form className="w-full mt-6 "> 
                                            
  
     <div class="mb-2 ml-4 mt-1 mr-2">
       <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
         Username
       </label>
       <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="username" type="text" placeholder="username"/>
       
     </div>
     <div class="mb-2 ml-4 mt-2 mr-2">
       <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
         Password
       </label>
       <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="password" type="password" placeholder="*********************"/>
       
     </div>
     
     <button type="submit"class="bg-red-500 hover:bg-red-400 text-white  py-2 px-4 ml-4 mx-2 rounded">
   Login
 </button>
   <span className="block ml-4 mt-2">Dont have an account? <span className="text-red-500 hover:text-red-700"><a href="/signup/">Sign Up </a></span></span>
  
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

export default connect(mapStateToProps)(LoginForm);