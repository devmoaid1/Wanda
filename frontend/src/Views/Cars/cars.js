import React,{Component,Fragment} from 'react' 
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {connect} from 'react-redux'
import getCars from '../../actions/cars'
import propTypes from 'prop-types' 

import './cars.css'
import bgphoto from'../../images/bgphoto.jpg'

class CarsView extends Component{
 
   /*constructor(props){

     super(props); 
     this.state={
         cars:[]
     }


    }
     */
    
    
    componentDidMount(){
      
     this.props.getCars(); 
     console.log(this.props);
      
    }
    
   renderCarList(){
    const newitems=this.props.cars;
    return newitems.map((item)=>(
      <div className="rounded-md bg-white ml-3 mr-3 overflow-hidden shadow-lg h-5/6  " key={item.id}>
        <img src={item.picture} className="w-full"alt="pic"></img>
        <h1 className="text-2xl font-bold ml-4 my-3">{item.name}</h1>
        <div className="font-sans my-6 ml-4">{item.description}</div>
        <span className="block my-6 ml-4 font-bold">{item.price} Egp</span> 
        <div className="inline-block ">
        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 ml-3 mx-2 rounded">
  Purchase
</button>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
  View details
</button>
        </div>     
      </div>



    ))
   } 

   static propTypes={
     cars:propTypes.array.isRequired
   }
 
    render(){

    return( 
        
        
        <Fragment>
          <div 
          className="relative flex items-center justify-center h-full bg-cover bg-center bg-fixed bg-no-repeat "
          style={{
            backgroundImage:`url(${bgphoto})`

          }}>
          <h1 className="relative left-0 top-0  text-white font-bold uppercase  text-center  md:text-6xl">Get Your Car NOW</h1>
          <div
           className="z-0 absolute -top-0 left-0 h-full w-full opacity-40 "
          
          />
           </div>
           
          <div className=" w-full h-full mx-auto my-10  grid grid-cols-3 gap-3">
            
          {this.renderCarList()}
          </div>
          
          
       
        
       
        </Fragment>
       


    )
 } 


} 

const mapStateToProps=state=>({
 cars:state.cars.cars
})

export default connect(mapStateToProps,{getCars})(CarsView);