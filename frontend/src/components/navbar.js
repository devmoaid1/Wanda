import React, { Fragment } from 'react'; 
import logo from'../images/wanda.svg'
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
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/cars/">Cars</Nav.Link>
     
    </Nav>
   
  </Navbar>
    </Fragment>
  )
}

export default NavBarComponent;

/*
<NavLink  activeClassName="selected" exact to="/"className="nav-item nav-link active" >Home <span className="sr-only"></span></NavLink>
         <NavLink  activeClassName="selected"  to="/login"className="nav-item nav-link active" >Login <span className="sr-only"></span></NavLink>
         <NavLink  activeClassName="selected"  to="/cars/"className="nav-item nav-link active" >Cars <span className="sr-only"></span></NavLink>*/