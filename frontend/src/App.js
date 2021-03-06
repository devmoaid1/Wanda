

import 'antd/dist/antd.css'; 
import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import {Provider} from 'react-redux'
//import store from './store'

import BaseRouter from './routes'
//import {connect} from 'react-redux'

//import * as actions from './actions/signup'
import Root from './store';
import { ToastContainer } from "react-toastify";

//import authReducer from './reducers/auth'

class App extends Component {
  
  // componentDidMount(){
  //   this.props.onTryAutoSignUp()
  // }
  render(){
    return (
  
      <div className="min-h-full">
        <div className="h-screen flex flex-col">
        <ToastContainer hideProgressBar={false}  newestOnTop={true}/>
         <Root>
        
        
         <BaseRouter />
        
         </Root> 
         </div> 
      </div>

  );
  }
  
}


// const mapStateToProps=state=>{
//   return {
//     isAuthenticated:state.token!==null
//    }
// } 

// const mapDispatchToProps=dispatch=>{
//   return {
//     onTryAutoSignUp:()=>dispatch(actions.authCheckState())
//    }
// }
  
export default App;
