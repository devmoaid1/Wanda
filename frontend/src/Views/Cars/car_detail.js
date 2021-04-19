import React ,{ Component } from "react"
import axios from 'axios'
import video from '../../videos/Overview- The innovative features of the all-new BMW 7 Series.---youtube-downloader---www.download.tube.mp4'

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

      console.log(video)
        

     }
    render() {
        const car=this.state.car
          return(

        <div >
        <div className="w-full h-full ">
            <video className="w-full" autoPlay loop muted >
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
       <div className="w-full h-full">
        <div className=" text-4xl boldfont-sans text-justify my-6 ml-4 mt-10 h-full w-3/4 mx-auto ">{car.description}</div>
        <div className="flex flex-row mx-auto w-3/4 mt-30 divide-y divide-grey-600 ">
            <span className="font-bold text-2xl mx-2">CO2 emissions</span><span className="text-2xl ">259–238 g/km (combined)</span>
            <span className=" ml -4 mx-2 font-bold text-2xl">Fuel consumption </span><span className="text-2xl ">11.3–10.4 l/100 km (combined) </span>
        </div> 
        <h1 className="text-5xl font-bold  w-1/2  mt-20 mx-auto">{car.name} Product Highlight</h1> 
        <div className="flex flex-row w-full h-3/4 shadow-sm overflow-hidden mx-auto my-7"> 
        <img  className="w-3/4"src={car.picture} alt="car "> 
        </img>

        <div className="py-3 px-6 w-3/4 text-justify text-xl"> 
        {car.description}
        </div>
       
     
        </div>
        <div className=" mt-20 h-full"><img className="mx-auto" src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/m-series/m5-sedan/2021/bmw-m5-cs-03-01-listicle-desktop.jpg?imwidth=1920" alt="car "> 
        </img></div> 

        <div className="mx-auto my-10 w-1/2 text-3xl mr-10 ">
            {car.description}
        </div>

        <div className=" mt-20 h-full"><img className="mx-auto" src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/all-models/m-series/m5-sedan/2021/bmw-m5-cs-03-03-listicle-desktop.jpg?imwidth=1920" alt="car "> 
        </img></div> 
        <div className="ml-20 w-1/2 text-xl mr-10 ">
            {car.description}
        </div>
        <div style={{background:'#091c29'}} className=" text-white mt-20 h-1/4 w-full text-xl mx-auto bg-red-300 text-center py-10 ">
             Copyrights reserved 2021
        </div>
       </div>
       </div>
        ) 
    }
}


export default CarDetail