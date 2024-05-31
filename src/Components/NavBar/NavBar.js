import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


 export default function NavBar() {
 
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav className="mx-auto">
          <span className='mx-5' style={{fontSize:'1.2rem'}}>Find Yourself Lost in Your Budgeting. Here is the Solution</span>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
