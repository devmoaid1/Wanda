import React,{Component} from 'react' 
import axios from 'axios';

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

            <div key={item.id}>

              <p>Name:{item.name}</p>
              <p>Brand:{item.brand}</p>
              <p>Price:{item.price}</p>
              <p>Color:{item.color}</p>
              <p>Year:{item.year}</p>
              <p>Quantity:{item.quantity}</p>
              

            </div>




    ))
   }
 
    render(){

    return(

        <div>
          {this.renderCarList()}
        </div>



    )
 } 


} 


export default CarsView;