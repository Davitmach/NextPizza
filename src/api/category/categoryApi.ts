const Production = process.env.NEXT_PUBLIC_SERVER_PRODUCTION;

export const CategoryApi = {
  addCategory: `${Production}addCategory`,
  getCategory: `${Production}getCategory`,
  deleteCategory: `${Production}deleteCategory`,
  editCategory: `${Production}editCategory`,
  
 
};
