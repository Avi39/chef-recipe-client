/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefNav from '../Shared/ChefNav.jsx/ChefNav';
import { Button, Card, Table } from 'react-bootstrap';

const Reciepes = () => {
    const recipes = useLoaderData();
    const { id, chefPicture, chefName, yearsOfExperience, numRecipes, likes, recipeNameOne, cookingMethodOne, ratingOne, ingredientsOne, bio,recipeNameTwo,cookingMethodTwo,ratingTwo,ingredientsTwo,recipeNameThree,ratingThree,ingredientsThree,cookingMethodThree } = recipes;
    console.log(recipes);
    return (
        <div>
            {
                <div>
                    <div className='d-flex mt-5'>
                        <div className='flex-grow-1'>
                            <h3>Name: {chefName}</h3>
                            <h3>Likes: {likes}</h3>
                            <h3>Number of Recipes: {numRecipes}</h3>
                            <h3>Experience: {yearsOfExperience}</h3>
                            <p><span className='fw-bold'>Bio:</span> {bio} </p>
                        </div>
                        <div className='w-100' >
                            <img className='w-50' src={chefPicture} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className='mt-5 mb-4'>Displaying Chef Recipes</h2>
                        <div>
                            <Card className='mb-4' border="dark" style={{ width: '18rem' }}>
                                <Card.Header>First Recipe</Card.Header>
                                <Card.Body>
                                    <Card.Title> <span className='text-danger'>Recipe Name:</span>  {recipeNameOne}</Card.Title>
                                    <br />
                                    <Card.Title>Rating: {ratingOne}</Card.Title>
                                    <br />
                                    <Card.Text>
                                       <span className='fw-bold'>Cooking Method:</span> {cookingMethodOne}
                                    </Card.Text>
                                    <Card.Text>
                                    <span className='fw-bold'>ingredients:</span> {ingredientsOne}
                                    </Card.Text>
                                    <Button variant="success">Favourite</Button>
                                </Card.Body>
                            </Card>
                            <Card className='mb-4' border="dark" style={{ width: '18rem' }}>
                                <Card.Header>Second Recipe</Card.Header>
                                <Card.Body>
                                    <Card.Title> <span className='text-danger'>Recipe Name:</span>  {recipeNameTwo}</Card.Title>
                                    <br />
                                    <Card.Title>Rating: {ratingTwo}</Card.Title>
                                    <br />
                                    <Card.Text>
                                       <span className='fw-bold'>Cooking Method:</span> {cookingMethodTwo}
                                    </Card.Text>
                                    <Card.Text>
                                    <span className='fw-bold'>ingredients:</span> {ingredientsTwo}
                                    </Card.Text>
                                    <Button variant="success">Favourite</Button>
                                </Card.Body>
                            </Card>
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Header>Third Recipe</Card.Header>
                                <Card.Body>
                                    <Card.Title> <span className='text-danger'>Recipe Name:</span>  {recipeNameThree}</Card.Title>
                                    <br />
                                    <Card.Title>Rating: {ratingTwo}</Card.Title>
                                    <br />
                                    <Card.Text>
                                       <span className='fw-bold'>Cooking Method:</span> {cookingMethodThree}
                                    </Card.Text>
                                    <Card.Text>
                                    <span className='fw-bold'>ingredients:</span> {ingredientsThree}
                                    </Card.Text>
                                    <Button variant="success">Favourite</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

            }
        </div>
    );
};

export default Reciepes;