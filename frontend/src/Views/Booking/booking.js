import React ,{Component, Fragment} from 'react'
import {getDealership} from '../../actions/booking'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' 
import {Link} from 'react-router-dom' 
import {logout} from '../../actions/login' 
import NavBarComponent from '../Components/navbar' 
import Footer from '../Components/footer' 
import clockPhoto from '../../images/booking.jpeg'


class BookingView extends Component{
    

    componentDidMount(){ 
        const car=this.props.match.params.carID
        const dealer=this.props.match.params.dealerID
        this.props.getDealership(car,dealer)
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
          <div className="bg-gray-100">        <header>
        <NavBarComponent user={this.props.auth} logout={this.props.logout}/>
    </header>
          <div className="w-full h-screen bg-gray-100 ">
              <div className=" flex flex-row w-3/4 h-3/4 bg-red-300 mx-auto my-20 rounded overflow-hidden shadow-lg">
                
           <img className="w-1/2 h-full " src={clockPhoto} alt="clock"></img> 
           <div className=" flex flex-col w-1/2 h-full bg-green-400 py-4 px-2">
            
            <div className="mx-auto flex flex-row"> <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>  <h1 className=" ml-2 inline-block font-bold text-3xl">Booking details</h1></div>
             <div className="mx-auto mt-6"><h1 className="text-xl">Specify booking date and time</h1></div>
           </div> 
             

                  
              </div>
          </div> 

          <footer >
         <Footer/>
         </footer>
          </div>

      )
  }

} 

const mapStateToProps=state=>({
    booking:state.booking,
    auth:state.auth
 }) 

 export default connect(mapStateToProps,{getDealership,logout})(withRouter(BookingView))