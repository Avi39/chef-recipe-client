/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

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
            <h2 className='ms-2 mb-4 text-danger'>All Popular Dishes</h2>
            <div>
                {
                    dishes.map(dish =>
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
                        )
                }
           
            </div>
        </div>
    );
};

export default Dishes;