/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/');
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <Container className='w-25 mx-auto mt-5 mb-5'>
            <h3 className='mb-4'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button className='mb-2' variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                       Don't have an Account? <Link to="/register">Register</Link>
                       </Form.Text>
                <Form.Text className="text-success">
                       
                    </Form.Text>
                    <Form.Text className="text-danger">
                        
                    </Form.Text>
                </Form>
        </Container>
    );
};

export default Login;