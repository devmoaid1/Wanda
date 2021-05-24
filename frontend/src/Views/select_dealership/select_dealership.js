import React ,{Component, Fragment,useState} from 'react'
import {getDealerships} from '../../actions/dealerships'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' 
import {Link} from 'react-router-dom' 
import {logout} from '../../actions/login' 
import NavBarComponent from '../Components/navbar' 
import Footer from '../Components/footer'
import Modal from 'react-modal'

Modal.setAppElement("#root")
class SelectDealership extends Component{

 static propTypes={
     getDealerships:propTypes.func.isRequired,
     logout:propTypes.func.isRequired,
     dealerships:propTypes.object.isRequired
 } 

 state={
   isOpen:false
 }

 ModalHandler=(dealer)=>{ 
   console.log(dealer.name)
   if(dealer.id===1){
    return(
      <div>    <Modal  isOpen={this.state.isOpen} onRequestClose={this.onClose}>
           <h1>Are You sure you want to select {dealer.name} ?</h1>
           <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-2 rounded">
             Confirm
         </button>  
         <button onClick={this.onClose}>close</button>
         </Modal> 
         </div>
  
    )
  }
  
  
   

  
}
onSelect=()=>{
  this.setState({isOpen:true})
}
onClose=()=>{
  this.setState({isOpen:false})
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
    const carID=this.props.match.params.carID
   
    return dealerships.map((item)=>( 
      
        item.cars.filter((item)=>item===carID)?      
      <div className=" card hover:shadow-lg flex flex-row rounded-md   bg-white overflow-hidden shadow-md mt-7 w-3/4 h-60 mx-auto " key={item.id}>
        <div > <img src={item.pic} className="w-60 h-60 object-cover"alt="pic"></img></div>
         
        
        <div className="flex flex-col w-3/4 h-full px-3 py-2">
        <h1 className="text-3xl font-bold ml-4 ">{item.name}</h1>

        <div className=" flex font-sans ml-4 mt-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 inline-block mr-2" viewBox="0 0 20 20" fill="#f75454">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
       </svg>    
        <h3 className=" text-md">{item.phone}</h3>
        </div>

        <div className=" flex font-sans ml-4 mt-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 inline-block mr-2 " viewBox="0 0 20 20" fill="#f75454">
         <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>   
        <h3 className=" text-md">{item.address}</h3>
        </div> 

        <div className=" flex font-sans ml-4 mt-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 inline-block mr-2" viewBox="0 0 20 20" fill="#f75454">
        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
        <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>  
        <h3 className=" text-md">{item.stock}</h3>
        </div>


        <div className="   flex flex-row mt-4 justfiy-center  ">
       <Link to={`/book/${carID}/${item.id}`} > <button onClick={this.onSelect}  class="bg-red-600 hover:bg-red-700 text-white font-large py-2 px-2 mx-2 rounded">
        Select 
       </button>
       </Link>
     </div>  
        

        </div>  
        {this.ModalHandler(item)}
        </div>
      
          :null
     

    ))
   } 
   
 render(){ 

    const {car}=this.props.dealerships 
    var nf = new Intl.NumberFormat();
     return( 
           <Fragment>
         <header>
             <NavBarComponent user={this.props.auth} logout={this.props.logout}/>
         </header>
        
         <div className="w-full h-full flex flex-row "> 
         <div className=" card hover:shadow-lg w-1/2 h-1/2 my-20 ml-12  shadow-md bg-white overflow-hidden ">
         <img  className="w-full h-60 sm:h-64 object-cover " src={car.picture} alt="carphoto"></img> 
        
           <div className="m-4 h-full">
         <h1 className="text-3xl font-bold">{car.name}</h1> 
         <div className="w-full">
         
         <span className="text-sm text-grey-500 mt-8 text-justify">{car.description} </span>
         </div>
         <div>
         
         <span className="text-md text-gray-700  mt-15 ">{nf.format(car.price)} <span className="font-bold">EGP</span></span>
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