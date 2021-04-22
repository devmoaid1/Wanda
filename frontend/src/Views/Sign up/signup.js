import React,{Component,Fragment} from 'react'; 
//import{Spinner} from 'react-bootstrap'; 
//import logo from '../images/wanda.svg'
import logphoto from '../../images/loginphoto.jpeg' 
import {connect} from 'react-redux'
//import * as actions from '../../actions/signup'
import '../Login/login.css'
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types"; 
import signUpNewUser from '../../actions/signup' 
import {
  Form,
  FormControl,

} from "react-bootstrap"; 

import './signup.css'






class SignUpForm extends Component{
    

  constructor(props){
    super(props); 
    this.state={
      username:"",
      password:"",
      email:'',
      name:'',
      address:'',
      phone:'',

    }
  }
  
  componentDidMount(){
    console.log(this.state)
  }
  
  handleChange=(event)=>{
    //const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: event.target.value
        //  event.target.checked
        // : event.target.value
    });
    
    console.log( this.state,event.target.value,event.target.name)
  }

 
  
  handelSubmit=e=>{
    e.preventDefault();
    let userdate={
      username:this.state.username,
      password:this.state.password,
      name:this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      address:this.state.address,
    }
    this.props.signUpNewUser(userdate);
   

   
  } 

  




    render(){

        // let errorMassage=null;
        // if(this.props.error){
        //     errorMassage=(<p> {this.props.error.massage}</p>)
                
            
        // }
        return(
            <Fragment>
               
           
                
            
            <div className="w-full h-full ">  
                
                <div className="mb-10 mt-4 rounded-md overflow-hidden shadow-lg w-2/3 h-8/9 mx-auto flex flex row">

                <img src={logphoto} alt="logphoto"></img> 
                <div className=" mb-3  py-3">
                    <h1 className="text-5xl text-bold ml-4 mt-3">Sign Up</h1> 
                    <h1 className='ml-4 mt-3'> Sign up with new account </h1>
                    
                    <form onSubmit={this.handelSubmit} className="w-full h-8/9  "> 
                      <div className="flex flex wrap ml-3  "> 
                      
                      <div class=" ml-2 mt-3 ">
      
      
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <FormControl onChange={this.handleChange}   class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="username" type="text" placeholder="Username" name="username" isInvalid={this.props.createUser.usernameError}/>
      <FormControl.Feedback type="invalid">
                  {this.props.createUser.usernameError}
                </FormControl.Feedback>
    
      </div>
    <div class="mb-2 ml-2 mt-3">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <Form.Control onChange={this.handleChange}   class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="password" type="password" placeholder="****************" name="password" isInvalid={this.props.createUser.passwordError}/>
      <FormControl.Feedback type="invalid">
                  {this.props.createUser.passwordError}
                </FormControl.Feedback>
    </div>
                       
                      </div>
                    
 
    <div class="mb-2 ml-4 mt-1 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Full Name
      </label>
      <input  onChange={this.handleChange}   class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="fullname" type="text" placeholder="Full Name" name="name"/>
      {/* <p className="text-red-600">{this.state.fullnameError}</p> */}
    </div>
    <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="emailaddress">
        Email Address
      </label>
      <input  onChange={this.handleChange}    class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="emailaddress" type="email" placeholder="Email Address" name="email"/>
      {/* <p className="text-red-600">{this.state.emailError}</p> */}
    </div>
     <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Phone Number">
        Phone Number
      </label>
      <input onChange={this.handleChange} class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="phonenumber" type="text" placeholder=" phone number"  name="phone"/>
      {/* <p className="text-red-600">{this.state.phoneError}</p> */}
    </div>
    <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
       Address
      </label>
      <input onChange={this.handleChange}   class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="address" type="text" placeholder="Address" name="address"/>
      {/* <p className="text-red-600">{this.state.addressError}</p> */}
    </div>
    <button type="submit"class="bg-red-500 hover:bg-red-600 text-white  py-2 px-4 ml-4 mx-2 rounded">
  Sign Up
</button>
 
 
                    </form>

                </div>


            
             </div>
                
                 </div>
            
   

            </Fragment>
        )
    }
} 

SignUpForm.propTypes = {
  signUpNewUser: PropTypes.func.isRequired,
  createUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  createUser: state.createUser
});

// const mapDispatchToProps = dispatch => {
// return {
//     onAuth: (username, password,email,fullname,phone,address) => dispatch(actions.authSignUp(username, password,email,fullname,phone,address)) 
// }
// }

export default connect(mapStateToProps,{signUpNewUser})(withRouter(SignUpForm));