import { useRecipeStore } from '../components/recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const toggleFavorite = useRecipeStore((state) => state.toggleFavorite);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recipes</h2>
      <SearchBar onSearch={setSearchTerm} />
      {filteredRecipes.length === 0 && <p>No recipes found.</p>}
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <p><strong>{recipe.favorite ? '❤️ Favorited' : '♡ Not Favorited'}</strong></p>
          <button onClick={() => toggleFavorite(recipe.id)}>
            {recipe.favorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
