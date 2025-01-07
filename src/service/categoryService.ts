import { CategoryApi } from "@/api/category/categoryApi";
import axios from "axios";
class CategoryService {
   private api;
   constructor() {

    this.api =CategoryApi;
  }
 async addCategory(name:string) {
  try {

  
 const data = await axios.post(this.api.addCategory,{
    name:name,

 })
 return data;
}
catch(error) {
  throw new Error('Error')
  
}
}
async getCategory() {
    try {
      const response = await axios.get(this.api.getCategory)
      return response.data
    }
    catch(error) {
      throw new Error('Error')

    }
}
async deleteCategory(id:number) {
  try {
  const data = await axios.post(this.api.deleteCategory,{
   id:id
  })
  return data
}
catch(error) {
  throw new Error('Error')
  
}
}
async editCategory(id:number,payload:string){
  try {
  const data = await axios.post(this.api.editCategory,{
   id:id,
   payload:payload
  })
  return data}
  catch(error) {
    throw new Error('Error')
    
  }
}

}
export const categoryService = new CategoryService();