import React,{Component,Fragment} from 'react' 
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {connect} from 'react-redux'
import getCars from '../../actions/cars'
import propTypes from 'prop-types' 
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'
import './cars.css'
import bgphoto from'../../images/bgphoto.jpg'

class CarsView extends Component{
 
   /*constructor(props){

     super(props); 
     this.state={
         cars:[]
     }


    }
     */
    
    
    componentDidMount(){
      
     this.props.getCars(); 
     console.log(this.props);
      
    }
    
   renderCarList(){
    const newitems=this.props.cars;
    return newitems.map((item)=>(
      <div >
      <Card >
      <Card.Img variant="top" src={item.picture} />
      <Card.Body>
        <Card.Title>{item.manfacture}{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{item.price} Egp</ListGroupItem>
        
      
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>



    ))
   } 

   static propTypes={
     cars:propTypes.array.isRequired
   }
 
    render(){

    return( 
        
        
        <Fragment>
        
           <img className="w-full" src={bgphoto} alt="bgphoto"></img>
         
           
          <div className=" mt-8 grid grid-cols-3 gap-4">
            
          {this.renderCarList()}
          </div>
          
          
       
        
       
        </Fragment>
       


    )
 } 


} 

const mapStateToProps=state=>({
 cars:state.cars.cars
})

export default connect(mapStateToProps,{getCars})(CarsView);