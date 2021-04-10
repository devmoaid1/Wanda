import React  from 'react'; 
//import {NavLink} from 'react-router-dom';
import {Navbar,Form,FormControl,Button} from 'react-bootstrap'


const Nav=()=>{
    return(
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    )
} 

export default Nav; 

/*
<NavLink  activeClassName="selected" exact to="/"className="nav-item nav-link active" >Home <span className="sr-only"></span></NavLink>
         <NavLink  activeClassName="selected"  to="/login"className="nav-item nav-link active" >Login <span className="sr-only"></span></NavLink>
         <NavLink  activeClassName="selected"  to="/cars/"className="nav-item nav-link active" >Cars <span className="sr-only"></span></NavLink>*/