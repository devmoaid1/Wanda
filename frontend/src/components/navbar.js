import React, { Fragment } from 'react';
//import {NavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';


const NavBarComponent = () => {
  return (
    <Fragment>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">Wanda</NavbarBrand>
        <NavbarToggler  />
        <Collapse  navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink  activeClassName="selected" href="/cars/">Cars</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="selected" href ="/">Home</NavLink>
            </NavItem>
           
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  )
}

export default NavBarComponent;

/*
<NavLink  activeClassName="selected" exact to="/"className="nav-item nav-link active" >Home <span className="sr-only"></span></NavLink>
         <NavLink  activeClassName="selected"  to="/login"className="nav-item nav-link active" >Login <span className="sr-only"></span></NavLink>
         <NavLink  activeClassName="selected"  to="/cars/"className="nav-item nav-link active" >Cars <span className="sr-only"></span></NavLink>*/