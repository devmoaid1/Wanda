import React,{Component} from 'react'; 

import PropTypes from "prop-types";  
import logphoto from '../../images/loginphoto.jpeg'; 
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import {login} from '../../actions/login'
import {Spinner} from 'react-bootstrap'










class LoginForm extends Component{ 

  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }
    

  
  
  handleChange=(event)=>{
    
    this.setState({
      [event.target.name]: event.target.value
        
    });
    
    console.log( this.state,event.target.value,event.target.name)
  }


  
  
  

  handleSubmit=e=>{
    e.preventDefault();
    const userData={
      username:this.state.username,
      password:this.state.password
    }
     if(userData.username==="yousef123"){

       this.props.login(userData,"/dashboard")
     } else{
      this.props.login(userData,"/home")
     }

  }
    
  
  render(){
    
    
     
    
  
        return(
         <div>  
            
          
          
            
            
               
            
                 <div>  
                
                 <div className=" mt-20 rounded-md overflow-hidden shadow-lg w-2/3   mx-auto my-100 lg:flex flex-row sm:flex-col">
 
                 <div className="h-full"><img src={logphoto} alt="logphoto"></img></div> 
                 <div className=" mt-5 mb-3  pl-3">
                     <h1 className="text-5xl text-bold ml-4 mt-6 ">Login</h1> 
                     <h1 className='ml-4 mt-6'> Sign in with your  account </h1>
                     
                     <form onSubmit={this.handleSubmit} className="w-full mt-6 "> 
                                            
  
     <div className="mb-2 ml-4 mt-1 mr-2">
       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
         Username
       </label>
       <input value={this.state.username} onChange={this.handleChange} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="username" type="text" placeholder="username"/>
       <p class="text-red-600 mb-3 ">{this.state.usernameError}</p>
     </div>
     <div className="mb-2 ml-4 mr-2">
       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
         Password
       </label>
       <input value={this.state.password} onChange={this.handleChange} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="password" type="password" placeholder="*********************"/>
       <p class="text-red-600 mb-3">{this.state.passwordError}</p>
     </div>
     
     <button type="submit"className="  bg-red-500 hover:bg-red-400 text-white  py-2 px-6 ml-4 mx-2 rounded" > 
      { 
      this.props.auth.loading===true?       
      
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
} 



LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps=state=>({
  auth:state.auth
})



export default connect(mapStateToProps,{login})(withRouter(LoginForm));