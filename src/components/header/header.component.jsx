import React from "react";
import { Link } from "react-router-dom";  
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const Header = () =>{
 return(
    <div className="header">
        <Navbar>
            <Navbar.Brand>
                <h3>RickAndMortyApp</h3>
            </Navbar.Brand>
            <Nav className="ml-auto">
                <NavItem> <Link className="nav-link" to="/" className="btn btn-dark font-weight-bold">HOME</Link> </NavItem>  
                <NavItem> <Link className="nav-link" to="characters" className="btn btn-dark ml-3 mr-5 font-weight-bold">CHARACTERS</Link> </NavItem>  
            </Nav> 
        </Navbar>
    </div>
 );
}


export default Header;
