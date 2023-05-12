/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className='bg-dark text-white p-4 mt-4'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h2 className='text-success'>Hot Recipe</h2>
                            <p><small>Donec sollicitudin molestie malesuada. Proin eget tortor risus. <br /> Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. ...</small></p>
                            <button type="button" className="btn btn-danger">Read More Us</button>
                        </Col>
                        <Col lg={6}>
                            <h2 className='text-warning'>Recent Recipes</h2>
                            <p><small>Chocolate Earl Grey Pots de...
                                2 cups cream 120 grams dark chocolate, <br /> chopped 2 bags...</small></p>
                                <p className='text-secondary'><small>copyright of my recipes</small></p>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
    );
};

export default Footer;