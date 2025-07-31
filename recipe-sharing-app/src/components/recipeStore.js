import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  setRecipes: (newRecipes) => set(() => ({
    recipes: newRecipes,
    filteredRecipes: newRecipes,
    favorites: newRecipes.filter(recipe => recipe.favorite),
  })),

  toggleFavorite: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      );
      const updatedFavorites = updatedRecipes.filter((r) => r.favorite);

      return {
        recipes: updatedRecipes,
        favorites: updatedFavorites,
        filteredRecipes: updatedRecipes,
      };
    }),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => !recipe.favorite && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  setFilteredRecipes: (filtered) =>
    set(() => ({ filteredRecipes: filtered })),
}));
