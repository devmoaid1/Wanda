import React,{useEffect,useState} from 'react' 
import { useSelector,useDispatch} from 'react-redux'

import NavBarComponent from '../Components/navbar'
import bgphoto from'../../images/bgphoto.jpg' 
import getCars from '../../actions/cars'
import CarContainer from './car_container'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from '../Components/footer'
import ReactPaginate from 'react-paginate'


const CarsView =()=>{
 
  const dispatch=useDispatch()
  const homeState=useSelector((state)=>state.cars) //state 
  const auth =useSelector((state)=>state.auth) // user state
  const carsList=homeState.cars;//list of cars
  const[search,setSearch]=useState('') 
  
  const[pageNumber,setPageNumber]=useState(0)

  const carsPerPage=3 
  const pageVisited=pageNumber*carsPerPage 

  const pageCount=Math.ceil(carsList.length/carsPerPage)
  const filteredCars=carsList.filter(car=>{
    return car.name.toLowerCase().includes(search.toLowerCase())
  })// searching functionality
  
  const displayCars=filteredCars.slice(pageVisited,pageVisited+carsPerPage).map((car)=>{

    return <CarContainer car={car}/>

  }) 


  const changePage=({selected})=>{
    setPageNumber(selected)
  }
  useEffect(()=>{
    dispatch(getCars()) 
    
   },[])
  
   
  

  
 
   

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

           <div className="flex flex-row h-20 mt-10">
             <h1 className="text-3xl bold ml-20 mt-10">Latest Cars</h1>
             
             <div class=" bg-white-100 mt-10 mx-auto">
    <div class="container h-10  flex justify-center items-center overflow-hidden shadow-lg rounded-md">
        <div class="relative">
            <div class="absolute top-4 left-3"> <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div> <input type="text" onChange={e=>setSearch(e.target.value)} class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search Car..."/>
            <div class="absolute top-2 right-1"> <button class="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button> </div>
        </div>
    </div>
</div>
              
           
           
           </div>  
          <div className=" w-full h-1/2 my-10  lg:grid grid-cols-3 grid-row-2 gap-3 sm:grid grid-cols-1 gap-5">
         
          {displayCars}

          <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationbttns"}
          previousLinkClassName={"previousbttn"}
          nextLinkClassName={"nextbttn"}
          disabledClassName={"paginationDisabled"}
          />
          </div>
          <footer>
          <Footer/>
          </footer>
         
        
          
          
          
       
        
       
        </div>
      

    )
  


} 



export default CarsView;