import React ,{Component, Fragment} from 'react'
import {getDealerships} from '../../actions/dealerships'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' 
import {Link} from 'react-router-dom' 
import {logout} from '../../actions/login' 
import NavBarComponent from '../Components/navbar' 
import Footer from '../Components/footer'

class SelectDealership extends Component{

 static propTypes={
     getDealerships:propTypes.func.isRequired,
     logout:propTypes.func.isRequired,
     dealerships:propTypes.object.isRequired
 } 

 


 componentDidMount(){ 
    const car= this.props.dealerships.car
    const carId=this.props.match.params.carID
     this.props.getDealerships(carId);
     
    

 } 
componentDidUpdate(){
    console.log(this.props.dealerships)
}

 renderCarList(){
    const {dealerships}=this.props.dealerships;
    //let path=`/catalog/${item.id}`
    return dealerships.map((item)=>( 
      
      <div className=" flex flex-row rounded-md   bg-white overflow-hidden shadow-lg my-2 w-1/3 h-1/4 mx-auto " key={item.id}>
        <img src={item.pic} className="w-1/2 h-full"alt="pic"></img> 
        <div>
        <h1 className="text-2xl font-bold ml-4 my-3">{item.name}</h1>
        <div className="font-sans my-3 ml-1 px-3 h-1/6 text-justify">{item.phone}</div>
        <span className="block my-3 ml-4 font-bold">{item.stock} Egp</span> 
        <div className="inline-block ">
       
<Link to={`/catalog/${item.id}`}> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
  View Catalog
</button> </Link>
        </div>   
        </div>  
      </div>



    ))
   } 
   
 render(){ 

    const {car}=this.props.dealerships
     return( 
           <Fragment>
         <header>
             <NavBarComponent user={this.props.auth} logout={this.props.logout}/>
         </header>
        
         <div className="w-full h-screen flex flex-row"> 
         
         <img  className="w-1/2" src={car.picture} alt="carphoto"></img> 
         <h1>{car.name}</h1>
         <div className="flex flex-col  w-full h-full ml-30 shadow-md bg-red-300 "> 
         <div className="mx-auto"> <h1 className="text-3xl text-bold "> Select Dealer</h1></div>   
         {this.renderCarList()}
         


     </div> 
         </div>
         <footer >
         <Footer/>
         </footer>
      
             
      
     </Fragment>
     )
 }



} 


const mapStateToProps=state=>({
   dealerships:state.dealerships,
   auth:state.auth
})

export default connect(mapStateToProps,{getDealerships,logout})(withRouter(SelectDealership))