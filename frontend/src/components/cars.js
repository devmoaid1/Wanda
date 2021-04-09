import React,{Component} from 'react' 
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
class CarsView extends Component{
 
   constructor(props){

     super(props); 
     this.state={
         cars:[]
     }


    } 
    
    
    componentDidMount(){
      
      axios
      .get("/api/cars/")
      .then((res) => this.setState({ cars: res.data }))
      .catch((err) => console.log(err));
      
    }
    
   renderCarList(){
    const newitems=this.state.cars;
    return newitems.map((item)=>(

            <div className="carcontainer" class="col-sm-7" key={item.id}>

              <img src={item.picture} alt="carphoto"></img>
              <p>{item.Manfacture}{item.name}</p>
              <div><p>{item.description}</p></div>
              <p>{item.price} EGP</p>
              
              

            </div>




    ))
   }
 
    render(){

    return( 

        <div class="container">
        <div class="row">
          {this.renderCarList()}
        </div>
        </div> 



    )
 } 


} 


export default CarsView;