import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Simple validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients (separated by commas).");
      return;
    }

    // ✅ Form is valid
    setError("");
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      steps,
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            rows="3"
            placeholder="Enter ingredients, separated by commas"
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-medium">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
            rows="4"
            placeholder="Enter preparation steps"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
