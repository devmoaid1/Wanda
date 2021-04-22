import React,{Component} from 'react'; 
import logo from'../../images/wandalogo.svg'
import './navbar.css'
import {connect} from 'react-redux'
import {logout} from '../../actions/login' 
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";



class NavBarComponent extends Component {
  

   onlogout(){
     this.props.logout()
   }


  
  render(){
    const {user}=this.props.auth
    return (
      <div style={{background:'#091c29'}}>
        <div className="flex items-center justify-between w-10/12 mx-auto py-1 text-white"> 
          <div className="flex flex-row justify-left pt-3  text-white"><img width="50"
          height="50" src={logo} alt="logo"></img>        
          
           <h1 className="text-2xl font-sans font-bold text-white"> Wanda</h1>
          </div>
           <div className="inline-block">
             <span className="text-xl mr-4  focus:ring-white"><a className=" hover:purple-700" href="/home/">Home</a></span>
             <span  className="text-xl mr-4"><a href="/cars/">Cars</a></span>
             {/* { this.props.isAuthenticated? */}
            {/* //  <span  className="text-xl mr-4"><a href="/login/" onClick={this.props.logout}>Logout</a></span>: */}
             <span  className="text-xl mr-4"><a href="/" onClick={this.onLogout}>Logout</a></span>
             <span  className="text-xl mr-4"><a href="/login/" onClick={this.onLogout}>{user.name}</a></span> 
             {/* } */}
           </div>
  
        </div>
      </div>
    )
 
  }
  
}


NavBarComponent.propTypes={

 logout:PropTypes.func.isRequired,
 auth:PropTypes.object.isRequired
}


const mapStateToProps=state=>({
  auth:state.auth
})


export default connect(mapStateToProps,{logout})( withRouter(NavBarComponent));

