import React, { Component,Fragment } from 'react'
import NavBarComponent from '../Components/navbar'
import Footer from '../Components/footer'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' 
// import {Link} from 'react-router-dom' 
import {logout} from '../../actions/login'
import {updateProfile} from '../../actions/login' 
import {Spinner} from "react-bootstrap"
class EditProfile extends Component {
   
    static propTypes={
        
        logout:propTypes.func.isRequired,
        updateProfile:propTypes.func.isRequired
        
    } 

    state={
        email:"",
        phone:"",
        address:"",
        pic:null
    }

    handleChange=(e)=>{
        if(e.target.name==="pic"){
            this.setState({
              pic: e.target.files[0]
                
            });
          }else{
            this.setState({
              [e.target.name]: e.target.value
                
            });
          }
          
          
          console.log( this.state,e.target.value,e.target.name)
    }
    

    handleSubmit=(e)=>{
        e.preventDefault()
        let formdata= new FormData() 
        
       formdata.append('email',this.state.email)
       formdata.append('phone',this.state.phone)
       formdata.append('address',this.state.address)
       formdata.append('pic',this.state.pic)

       this.props.updateProfile(formdata) 
       

    }

    render() {
        const user=this.props.auth.user
        return (
            <>
                <header>
                    <NavBarComponent user={this.props.auth} logout={this.props.logout} />
                </header>


                <div className="w-full h-screen flex flex-row items-start space-x-10 px-10 py-10 justify-left">
                  

                  {/* profile card */}

                <div className=" divide-y divide-gray-300 flex flex-col justify-start py-7 px-7 w-1/3 h-68  rounded shadow-md hover:shadow-lg">
                <div className=" mx-auto pb-3 ">
                <img alt="profile" src={user.pic} class="mx-auto object-cover rounded-full w-2/3 h-2/3"/>
                </div>
                <div>
                <h1 className="text-3xl font-semibold mt-4">Profile Details</h1>
                <div className="h-6"></div>
                <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="#f75454">
               <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                   </svg> 
                   <span className="text-2xl ml-1">{user.name}</span>

                </div>

                <div className="flex flex-row">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="#f75454">
                 <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg> 

                   <span className="text-2xl ml-1">{user.phone}</span>

                </div>

                <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="#f75454">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
               </svg>
                   <span className="text-2xl ml-1">{user.email}</span>

                </div>
                </div>                
                </div>

                {/* edit profile form */}
                <div className=" flex flex-col w-1/3 h-3/4 mx-7 py-3 px-5 rounded shadow-md hover:shadow-lg">

                    <h1 className="text-3xl font-semibold"> Edit Profile</h1>
                    <div className="h-5"></div>
                     <form onSubmit={this.handleSubmit} className="flex flex-col">
                     <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
         Email
       </label>
       <input  onChange={this.handleChange} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="email" type="email" placeholder={user.email}/>
                        
       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
         Phone Number
       </label>
       <input  onChange={this.handleChange} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="phone" type="text" placeholder={user.phone}/>

       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
         Address
       </label>
       <input  onChange={this.handleChange} className="border border-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="address" type="text" placeholder={user.address}/>

       <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
        Profile Picture
       </label>
       <input  onChange={this.handleChange} className=" rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:shadow-outline" name="pic" type="file" placeholder={user.pic}/>

       <button type="submit"className="bg-red-500 hover:bg-red-400 text-white text-xl  py-2 px-4 ml-4 mx-2 rounded">
       { 
      this.props.auth.loading===true?       
      
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
                

                <footer>
                    <Footer/>
                </footer>
            </>
        )
    }
}

const mapStateToProps=state=>({
    
    auth:state.auth,
    editProfile:state.editProfile
 }) 

 export default connect(mapStateToProps,{logout,updateProfile})(withRouter(EditProfile))