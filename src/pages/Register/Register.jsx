/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name,photo,email,password);
        createUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            navigate('/login');
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <Container className='w-25 mx-auto mt-5 mb-5'>
            <h3 className='mb-4'>Please Register</h3>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Your photo Url" />
                </Form.Group>
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
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                       Already have an Account? <Link to="/login">Login</Link>
                       </Form.Text>
                <Form.Text className="text-success">
                       
                    </Form.Text>
                    <Form.Text className="text-danger">
                        
                    </Form.Text>
                </Form>
        </Container>
    );
};

export default Register;