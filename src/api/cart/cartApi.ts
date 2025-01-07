const Production = process.env.NEXT_PUBLIC_SERVER_PRODUCTION;

export const CartApi = {
  getCartTotal: `${Production}getCartTotal`,
  getProductQuantity: `${Production}getProductQuantity`,
  decrementCartItemQuantity: `${Production}dicrementCartItemQuantity`,
  createCart: `${Production}createCart`,
  getCartItem: `${Production}getCartItem`,
  getProductStock: `${Production}getProductStock`,
  addItem: `${Production}addItem`,
  clearCart: `${Production}clearCart`,
  deleteCartItem: `${Production}deleteCartItem`,
  incrementCartItemQuantity: `${Production}incrementCartItemQuantity`,
  checkCart: `${Production}checkCart`,
  getCartItems:`${Production}getCartItems`
};
