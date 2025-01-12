import { CartApi } from "@/api/cart/cartApi";
import axios from "axios";
import { userService } from "./userService";
class CartService {
   private api;
   constructor() {

    this.api = CartApi;
  }
 async createCart() {
  try {
 const data = await axios.get(this.api.createCart,{
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
async getTotal() {

  
  try {
  const data = await axios.get(this.api.getCartTotal,{
    withCredentials:true
  })
  return data.data
    
  }
  catch(error) {
    throw new Error('Error')
    
  }
 
}
async getProductQuantity(productId:number){
  try {
  const data = await axios.post(this.api.getProductQuantity,{

    productId:productId
  },
{
  withCredentials:true
})
  return data.data
}
catch(error) {
  throw new Error('Error')
  
}
}
async dicrementCartItemQuantity(cartItemId:number,productId:number) {
 
  
  try {
  const data = await axios.post(this.api.decrementCartItemQuantity,{
    cartItemId:cartItemId,
    productId:productId,

  },{
    withCredentials:true
  })
  

  return data.data;
  
}
catch(error) {

  throw new Error('Error')
  
}
}
async getCartItem() {
  try {
  const data = await axios.get(this.api.getCartItem,{
    withCredentials:true
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
async addCartItem(productId:number,quantity:number,price:number,ingregients:number[],type:1|2,size:1|2|3) {
  try {
  const data = await axios.post(this.api.addItem,{
    price:price,
    quantity:quantity,
    productId:productId,
    ingregients:ingregients,
    type:type,
    size:size
  },{
    withCredentials:true
  })
  return data.data;
}
catch(error) {
  throw new Error('Error')
  
}
}
async clearCart() {
  try {
  const data = await axios.get(this.api.clearCart,{
   withCredentials:true
  })
  return data.data
}
catch(error) {
  throw new Error('Error')
  
}
}
async deleteCartItem(itemId:number) {
  try {
  const data = await axios.post(this.api.deleteCartItem,{

    itemId:itemId
  },{
    withCredentials:true
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
async getCartItems() {
  try {
    const data = await axios.get(this.api.getCartItems,{
   withCredentials:true
    })
    return data.data[0].items;
  }
  catch(error) {
    throw new Error('Error')
    
  }
}
}
export const cartService = new CartService();