import { IngredientsApi } from "@/api/ingredients/ingredientsApi";
import { IngredientsPayload } from "@/types/payload/ingredientsPayload";
import axios from "axios";
class IngredientsService {
   private api;
   constructor() {

    this.api = IngredientsApi;
  }
 async getIngredients() {
  try {
 const data = await axios.get(this.api.getIngredients)
 return data.data;
  }
  catch(error) {
    throw new Error('Error')
    
  }
}
async addIngredients(name:string,price:number,img:string) {
try {
    const data = await axios.post(this.api.addIngredients,{
 name:name,
 price:price,
 img:img
    })

     return data.data;
  }
  catch(error) {
    throw new Error('Error')
    
  }
}
async clearIngredients() {
  try {
  const data = await axios.get(this.api.clearIngredients)
  return data.data
  }
  catch(error) {
    throw new Error('Error')
    
  }
}
async editIngredients(id:number,payload:IngredientsPayload){
  try {
  const data = await axios.post(this.api.editIngredients,{
   id:id,
   payload:payload
  })
  return data.data
}
catch(error) {
  throw new Error('Error')
  
}
}
async deleteIngredients(id:number) {
  try {
  const data = await axios.post(this.api.deleteIngredients,{
id:id
  })
  return data.data;
}
catch(error) {
  throw new Error('Error')
  
}
}

}
export const ingredientsService = new IngredientsService();