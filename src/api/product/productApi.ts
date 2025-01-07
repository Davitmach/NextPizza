const Production = process.env.NEXT_PUBLIC_SERVER_PRODUCTION;

export const ProductApi = {
  addProduct: `${Production}addProduct`,
  editProduct: `${Production}editProduct`,
  getProduct: `${Production}getProduct`,
  deleteProduct: `${Production}deleteProduct`,
  getProducts: `${Production}getProducts`,
};
