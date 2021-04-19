import React,{Component} from 'react'; 
import{Spinner} from 'react-bootstrap'; 
//import logo from '../images/wanda.svg'
import logphoto from '../../images/loginphoto.jpeg' 
import {connect} from 'react-redux'

import * as actions from '../../actions/auth'






const intialState={
  username:'',
  password:'',
  usernameError:'',
  passwordError:''
}




class LoginForm extends Component{
    
  state=intialState

  componentDidMount(){
    console.log(this.state)
  }
  
  handleChange=(event)=>{
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
    
    console.log( this.state,event.target.value,event.target.name)
  }


  validate = () => {
    let nameError = "";
    let passwordError = "";
    // let passwordError = "";

    if (!this.state.username) {
      nameError = "username cannot be blank";
    }

    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (passwordError || nameError) {
      this.setState({usernameError:nameError,passwordError:passwordError  });
      return false;
    }

    return true;
  };
  
  

  handleSubmit=e=>{
    e.preventDefault();
    const isValid=this.validate();
     //let err=this.state.err
      let username=this.state.username
      let password=this.state.password

      if (isValid) {
         this.props.onAuth(username, password);
         this.props.history.push("/home/")
         this.setState(intialState)
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
       <input value={this.state.username} onChange={this.handleChange} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="username" type="text" placeholder="username"/>
       <p class="text-red-600 mb-3 ">{this.state.usernameError}</p>
     </div>
     <div className="mb-2 ml-4 mr-2">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
         Password
       </label>
       <input value={this.state.password} onChange={this.handleChange} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="password" type="password" placeholder="*********************"/>
       <p class="text-red-600 mb-3">{this.state.passwordError}</p>
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