import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavBtn = ({ recipeId }) => {
  const isFavorite = useRecipeStore(state => state.favorites.includes(recipeId));
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
    generateRecommendations();
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? '- Remove from Favorites' : '+ Add to Favorites'}
    </button>
  );
};

export default FavBtn;