import { useRecipeStore } from '../components/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  // 🔍 Debug: Log recipes to check state
console.log("RecipeList rendered, recipes:", recipes); // ✅ Debug

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet.</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '10px' }}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
