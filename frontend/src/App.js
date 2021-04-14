

import 'antd/dist/antd.css'; 
import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import {Provider} from 'react-redux'
//import store from './store'
import {BrowserRouter} from 'react-router-dom';
import BaseRouter from './routes'
import {connect} from 'react-redux'
import NavBarComponent from './Views/Components/navbar'
import * as actions from './actions/auth'
//import authReducer from './reducers/auth'

class App extends Component {
  
  componentDidMount(){
    this.props.onTryAutoSignUp()
  }
  render(){
    return (
  
      <div > 
         <BrowserRouter {...this.props}>
         <NavBarComponent />
         <BaseRouter />
         </BrowserRouter>
      </div>

  );
  }
  
}


const mapStateToProps=state=>{
  return {
    isAuthenticated:state.token!==null
   }
} 

const mapDispatchToProps=dispatch=>{
  return {
    onTryAutoSignUp:()=>dispatch(actions.authCheckState())
   }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(App);
