/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ChefNav from '../pages/Shared/ChefNav.jsx/ChefNav';
import pic from '../assets/Recipe.jpg'
import Dishes from '../pages/Shared/dishes/Dishes';
import Spicy from '../assets/Spicy Chicken Ramen.jpg';
import Chipotle from '../assets/Mini Burgers_Landscape-7.jpg';
import Korean from '../assets/Korean BBQ Ribs.jpg';
import Cajun from '../assets/Cajun Shrimp and Grits.jpg';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='d-flex mt-4 '>
                <p className='fs-3 p-4 mt-5 fst-italic text-bold'>Put down the takeway menu and sample some proper Italian sunshine with a simple pasta sauce,<br></br> a homemade pizza or perhaps something a little more special. Easy enough for a midweek <br /> meal, many dishes can be cooked in minutes, while taking the time to make your own pasta could <br />
                    really wow your guests at the weekend.</p>
                <img className='rounded img-fluid w-50 p-4 ' src={pic} alt="" />
            </div>
            <div className='mt-5'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <ChefNav></ChefNav>
                        </Col>
                        <Col lg={4}>
                            <Dishes></Dishes>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='mt-5'>
                <Container>
                    <h2>What's Hot</h2>
                    <Row>
                        <Col lg={3}>
                            <Card  style={{ width: '18rem' }}>
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
                                <Card.Img  variant="top" src={Korean}/>
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
                                <Card.Img variant="top" src={Cajun}/>
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
            <Footer></Footer>
        </div>
    );
};

export default Main;