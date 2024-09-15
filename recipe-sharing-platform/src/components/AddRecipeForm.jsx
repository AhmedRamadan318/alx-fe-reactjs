import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required.';
    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please include at least two ingredients (comma-separated).';
    }
    if (!steps) newErrors.steps = 'Preparation steps are required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors and proceed with form submission
    setErrors({});
    console.log('Form submitted:', { title, ingredients, steps });

    // Clear the form
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 mb-2">Ingredients (comma-separated)</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 mt-1">{errors.ingredients}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          {errors.steps && <p className="text-red-500 mt-1">{errors.steps}</p>}
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
