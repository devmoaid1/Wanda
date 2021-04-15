import React, { Fragment } from 'react'; 
import logo from'../../images/wanda.svg'
//import {NavLink} from 'react-router-dom';
import {
  
  Navbar,
 
  Nav,
  
  
} from 'react-bootstrap';


const NavBarComponent = () => {
  return (
    <Fragment>
       <Navbar bg="dark" variant="dark">
    <Navbar.Brand ><img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="wanda logo"
      /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home/">Home</Nav.Link>
      <Nav.Link href="/cars/">Cars</Nav.Link> 
      <Nav.Link href="/login/">Login</Nav.Link>
     
    </Nav>
   
  </Navbar>
    </Fragment>
  )
}

export default NavBarComponent;

/*
 <Navbar bg="dark" variant="dark">
    <Navbar.Brand ><img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="wanda logo"
      /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home/">Home</Nav.Link>
      <Nav.Link href="/cars/">Cars</Nav.Link> 
      <Nav.Link href="/login/">Login</Nav.Link>
     
    </Nav>
   
  </Navbar>
    </Fragment>*/