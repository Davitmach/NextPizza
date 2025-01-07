import { CartApi } from "@/api/cart/cartApi";
import axios from "axios";
class CartService {
   private api;
   constructor() {

    this.api = CartApi;
  }
 async createCart(userId:number) {
  try {
 const data = await axios.post(this.api.createCart,{
    userId:userId,

 },{
  withCredentials:true
 })
 return data.data;
}
catch(error) {
  throw new Error('Error')
  
}
}
async checkCart() {
  try {
    const data = await axios.get(this.api.checkCart,{
     withCredentials:true
    })
  
     return data.data;
  }
  catch(error) {
    throw new Error('Error')
    
  }
}
async getTotal(userId:number) {
  try {
  const data = await axios.post(this.api.getCartTotal,{
    userId:userId
  })
  return data.data
    
  }
  catch(error) {
    throw new Error('Error')
    
  }
 
}
async getProductQuantity(userId:number,productId:number){
  try {
  const data = await axios.post(this.api.getProductQuantity,{
    userId:userId,
    productId:productId
  })
  return data.data
}
catch(error) {
  throw new Error('Error')
  
}
}
async dicrementCartItemQuantity(cartItemId:number,productId:number,userId:number) {
 
  
  try {
  const data = await axios.post(this.api.decrementCartItemQuantity,{
    cartItemId:cartItemId,
    productId:productId,
    userId:userId
  })
  

  return data.data;
  
}
catch(error) {

  throw new Error('Error')
  
}
}
async getCartItem(userId:number) {
  try {
  const data = await axios.post(this.api.getCartItem,{
    userId:userId
  });
  return data.data;
}
catch(error) {
  throw new Error('Error')
  
}
}
async getProductStock(productId:number) {
  try {
  const data = await axios.post(this.api.getProductStock,{
    productId:productId
  })
  return data.data;
}
catch(error) {
  throw new Error('Error')
  
}
}
async addCartItem(userId:number,productId:number,cartId:number,quantity:number,price:number,ingregients:number[]) {
  try {
  const data = await axios.post(this.api.addItem,{
    price:price,
    quantity:quantity,
    userId:userId,
    productId:productId,
    cartId:cartId,
    ingregients:ingregients
  })
  return data.data;
}
catch(error) {
  throw new Error('Error')
  
}
}
async clearCart(userId:number,cartId:number) {
  try {
  const data = await axios.post(this.api.clearCart,{
    userId:userId,
    cartId:cartId
  })
  return data.data
}
catch(error) {
  throw new Error('Error')
  
}
}
async deleteCartItem(userId:number,itemId:number) {
  try {
  const data = await axios.post(this.api.deleteCartItem,{
    userId:userId,
    itemId:itemId
  })
  return data.data
}
catch(error) {
  throw new Error('Error')
  
}

}
async incrementCartItemQuantity(cartItemId:number,productId:number) {
  try {
  const data = await axios.post(this.api.incrementCartItemQuantity,{
    cartItemId:cartItemId,
    productId:productId
  })
  return data.data;
}
catch(error) {
  throw new Error('Error')
  
}
}
async getCartItems(userId:number) {
  try {
    const data = await axios.post(this.api.getCartItems,{
   userId:userId
    })
    return data.data[0].items;
  }
  catch(error) {
    throw new Error('Error')
    
  }
}
}
export const cartService = new CartService();