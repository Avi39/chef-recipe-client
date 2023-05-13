/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefNav = ({recipe}) => {
    const [chefs,setChefs] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-ten-server-avi39.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error=>console.error(error))
    },[])
    console.log(chefs);
    return (
        <div>
            
            <h2 className='ms-5 mb-4 text-success'>All CHEFS</h2>
            <div>
            {
                chefs.map(chef =>
                    <Card className='mb-4' key={chef.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={chef.chefPicture} />
      <Card.Body>
        <Card.Title>Name:{chef.chefName}</Card.Title>
        <Card.Title>Experience:{chef.yearsOfExperience}</Card.Title>
        <Card.Title>Number of Recipes:{chef.numRecipes}</Card.Title>
        <Card.Title>Likes:{chef.likes}</Card.Title>
        <Link to={`/recipes/${chef.id}`}><Button variant="primary">View Recipes</Button></Link> 
      </Card.Body>
    </Card>

       )
            }

            </div>
            
        </div>
    );
};

export default ChefNav;