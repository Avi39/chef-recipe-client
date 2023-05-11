/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefNav from '../Shared/ChefNav.jsx/ChefNav';

const Reciepes = () => {
    const recipes = useLoaderData();
    const {id,chefPicture,chefName,yearsOfExperience,numRecipes,likes,recipeNameOne,cookingMethodOne,ratingOne,ingredientsOne} = recipes;
    console.log(recipes);
    return (
        <div>
            <div>
                {/* {
                    recipes.map(recipe =><ChefNav key={recipe.id} recipe={recipe}></ChefNav>)
                } */}
                {
                    <p>{chefName}</p>
                    
                }

            </div>
            <div>

            </div>
        </div>
    );
};

export default Reciepes;