/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Dishes = () => {
    const [dishes,setDishes] = useState([]);

    useEffect(
        ()=>{
            fetch('http://localhost:5000/dishes')
            .then(res => res.json())
            .then(data => setDishes(data))
            .catch(error=>console.error(error))
        },[]
    )
    return (
        <div>
            <h2 className='text-center mb-5 bg-dark p-3 text-white'>All Popular Dishes</h2>
            <div className='row row-cols-4 text-center'>
                {
                    dishes.map(dish =>
                        <Col>
                        <Card className='mb-4' key={dish.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dish.picture} />
                        <Card.Body>
                          <Card.Title>{dish.name}</Card.Title>
                          <Card.Title>Likes: {dish.likes}</Card.Title>
                          <Card.Text>
                            {dish.details}
                          </Card.Text>
                          <Button variant="primary">See More</Button>
                        </Card.Body>
                      </Card>
                      </Col>
                        )
                }
           
            </div>
        </div>
    );
};

export default Dishes;