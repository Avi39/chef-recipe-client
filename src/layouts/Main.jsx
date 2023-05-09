/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import ChefNav from '../pages/Shared/ChefNav.jsx/ChefNav';
import pic from '../assets/Recipe.jpg'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='d-flex mt-4 '>
                <p className='fs-3 p-4 mt-5 fst-italic'>Put down the takeway menu and sample some proper Italian sunshine with a simple pasta sauce,<br></br> a homemade pizza or perhaps something a little more special. Easy enough for a midweek <br /> meal, many dishes can be cooked in minutes, while taking the time to make your own pasta could <br />
                really wow your guests at the weekend.</p>
                <img className='rounded img-fluid w-50 p-4 ' src={pic} alt="" />
            </div>
            <div>
                <Container>
                    <Row>
                        <Col lg={9}>
                            <ChefNav></ChefNav>
                        </Col>
                        <Col lg={3}>sm=4</Col>
                    </Row>
                   
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;