import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import React from 'react';
import { Link } from 'react-router-dom';


import Logo from '../logo.png'; 

const Navbar = () => {
    return (
        <div>
            <Nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Container>
                <Link to="/" className='nav-link'>
                <img src={Logo} width="" height="32" className="d-justify-content-start align-top" alt="logoApp"/>
                </Link> 
            
            <Nav className="justify-content-end">
            <Nav>
                <Link to="/create" className='nav-link'>
              Addactivity
                </Link>
            </Nav>

            <Nav>
                <Link to="/record" className='nav-link'>
              Activity List
                </Link>
            </Nav>
            </Nav>
            </Container>
            </Nav>
        </div>
    );
};
export default Navbar;
