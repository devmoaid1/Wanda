import React,{Component} from 'react'; 
import{Spinner} from 'react-bootstrap'; 
//import logo from '../images/wanda.svg'
import logphoto from '../../images/loginphoto.jpeg' 
import {connect} from 'react-redux'

import * as actions from '../../actions/auth'


import './login.css'

class LoginForm extends Component{
    
  state={
    username:'',
    password:'',
    err:true
  } 

  componentDidMount(){
    console.log(this.state)
  }
  
  handleChange=(event)=>{
    let value=event.target.value
    let type=event.target.id 
    let username=this.state.username
    let password=this.state.password
    
    this.setState({
      [type]:value,
      
    })
    
    if(username!==''&&password!==''){
      this.setState({
           err:false
      })
    }
    
    console.log( this.state,value,event.target.id)
  }


  validate=()=>{
     let username=this.state.username
     let password=this.state.password
     
    if(username===''){
       return alert('please enter a username')
    }
    if(password===''){
      return alert("please Enter a password")
    } 
    
   

  }
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
  

  handleSubmit=e=>{
    e.preventDefault();
    this.validate();
     let err=this.state.err
    //  let username=this.state.username
    //  let password=this.state.password

      if (err===false) {
         //this.props.onAuth(username, password);
         this.props.history.push("/home/")
       }
    
  }
    
  
  render(){
    
    
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    } 
    
  
        return(
         <div>  
            {this.errorMassage} 
          {
                 this.props.loading?
            
            
                 <Spinner animation="border" variant="danger" />:
            
                 <div className="w-full h-full  ">  
                
                 <div className="mb-10 mt-4 rounded-md overflow-hidden shadow-lg w-2/3   mx-auto flex flex row">
 
                 <div className="h-full"><img src={logphoto} alt="logphoto"></img></div> 
                 <div className=" mt-5 mb-3  pl-3">
                     <h1 className="text-5xl text-bold ml-4 mt-6 ">Login</h1> 
                     <h1 className='ml-4 mt-6'> Sign in with your  account </h1>
                     
                     <form onSubmit={this.handleSubmit} className="w-full mt-6 "> 
                                            
  
     <div className="mb-2 ml-4 mt-1 mr-2">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
         Username
       </label>
       <input onChange={this.handleChange} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="username" type="text" placeholder="username"/>
      
     </div>
     <div className="mb-2 ml-4 mr-2">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
         Password
       </label>
       <input  onChange={this.handleChange} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="password" type="password" placeholder="*********************"/>
       
     </div>
     
     <button type="submit"className="bg-red-500 hover:bg-red-400 text-white  py-2 px-4 ml-4 mx-2 rounded">
   Login
 </button>
   <span className="block ml-4 mt-2">Dont have an account? <span className="text-red-500 hover:text-red-700"><a href="/signup/">Sign Up </a></span></span>
  
                     </form>
 
                 </div>
 
 
             
              </div>
                 
                  </div>
            
    }

</div>
        )
    }
} 



const mapStateToProps=state=>{
    return{
        loading:state.loading,
        error:state.error
    }
} 

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);