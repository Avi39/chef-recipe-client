/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogout =() =>{
    logOut()
    .then()
    .catch(error => console.log(error));
  }
    return (
        <Container>
             <div>
            <h1 className='text-center mt-4 text-warning fw-bold'>HOT RECIPE</h1>
        </div>
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <Link to='/'><Button variant="primary">Home</Button></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-4">
            <Link to='/blog'>
            <Button variant="success">Blog</Button>
            </Link>
          </Nav>
          <Nav>
            {
              user && <img className='mx-5 w-25 rounded-circle' src={user.photoURL} alt="" />   
              
            }
             
            
              
                { 
                
                user ? 
                 <Button className='w-50 h-25 mt-3' onClick={handleLogout} variant="secondary">LogOut</Button> :
                 <Link to='/login'>
                 <Button variant="secondary">Login</Button>
                 </Link>
                  

              }
              
              
              
                
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        </Container>
       
    );
};

export default Header;