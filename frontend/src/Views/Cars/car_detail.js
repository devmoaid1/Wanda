import React ,{ useEffect, Fragment } from "react"
import { useSelector,useDispatch} from 'react-redux'
import video from '../../videos/Overview- The innovative features of the all-new BMW 7 Series.---youtube-downloader---www.download.tube.mp4'
import NavBarComponent from "../Components/navbar" 
import {Link} from 'react-router-dom'
import Footer from '../Components/footer'
import { getCarById } from "../../actions/cars"
const CarDetail =(props)=>{
        
      const carState=useSelector((state)=>state.cars)
      const auth=useSelector((state)=>state.auth)
      const dispatch=useDispatch()
      const car=carState.car

      useEffect(()=>{
          const carId=props.match.params.carID
          dispatch(getCarById(carId))
          console.log(carState)

      },[])


          return(
           <Fragment>  
        <div className="w-full h-full" >
           <NavBarComponent  user={auth} />
        
            <video className=" w-full " autoPlay loop muted >
                <source src={video} type="video/mp4"></source>
            </video>
        
       <div className="w-full ">
        <div className=" text-4xl boldfont-sans text-justify my-6 ml-4 mt-10 h-full w-3/4 mx-auto ">{car.description}</div>
        <div className="lg:flex flex-row mx-auto sm:flex flex-col w-3/4 mt-10 divide-y divide-grey-600 ">
            <span className="font-bold text-2xl mx-2">CO2 emissions</span><span className="text-2xl ">{car.co2} (combined)</span>
            <span className=" ml -4 mx-2 font-bold text-2xl">Fuel consumption </span><span className="text-2xl ">{car.fuel} (combined) </span>
        </div>
        <h1 className="text-5xl font-bold  w-1/2  mt-20 mx-auto">{car.name} Product Highlight</h1> 
        <div className="flex flex-row w-full h-3/4 shadow-sm overflow-hidden mx-auto my-7"> 
        <img  className="w-3/4"src={car.picture} alt="car "> 
        </img>

        <div className="py-3 px-6 w-3/4 text-justify text-xl"> 
        {car.description}
        </div>
       
     
        </div>
        <div className=" mt-20 mx-auto w-3/4 h-full"><img className="mx-auto" src={car.picture2} alt="car "> 
        </img></div> 

        <div className="mx-auto my-10 w-1/2 text-3xl mr-10 ">
            {car.description2}
        </div>

        <div className=" mt-20 w-3/4 h-full"><img className="mx-auto" src={car.picture} alt="car "> 
        </img></div> 
        <div className="ml-20 mb-10 w-1/2 text-xl mr-10 ">
            {car.description}
        </div> 
        <div>
        <Link to={`/select/${car.id}`}> <button class="bg-red-600 hover:bg-red-700 text-white font-large py-2 px-8  rounded ml-20 my-10">
  Book Now
</button></Link>
        </div>

        <Footer/>
       </div>
       </div>
       </Fragment> 
        ) 
    }




export default CarDetail