import React ,{Component, Fragment} from 'react'
import {getDealership} from '../../actions/booking'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' 
import {Link} from 'react-router-dom' 
import {logout} from '../../actions/login' 
import NavBarComponent from '../Components/navbar' 
import Footer from '../Components/footer'


class BookingView extends Component{
    

    componentDidMount(){
        this.props.getDealership(1,1)
    } 

    componentDidUpdate(){
        console.log(this.props.booking)
    }
    static propTypes={
        getDealership:propTypes.func.isRequired,
        logout:propTypes.func.isRequired,
        booking:propTypes.object.isRequired
    } 
  render(){
      return( 
          <Fragment>        <header>
        <NavBarComponent user={this.props.auth} logout={this.props.logout}/>
    </header>
          <div>
              this booking view
          </div> 

          <footer >
         <Footer/>
         </footer>
          </Fragment>

      )
  }

} 

const mapStateToProps=state=>({
    booking:state.booking,
    auth:state.auth
 }) 

 export default connect(mapStateToProps,{getDealership,logout})(withRouter(BookingView))