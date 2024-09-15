import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (//to make recipe cards clickable on homepage
    <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
    <div className="bg-white p-4 rounded shadow hover:shadow-lg">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded" />
      <h2 className="mt-2 text-xl font-semibold">{recipe.title}</h2>
      <p className="mt-1 text-gray-600">{recipe.summary}</p>
    </div>
  </Link>
  );
};

export default HomePage;

