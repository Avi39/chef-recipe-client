/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const ChefNav = () => {
    const [chefs,setChefs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error=>console.error(error))
    },[])

    return (
        <div>
            <h2>All Chefs</h2>
            {
                chefs.map(chef =>
                    <Card key={chef.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={chef.chefPicture} />
      <Card.Body>
        <Card.Title>Name:{chef.chefName}</Card.Title>
        <Card.Title>Experience:{chef.yearsOfExperience}</Card.Title>
        <Card.Title>Number of Recipes:{chef.numRecipes}</Card.Title>
        <Card.Title>Likes:{chef.likes}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                    )
            }
        </div>
    );
};

export default ChefNav;