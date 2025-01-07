const Production = process.env.NEXT_PUBLIC_SERVER_PRODUCTION;

export const IngredientsApi = {
  getIngredients: `${Production}getIngredients`,
  clearIngredients: `${Production}clearIngredients`,
  addIngredients: `${Production}addIngredient`,
  deleteIngredients: `${Production}deleteIngredient`,
  editIngredients:`${Production}editIngredient`
 
};
