/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import ChefNav from '../pages/Shared/ChefNav.jsx/ChefNav';
import pic from '../assets/Recipe.jpg'
import Dishes from '../pages/Shared/dishes/Dishes';
import Spicy from '../assets/Spicy Chicken Ramen.jpg';
import Chipotle from '../assets/Mini Burgers_Landscape-7.jpg';
import Korean from '../assets/Korean BBQ Ribs.jpg';
import Cajun from '../assets/Cajun Shrimp and Grits.jpg';
import caprese from '../assets/Caprese Salad.webp';
import chickpea2 from '../assets/chickpea2.webp';
import spinach from '../assets/Spinach and Mushroom Quiche.jpeg';
import stir from '../assets/Vegetable Stir-Fry.jpg';
import Lottie from "lottie-react";
import animation1 from '../assets/animation_llzirnh4.json'
import animation2 from '../assets/animation_llzit5q5.json'
import animation3 from '../assets/animation_llzivk47.json'
import animation4 from '../assets/animation_llzlqidr.json'
import animation5 from '../assets/animation_lm14mddg.json'
import emailjs from '@emailjs/browser';

const Main = () => {
    const [nonvegs, setNonveg] = useState([]);
    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);
    useEffect(
        () => {
            fetch('https://assignment-ten-server-avi39.vercel.app/nonveg')
                .then(res => res.json())
                .then(data => setNonveg(data))
                .catch(error => console.error(error))
        }, []
    )
    const form = useRef();

    const handleReset = () => {
        formRef.current.reset();
        setValidated(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tuyyd18', 'template_by0106q', form.current, 'pRvKGjQL9e8ysYewT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setValidated(true);
        handleReset();

    };
    return (
        <div>
            <Header></Header>
            <div className='d-md-flex justify-content-center mt-5'>
                <p className='fs-1 p-4 mt-5 fst-italic fw-semibold text-bold'><span className='text-danger fw-bold'>Put  down </span> the takeway <br /> some <span className='text-danger fw-bold'>proper Italian </span> sunshine with <br /> a <span className='text-danger fw-bold'>simple </span>pasta sauce,<br></br> a<span className='text-success fw-bold'> homemade</span>.</p>
                <div>
                    <Lottie animationData={animation5} loop={true}></Lottie>
                </div>
            </div>



            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <Lottie animationData={animation2} loop={true}></Lottie>
                    </div>
                    <div className="col mt-5">
                        <Lottie animationData={animation1} loop={true}></Lottie>
                    </div>
                    <div className="col">
                        <Lottie animationData={animation4} loop={true}></Lottie>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <Container>
                    <div>
                        <ChefNav></ChefNav>
                    </div>
                    <div>
                        <Dishes></Dishes>
                    </div>
                </Container>
            </div>
            <div className='mt-5'>
                <Container>
                    <h2>What's Hot</h2>
                    <Row>
                        <Col lg={3}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Spicy} />
                                <Card.Body>
                                    <Card.Title>Spicy Chicken Ramen</Card.Title>
                                    <Card.Text>
                                        Spicy chicken ramen is a popular Japanese dish that consists of chicken, noodles, vegetables, and a spicy broth made with soy sauce, miso paste, chili oil, and garlic.
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='mx-4' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Chipotle} />
                                <Card.Body>
                                    <Card.Title>Chipotle Burgers </Card.Title>
                                    <Card.Text>
                                        Chipotle black bean burgers are a vegetarian-friendly twist on the classic burger. Made with black beans, corn, and chipotle peppers, these burgers are packed with flavor and are perfect.
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='mx-5' style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Korean} />
                                <Card.Body>
                                    <Card.Title>Korean BBQ Ribs</Card.Title>
                                    <Card.Text>
                                        Korean BBQ ribs are a delicious and flavorful dish that are perfect for any occasion. These ribs are marinated in a mixture.
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <Card className='mx-4' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Cajun} />
                                <Card.Body>
                                    <Card.Title>Cajun Shrimp and Grits</Card.Title>
                                    <Card.Text>
                                        Cajun shrimp and grits is a classic Southern dish that's packed with flavor. Made with shrimp, grits, and a spicy Cajun seasoning.
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className='mt-5'>
                <Container>
                    <h2 className='text-center mb-4 bg-dark p-3 text-white'>Vegetarian Famous Recipe </h2>
                    <Row>
                        <Col lg={3} sm={1}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={spinach} />
                                <Card.Body>
                                    <Card.Title>Spinach and Mushroom Quiche</Card.Title>
                                    <Card.Text>
                                        A delicious quiche filled with sautéed spinach, mushrooms, and a blend of cheeses, all baked in a flaky pie crust.
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} sm={1}>
                            <Card className='mx-4' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={chickpea2} />
                                <Card.Body>
                                    <Card.Title>Chickpea Curry</Card.Title>
                                    <Card.Text>
                                        A hearty curry made with tender chickpeas cooked in a flavorful blend of spices, tomatoes, and coconut milk.
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} sm={1}>
                            <Card className='mx-5' style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={caprese} />
                                <Card.Body>
                                    <Card.Title>Caprese Salad</Card.Title>
                                    <Card.Text>
                                        A refreshing salad featuring ripe tomatoes, fresh mozzarella cheese, basil leaves, drizzled with balsamic glaze.
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} sm={1}>
                            <Card className='mx-4' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={stir} />
                                <Card.Body>
                                    <Card.Title>Vegetable Stir-Fry</Card.Title>
                                    <Card.Text>
                                        A quick and colorful stir-fry with a variety of crisp vegetables tossed in a savory stir-fry sauce, served over steamed rice.
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className='mt-5 '>
                <Container>
                    <h2 className='text-center mb-4 bg-dark p-3 text-white'>Non Veg Famous Recipe </h2>
                    <div className="row row-cols-md-4 text-center">
                        {
                            nonvegs.map(nonveg =>

                                <Col key={nonveg.id}>
                                    <Card className='mx-4' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={nonveg.image_url} />
                                        <Card.Body>
                                            <Card.Title>{nonveg.recipe_name}</Card.Title>
                                            <Card.Text>
                                                {nonveg.details}
                                            </Card.Text>
                                            <Button variant="primary">See More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )
                        }
                    </div>
                </Container>
            </div>
            <Container>
                <div>
                    <h2 className='text-center mt-5 text-danger bg-dark p-2 w-75 mx-auto mb-4'>Contact With Us</h2>
                    <Form className='w-50 mx-auto' ref={form} validated={validated} onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label >Name</Form.Label>
                            <Form.Control type="text" placeholder="your Name" name='from_name' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="your email" name='from_email' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Text</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='what you want write on this' name='message' />
                        </Form.Group>
                        <input className="btn btn-primary" type='submit' value="submit" />
                    </Form>

                </div>
            </Container>
            <Footer></Footer>
        </div >
    );
};

export default Main;