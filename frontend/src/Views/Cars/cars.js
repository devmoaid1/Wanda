import React,{useEffect} from 'react' 
import { useSelector,useDispatch} from 'react-redux'

import NavBarComponent from '../Components/navbar'
import bgphoto from'../../images/bgphoto.jpg' 
import getCars from '../../actions/cars'
import CarContainer from './car_container'
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Footer from '../Components/footer'


const CarsView =()=>{
 
   const dispatch=useDispatch()
   const homeState=useSelector((state)=>state.cars) 
   const auth =useSelector((state)=>state.auth) 
   
   useEffect(()=>{
    dispatch(getCars()) 
    
   },[])
  
   
  const renderCarList=()=>{
    const newitems=homeState.cars;
   
    return newitems.map((item)=>( 
      
      <CarContainer car={item}/>



    ))
   } 

  
 
   

    return( 
        
     

         
        
        <div className="w-full h-full"> 
        <NavBarComponent  user={auth}/>
        
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