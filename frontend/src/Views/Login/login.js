import React,{Component,Fragment} from 'react'; 
import{Container,Form ,Col,Row,Button,Spinner} from 'react-bootstrap'; 
//import logo from '../images/wanda.svg'
import logphoto from '../../images/loginphoto.jpeg' 
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import './login.css'

class LoginForm extends Component{
    
  

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
                
                <div className="mb-10 mt-2">




             <Container id="LoginContainer" >
               <Row noGutters={true}>
                   <Col lg={5}> <img src={logphoto} className="img-fluid" alt="logo"></img></Col>

                   <Col className="lg-7 px-5 pt-5">
                    <h1 className=" text-5xl font-bold mb-3">Wanda</h1>
                    <h4 >Sign in into your account</h4>
                   <Form>
            
<Form.Group className="form-row" id="formHorizontalEmail">
    <Col lg={7} >
      <Form.Control type="email" placeholder="Email" className="form-control my-3 p-4" />
    </Col>
</Form.Group>

<Form.Group className="form-row" id="formHorizontalPassword">
    <Col lg={7}>
      <Form.Control type="password" placeholder="Password" className="form-control my-3 p-4" />
    </Col>
 </Form.Group>

<Form.Group className="form-row">
    <Col lg={7}>
      <Button type="submit"  className="btn1">Login</Button>
    </Col>
</Form.Group>
<Form.Group className="form-row">
    <Col lg={7}>
    <span>Don`t Have an account? </span><NavLink to="/signup/"> <span className="signup">SignUp</span></NavLink>
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

export default connect(mapStateToProps)(LoginForm);