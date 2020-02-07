import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Button, NavDropdown,Form,FormControl  } from 'react-bootstrap';
import Logo from './img/logo.png';
import './style.css';


class Header extends Component{

    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src={Logo} alt="Logo" className='logo'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Products">Products</Nav.Link>
                <Nav.Link href="/Contact">Contact Us</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
export default Header