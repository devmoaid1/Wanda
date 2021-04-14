import React,{Component} from 'react' 
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {connect} from 'react-redux'
import getCars from '../../actions/cars'
import propTypes from 'prop-types' 


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

            <div id="carcontainer" className="col-sm-5" key={item.id}>

              <img src={item.picture} alt="carphoto"></img>
              <p>{item.Manfacture}{item.name}</p>
              <div><p>{item.description}</p></div>
              <p>{item.price} EGP</p>
              
              

            </div>




    ))
   } 

   static propTypes={
     cars:propTypes.array.isRequired
   }
 
    render(){

    return( 
        
        
        <div className="container">
        <h2>Cars</h2>
        <div className="row">
          {this.renderCarList()}
        </div>
        </div> 
       


    )
 } 


} 

const mapStateToProps=state=>({
 cars:state.cars.cars
})

export default connect(mapStateToProps,{getCars})(CarsView);