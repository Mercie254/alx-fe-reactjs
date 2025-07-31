import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  recommendations: [],

  // Add or replace full recipe list
  setRecipes: (newRecipes) => set(() => ({ recipes: newRecipes })),

  // Toggle favorite inside recipe object
  toggleFavorite: (id) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, favorite: !recipe.favorite }
          : recipe
      ),
    })),

  // Generate random recommendations from non-favorited recipes
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => !recipe.favorite && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Optional: filtered recipe list for search
  filteredRecipes: [],
  setFilteredRecipes: (filtered) => set(() => ({ filteredRecipes: filtered })),
}));
