import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"; 
import propTypes from 'prop-types'
import {logout} from '../../../actions/login'
import NavBarAdmin from '../../Components/navbar_admin'
import Footer from'../../Components/footer'
import {getDealers} from '../../../actions/dashboard'
 class DashboardScreen extends Component {
    
    componentDidMount(){
        this.props.getDealers()
    }

    componentDidUpdate(){
        console.log(this.props.dashboard)
        console.log(this.props.auth)
    }
    
    
    static propTypes={
        
        logout:propTypes.func.isRequired,
        getDealers:propTypes.func.isRequired
      }
    render() {
        return (
            <>
            <header>
                <NavBarAdmin logout={this.props.logout} user={this.props.auth}/>
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
    
    auth:state.auth,
    dashboard:state.dashboard
   })


export default connect(mapStateToProps,{logout,getDealers})(withRouter(DashboardScreen))
