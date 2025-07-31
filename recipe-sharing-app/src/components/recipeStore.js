import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  recommendations: [],

  // Set all recipes
  setRecipes: (newRecipes) => set(() => ({ recipes: newRecipes })),

  // Toggle favorite
  toggleFavorite: (id) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, favorite: !recipe.favorite }
          : recipe
      ),
    })),

  // Random recommendations (non-favorited only)
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => !recipe.favorite && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
