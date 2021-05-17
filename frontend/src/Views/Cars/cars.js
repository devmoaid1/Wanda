import React,{Component} from 'react' 
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {connect} from 'react-redux'
import getCars from '../../actions/cars'
import propTypes from 'prop-types' 
import {Link} from 'react-router-dom' 
import NavBarComponent from '../Components/navbar'
import bgphoto from'../../images/bgphoto.jpg' 
import {logout} from '../../actions/login' 
import { withRouter } from "react-router-dom"; 
import Footer from '../Components/footer'


class CarsView extends Component{
 
  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.auth.user)
    console.log(this.props.auth.token)
  }
    
    
    componentDidMount(){
      
     this.props.getCars(); 
     console.log(this.props.auth);
      
    }
    
   renderCarList(){
    const newitems=this.props.cars;
    //let path=`/catalog/${item.id}`
    return newitems.map((item)=>( 
      
      <div className=" flex flex-col   rounded-md bg-white ml-3 mr-3 overflow-hidden shadow-lg hover:shadow-xlg h-full " key={item.id}>
        <div className="w-full h-1/2">
        <img src={item.picture} className="w-full h-full" alt="pic"></img>
        </div>
        <div className="flex flex-col px-3 space-y-6">
        <h1 className="text-2xl font-semibold ">{item.name}</h1>
      
        <span className="block font-medium text-gray-600">{(item.price).toLocaleString('en')} Egp</span> 

        <div className="inline-block ">
        <Link to={`/select/${item.id}`}> <button class="bg-red-600 hover:bg-red-700 text-white font-large py-2 px-8  rounded">
  Book Now
</button></Link>
<Link to={`/catalog/${item.id}`}> <button class="bg-gray-800 hover:bg-gray-700 text-white font-large py-2 px-4  rounded">
  View Catalog
</button> </Link>
        </div>     
        </div>
      </div>



    ))
   } 

   static propTypes={
     cars:propTypes.array.isRequired,
     logout:propTypes.func.isRequired
   }
 
    render(){

    return( 
        
        
        <div className="w-full h-full"> 
        <NavBarComponent logout={this.props.logout} user={this.props.auth}/>
        
          <div 
          className="relative flex items-center justify-center w-full h-4/6 object-contain bg-cover bg-center bg-fixed bg-no-repeat "
          style={{
            backgroundImage:`url(${bgphoto})`

          }}>
          <h1 className="relative left-0 top-0  text-white font-bold uppercase  text-center  md:text-6xl">Get Your Car NOW</h1>
          <div
           className="z-0 absolute -top-0 left-0 h-full w-full opacity-40 "
          
          />
           </div>

           <div><h1 className="text-3xl bold ml-20 mt-10">Latest Cars</h1></div>  
          <div className=" w-full h-1/2 my-10  lg:grid grid-cols-3 grid-row-2 gap-3 sm:grid grid-cols-1 gap-5">
         
          {this.renderCarList()}
          </div>
          <footer>
          <Footer/>
          </footer>
         
        
          
          
          
       
        
       
        </div>
       


    )
 } 


} 

const mapStateToProps=state=>({
 cars:state.cars.cars,
 auth:state.auth
})

export default connect(mapStateToProps,{getCars,logout})(withRouter(CarsView));