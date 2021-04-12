import React,{Component,Fragment} from 'react'; 
import{Container,Form ,Col,Row,Button} from 'react-bootstrap'; 
//import logo from '../images/wanda.svg'
import logphoto from '../images/loginphoto.jpeg' 
import logphoto2 from '../images/loginphoto2.jpeg'
import './login.css'

class LoginForm extends Component{


    render(){
        return(
            <Fragment> 
            <section className="Form my-4 mx-5">
           
             <Container id="LoginContainer" >
               <Row noGutters={true}>
                   <Col lg={5}> <img src={logphoto} className="img-fluid" alt="logo"></img></Col>

                   <Col className="lg-7 px-5 pt-5">
                    <h1 className="font-weight-bold py-3">Wanda</h1>
                    <h4 >Sign in into your account</h4>
                   <Form>
            
<Form className="form-row" controlId="formHorizontalEmail">
    <Col lg={7} >
      <Form.Control type="email" placeholder="Email" className="form-control my-3 p-4" />
    </Col>
</Form>

<Form className="form-row" controlId="formHorizontalPassword">
    <Col lg={7}>
      <Form.Control type="password" placeholder="Password" className="form-control my-3 p-4" />
    </Col>
 </Form>

<Form className="form-row">
    <Col lg={7}>
      <Button type="submit"  className="btn1">Login</Button>
    </Col>
</Form>
<Form className="form-row">
    <Col lg={7}>
    <span>Don`t Have an account? </span><a href="/login/"> <span className="signup">SignUp</span></a>
    </Col>
</Form>
     
</Form>
</Col>
                   
                                 

</Row>
               


             </Container> 

             </section>

            </Fragment>
        )
    }
} 

export default LoginForm;