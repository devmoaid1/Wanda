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
  }
    
    
    componentDidMount(){
      
     this.props.getCars(); 
     console.log(this.props.auth);
      
    }
    
   renderCarList(){
    const newitems=this.props.cars;
    //let path=`/catalog/${item.id}`
    return newitems.map((item)=>( 
      
      <div className="rounded-md bg-white ml-3 mr-3 overflow-hidden shadow-lg h-8/9 " key={item.id}>
        <img src={item.picture} className="w-full h-1/2"alt="pic"></img>
        <h1 className="text-2xl font-bold ml-4 my-3">{item.name}</h1>
        <div className="font-sans my-6 ml-1 px-3 h-1/6 text-justify">{item.description}</div>
        <span className="block my-6 ml-4 font-bold">{item.price} Egp</span> 
        <div className="inline-block ">
        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 ml-3 mx-2 rounded">
  Book Now
</button>
<Link to={`/catalog/${item.id}`}> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
  View Catalog
</button> </Link>
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
          className="relative flex items-center justify-center w-full h-1/2 bg-cover bg-center bg-fixed bg-no-repeat "
          style={{
            backgroundImage:`url(${bgphoto})`

          }}>
          <h1 className="relative left-0 top-0  text-white font-bold uppercase  text-center  md:text-6xl">Get Your Car NOW</h1>
          <div
           className="z-0 absolute -top-0 left-0 h-full w-full opacity-40 "
          
          />
           </div>

           <div><h1 className="text-3xl bold ml-20 mt-10">Latest Cars</h1></div>  
          <div className=" w-full h-1/2 mx-auto my-10  grid grid-cols-3 gap-3">
         
          {this.renderCarList()}
          </div>
          <div className=" w-full h-1/2 mx-auto my-10  grid grid-cols-3 gap-3">
         
         {this.renderCarList()}
         </div>
          <div className="w-full ">
          <Footer/>
          </div>
          
          
       
        
       
        </div>
       


    )
 } 


} 

const mapStateToProps=state=>({
 cars:state.cars.cars,
 auth:state.auth
})

export default connect(mapStateToProps,{getCars,logout})(withRouter(CarsView));