import React, { Component,Fragment } from 'react'
import NavBarComponent from '../Components/navbar'
import Footer from '../Components/footer'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' 
// import {Link} from 'react-router-dom' 
import {logout} from '../../actions/login' 
class EditProfile extends Component {
   
    static propTypes={
        
        logout:propTypes.func.isRequired,
        
    } 
    render() {
        const user=this.props.auth.user
        return (
            <>
                <header>
                    <NavBarComponent user={this.props.auth} logout={this.props.logout} />
                </header>


                <div className="w-full h-screen flex flex-row items-start px-10 py-10 justify-left">

                <div className=" divide-y divide-gray-300 flex flex-col justify-start py-7 px-7 w-1/3 h-68  rounded shadow-lg">
                <div className="pb-3">
                <img alt="profile" src={user.pic} class="mx-auto object-cover rounded-full h-26 w-26 "/>
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
                <div className="w-1/2 h-1/4 mx-4 bg-red-300"></div> 
                </div>
                

                <footer>
                    <Footer/>
                </footer>
            </>
        )
    }
}

const mapStateToProps=state=>({
    
    auth:state.auth
 }) 

 export default connect(mapStateToProps,{logout})(withRouter(EditProfile))