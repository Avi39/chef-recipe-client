/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { FaBeer,FaGoogle } from 'react-icons/fa';


const Login = () => {
    const auth = getAuth(app);
    console.log(app)
const provider = new GoogleAuthProvider();
    const {signIn,googleSingIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log('login page location',location);
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
            navigate(from,{replace: true});
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
             navigate(from,{replace: true});
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
                <button className='p-2 mt-2 rounded bg-warning' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Login with google</button>
        </Container>
    );
};

export default Login;