import React, { Fragment } from 'react'; 
import logo from'../../images/wandalogo.svg'
import './navbar.css'

//import {NavLink} from 'react-router-dom';
// import {
  
//   Navbar,
 
//   Nav,
  
  
// } from 'react-bootstrap';


const NavBarComponent = () => {
  return (
    <div style={{background:'#091c29'}}>
      <div className="flex items-center justify-between w-10/12 mx-auto py-1 text-white"> 
        <div className="flex flex-row justify-left pt-3  text-white"><img width="50"
        height="50" src={logo} alt="logo"></img>        
        
         <h1 className="text-2xl font-sans font-bold text-white"> Wanda</h1>
        </div>
         <div className="inline-block">
           <span className="text-xl mr-4  focus:ring-white"><a className=" hover:purple-700" href="/home/">Home</a></span>
           <span  className="text-xl mr-4"><a href="/cars/">Cars</a></span>
           <span  className="text-xl mr-4"><a href="/login/">Login</a></span>
         </div>

      </div>
    </div>
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