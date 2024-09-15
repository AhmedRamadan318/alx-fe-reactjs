import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="container mx-auto p-4">Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded shadow-lg mb-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-4 shadow" />
        <p className="text-gray-700 mb-4">{recipe.summary}</p>

        <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          {/* Placeholder for ingredients */}
          <ul className="list-disc list-inside">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          {/* Placeholder for instructions */}
          <ol className="list-decimal list-inside">
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

