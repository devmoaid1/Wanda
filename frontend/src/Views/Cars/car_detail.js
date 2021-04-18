import React ,{ Component } from "react"
import axios from 'axios'

class CarDetail extends Component{
   
     state={
         car:{}
     }
      

    async componentDidMount(){ 
      const carId=this.props.match.params.carID
      console.log(carId)
      axios.get(`/api/cars/${carId}`).then(res=>this.setState({
          car:res.data
      }));
        

     }
    render() {
        const car=this.state.car
          return(

            <div className="w-full h-full">

<div className="rounded-md bg-white ml-3 mr-3 mt-3 overflow-hidden shadow-lg h-full w-1/3 mx-auto " >
        <img src={car.picture} className="w-full"alt="pic"></img>
        <h1 className="text-2xl font-bold ml-4 my-3">{car.name}</h1>
        <div className="font-sans my-6 ml-4">{car.description}</div>
        <span className="block my-6 ml-4 font-bold">{car.price} Egp</span> 
            </div> 
            </div>
        )
    }
}


export default CarDetail