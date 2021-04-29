import React ,{Component, Fragment} from 'react'
import {getDealerships} from '../../actions/dealerships'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' 
import {Link} from 'react-router-dom' 
import {logout} from '../../actions/login' 
import NavBarComponent from '../Components/navbar' 
import Footer from '../Components/footer'

class SelectDealership extends Component{

 static propTypes={
     getDealerships:propTypes.func.isRequired,
     logout:propTypes.func.isRequired,
     dealerships:propTypes.object.isRequired
 } 

 


 componentDidMount(){ 
    // const car= this.props.dealerships.car
    const carId=this.props.match.params.carID
     this.props.getDealerships(carId);
     
    

 } 
componentDidUpdate(){
    console.log(this.props.dealerships)
}

 renderCarList(){
    const {dealerships}=this.props.dealerships; 
    const carId=this.props.match.params.carID
    //let path=`/catalog/${item.id}`
    return dealerships.map((item)=>( 
      
      <div className=" card hover:shadow-lg flex flex-row rounded-md   bg-white overflow-hidden shadow-md mt-7 w-3/4 h-60 mx-auto " key={item.id}>
        <div > <img src={item.pic} className="w-60 h-60 object-cover"alt="pic"></img></div>
         
        
        <div className="flex flex-col w-3/4 h-full px-3 py-2">
        <h1 className="text-3xl font-bold ml-4 ">{item.name}</h1>

        <div className=" flex font-sans ml-4 mt-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 inline-block mr-2" viewBox="0 0 20 20" fill="red">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
       </svg>    
        <h3 className=" text-md">{item.phone}</h3>
        </div>

        <div className=" flex font-sans ml-4 mt-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 inline-block mr-2 " viewBox="0 0 20 20" fill="red">
         <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>   
        <h3 className=" text-md">{item.address}</h3>
        </div> 

        <div className=" flex font-sans ml-4 mt-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 inline-block mr-2" viewBox="0 0 20 20" fill="red">
        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
        <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>  
        <h3 className=" text-md">{item.stock}</h3>
        </div>


        <div className="   flex flex-row mt-4 justfiy-center  ">
       <Link to={`/book/${carId}/${item.id}`}> <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-2 rounded">
        Select
       </button> </Link>
     </div>  
        

        </div>  
        </div>
      



    ))
   } 
   
 render(){ 

    const {car}=this.props.dealerships
     return( 
           <Fragment>
         <header>
             <NavBarComponent user={this.props.auth} logout={this.props.logout}/>
         </header>
        
         <div className="w-full h-full flex flex-row "> 
         <div className=" card hover:shadow-lg w-1/2 h-1/3 my-20 ml-12  shadow-md bg-white overflow-hidden ">
         <img  className="w-full h-60 sm:h-64 object-cover shadow-md" src={car.picture} alt="carphoto"></img> 
        
           <div className="m-4 h-full">
         <h1 className="text-3xl font-bold">{car.name}</h1> 
         <div className="w-full">
         
         <span className="text-sm text-grey-500 mt-8 text-justify">{car.description} </span>
         </div>
         <div>
         <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline-block" viewBox="0 0 20 20" fill="red">
         <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
         </svg>
         <span className="text-sm  mt-15 ">{car.price} <span className="font-bold">EGP</span></span>
         </div> 
       
         </div>
           
                 
         
         </div>
         
         <div className="flex flex-col  w-full h-full ml-30 px-5 py-3  bg-white "> 
         <div className="justify-start ml-17  mx-auto"> <h1 className="text-3xl font-bold "> Select Dealer</h1></div>   
         {this.renderCarList()}
         


     </div> 
         </div>
         <footer >
         <Footer/>
         </footer>
      
             
      
     </Fragment>
     )
 }



} 


const mapStateToProps=state=>({
   dealerships:state.dealerships,
   auth:state.auth
})

export default connect(mapStateToProps,{getDealerships,logout})(withRouter(SelectDealership))