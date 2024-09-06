
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore'; // Adjust the path if necessary

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // Redirect to the homepage or the recipe list after deletion
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default DeleteRecipeButton;
