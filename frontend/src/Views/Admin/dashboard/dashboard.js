import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"; 
import propTypes from 'prop-types'
import {logout} from '../../../actions/login'
import NavBarComponent from '../../Components/navbar'
import Footer from'../../Components/footer'
export class DashboardScreen extends Component {
    
    
    
    
    static propTypes={
        
        logout:propTypes.func.isRequired
      }
    render() {
        return (
            <>
            <header>
                <NavBarComponent logout={this.props.logout} user={this.props.auth}/>
            </header>
            <div className="w-full h-full">
                <div className="grid grid-cols-3 px-3 py-3 gap-4">
                    <div className=" flex flex-col bg-red-300"> 
                    <h1 className="text-xl">
                    hello 1
                    </h1>

                    <h1 className="text-xl">
                    hello 1
                    </h1>
                    
                    
                    </div>
                    <div className="bg-yellow-300">hello 2</div>
                    <div className="bg-green-300"> hello 3</div>
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
    
    auth:state.auth
   })


export default connect(mapStateToProps,{logout})(withRouter(DashboardScreen))
