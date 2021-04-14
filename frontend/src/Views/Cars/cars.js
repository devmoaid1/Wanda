import React,{Component,Fragment} from 'react' 
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {connect} from 'react-redux'
import getCars from '../../actions/cars'
import propTypes from 'prop-types' 
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'

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

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.picture} />
      <Card.Body>
        <Card.Title>{item.manfacture}{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{item.price} Egp</ListGroupItem>
        <ListGroupItem>{item.year}</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>




    ))
   } 

   static propTypes={
     cars:propTypes.array.isRequired
   }
 
    render(){

    return( 
        
        
        <Fragment>
          <div className="container"></div>
        <h2>Cars</h2>
        <div className="row gy-5 gx-10">
          <div className=""></div>
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