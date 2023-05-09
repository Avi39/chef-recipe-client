/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
             <div>
            <h1 className='text-center mt-4 text-warning fw-bold'>HOT RECIPE</h1>
        </div>
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <Button variant="primary">Home</Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-4">
          <Button variant="success">Blog</Button>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets"></Nav.Link> */}
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        </Container>
       
    );
};

export default Header;