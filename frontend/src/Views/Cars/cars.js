import React,{useState,useEffect} from 'react' 

import 'bootstrap/dist/css/bootstrap.min.css'; 

import { useSelector,useDispatch} from 'react-redux'
import getCars from '../../actions/cars'
 
import {Link} from 'react-router-dom' 
import NavBarComponent from '../Components/navbar'
import bgphoto from'../../images/bgphoto.jpg' 
import {logout} from '../../actions/login' 

import Footer from '../Components/footer'


const CarsView =()=>{
 
   const dispatch=useDispatch()
   const carsState=useSelector((state)=>state.cars) 
   const auth =useSelector((state)=>state.auth) 
   const [carsList,setCars]=useState(null)
   useEffect(()=>{
    dispatch(getCars()) 
    setCars(carsState.cars)
     
    
   },[])
  
   console.log(carsList)
  const renderCarList=()=>{
    const newitems=carsState.cars;
   
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

  
 
   

    return( 
        
        
        <div className="w-full h-full"> 
        <NavBarComponent logout={logout} user={auth}/>
        
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
         
          {renderCarList()}
          </div>
          <footer>
          <Footer/>
          </footer>
         
        
          
          
          
       
        
       
        </div>
       


    )
  


} 



export default CarsView;