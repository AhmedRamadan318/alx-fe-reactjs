import React, { useState, useEffect } from 'react';
import data from '../data.json'; // Import mock data
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Load the recipe data
  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing Platform</h1>
      
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded" />
              <h2 className="mt-2 text-xl font-semibold">{recipe.title}</h2>
              <p className="mt-1 text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
