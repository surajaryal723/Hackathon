import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"

function Header(){
    return(<Navbar bg="light" variant="dark">
    <Container>
      <Link to="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top logo"
        />
    
      </Link>  
    </Container>
  </Navbar>)
   
}

export default Header;