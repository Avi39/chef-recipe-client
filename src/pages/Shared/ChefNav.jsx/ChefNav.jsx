/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefNav = ({recipe}) => {
    const [chefs,setChefs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error=>console.error(error))
    },[])
    console.log(chefs);
    return (
        <div>
            
            <h2 className='text-center mb-5 bg-dark p-3 text-white'>All CHEFS WITH THEIR RECIPE</h2>
            <div className='container text-center'>
            <div className='row'>
            {
                chefs.map(chef =>
                    <Col>
                    <Card className='mb-5' key={chef.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={chef.chefPicture} />
      <Card.Body>
        <Card.Title>Name:{chef.chefName}</Card.Title>
        <Card.Title>Experience:{chef.yearsOfExperience}</Card.Title>
        <Card.Title>Number of Recipes:{chef.numRecipes}</Card.Title>
        <Card.Title>Likes:{chef.likes}</Card.Title>
        <Link to={`/recipes/${chef.id}`}><Button variant="primary">View Recipes</Button></Link> 
      </Card.Body>
    </Card>
    </Col>

       )
            }

            </div>
            </div>
            
            
        </div>
    );
};

export default ChefNav;