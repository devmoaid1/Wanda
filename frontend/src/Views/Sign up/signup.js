import React,{Component,Fragment} from 'react'; 

import logphoto from '../../images/loginphoto.jpeg' 
import {connect} from 'react-redux'
import { push } from "connected-react-router";
import '../Login/login.css'
import { withRouter,Link } from "react-router-dom";
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
      pic:null

    }
  }
  
  componentDidMount(){
    console.log(this.state)
  } 

  componentDidUpdate(){
    console.log(this.state)
  }
  
  handleChange=(event)=>{
    if(event.target.name==="pic"){
      this.setState({
        pic: event.target.files[0]
          //  event.target.checked
          // : event.target.value
      });
    }else{
      this.setState({
        [event.target.name]: event.target.value
          //  event.target.checked
          // : event.target.value
      });
    }
    
    
    console.log( this.state,event.target.value,event.target.name)
  }

 
  
  handelSubmit=e=>{
    e.preventDefault();
    let formdata= new FormData()
    formdata.append('username',this.state.username)
    formdata.append('password',this.state.password)
    formdata.append('name',this.state.name)
    formdata.append('email',this.state.email)
    formdata.append('phone',this.state.phone)
    formdata.append('address',this.state.address)
    formdata.append('pic',this.state.pic)

    this.props.signUpNewUser(formdata);
   

   
  } 

  




    render(){

       
        return(
            <Fragment>
               
           
                
            
            <div className="w-full h-screen ">  
                
                <div className=" mt-20 rounded-md overflow-hidden shadow-lg w-2/3 h-8/9 mx-auto flex flex row">

                <img src={logphoto} alt="logphoto"></img> 
                <div className=" mb-3  py-2">
                    <h1 className="text-5xl text-bold ml-4 mt-3">Sign Up</h1> 
                    <h1 className='ml-4 mt-3'> Sign up with new account </h1>
                    
                    <form onSubmit={this.handelSubmit} className="w-full h-5/6  "> 
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
      <input  onChange={this.handleChange}  required="true" class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="fullname" type="text" placeholder="Full Name" name="name"/>
    
    </div>
    <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="emailaddress">
        Email Address
      </label>
      <input  onChange={this.handleChange}  required="true"  class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="emailaddress" type="email" placeholder="Email Address" name="email"/>
      
    </div>
     <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="Phone Number">
        Phone Number
      </label>
      <input onChange={this.handleChange} required="true" class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="phonenumber" type="tel" pattern="[0-9]{11}" placeholder=" phone number"  name="phone"/>
     
    </div>
    <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
       Address
      </label>
      <input onChange={this.handleChange} required="true"  class="border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="address" type="text" placeholder="Address" name="address"/>
    
    </div>

    <div class="mb-2 ml-4 mt-2 mr-2">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
      Picture
      </label>
      <input onChange={this.handleChange}  accept="image/*" class="   rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" id="address" type="file"  name="pic"/>
      </div>

    <button type="submit"className="bg-red-500 hover:bg-red-600 text-white w-1/3 py-2 px-4 ml-4 mx-2 rounded">
  Sign Up
</button>
<Link to="/">
<button  className=" block bg-red-500 hover:bg-red-600 text-white my-2 py-2 px-4 ml-4 rounded w-1/3" > 
     
   Login
 </button>
 </Link>
 
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



export default connect(mapStateToProps,{signUpNewUser})(withRouter(SignUpForm));