import React,{Component,Fragment} from 'react'; 
import{Container,Form ,Col,Row,Button,Spinner} from 'react-bootstrap'; 
//import logo from '../images/wanda.svg'
import logphoto from '../../images/loginphoto.jpeg' 
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import '../Login/login.css'

class SignUpForm extends Component{
    
  

    render(){

        let errorMassage=null;
        if(this.props.error){
            errorMassage=(<p> {this.props.error.massage}</p>)
                
            
        }
        return(
            <Fragment>
                {errorMassage} 
           {
                 this.props.loading?
            
            
                 <Spinner animation="border" variant="danger" />:
            
            <div>  
                
                <div className="mb-10 mt-4 h-full w-full">




             <Container id="LoginContainer" >
               <Row noGutters={true}>
                   <Col lg={5}> <img src={logphoto} className="img-fluid" alt="logo"></img></Col>

                   <Col className="lg-8 px-5 pt-5">
                    <h1 className=" text-5xl font-bold mb-3">Sign Up</h1>
                    <h4 >Sign Up with a new Account</h4>
                   <Form>
            
<Form.Group className="form-row" id="formHorizontalEmail">
    <Col lg={7} >
      <Form.Control type="email" placeholder="Email" className="form-control my-2 p-4" />
    </Col>
</Form.Group>
<Form.Group className="form-row" id="formHorizontalEmail">
    <Col lg={7} >
      <Form.Control type="password" placeholder="password" className="form-control my-2 p-4" />
    </Col>
</Form.Group>
<Form.Group className="form-row" id="formHorizontalEmail">
    <Col lg={7} >
      <Form.Control type="text" placeholder="FullName" className="form-control my-2 p-4" />
    </Col>
</Form.Group>

<Form.Group className="form-row" id="formHorizontalPassword">
    <Col lg={7}>
      <Form.Control type="text" placeholder="Phone Number" className="form-control my-2 p-4" />
    </Col>
 </Form.Group>
 <Form.Group className="form-row" id="formHorizontalPassword">
    <Col lg={7}>
      <Form.Control type="text" placeholder="Address" className="form-control my-2 p-4" />
    </Col>
 </Form.Group> 


<Form.Group className="form-row">
    <Col lg={7}>
      <Button type="submit"  className="btn1">Sign UP</Button>
    </Col>
</Form.Group>

     
</Form>
</Col>
                   
                                 

</Row>
               


             </Container> 
             </div>
                
                 </div>
            
    }

            </Fragment>
        )
    }
} 



const mapStateToProps=state=>{
    return{
        loading:state.loading,
        error:state.error
    }
}

export default connect(mapStateToProps)(SignUpForm);