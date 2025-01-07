import { ProductApi } from "@/api/product/productApi";
import { ProductPayload } from "@/types/payload/productPayload";
import axios from "axios";
class ProductService {
  private api;
  constructor() {
    this.api = ProductApi;
  }
  async addProduct(
    name: string,
    description: string,
    stock: number,
    img: string,
    price: number,
    catId: number
  ) {
    try {
      const data = await axios.post(this.api.addProduct, {
        name: name,
        description: description,
        stock: stock,
        img: img,
        price: price,
        catId: catId,
      });
      return data.data;
    } catch (error) {
      throw new Error('Error')
    }
  }
  async editProduct(productId: number, payload: ProductPayload) {
    try {
      const data = await axios.post(this.api.editProduct, {
        productId: productId,
        payload: payload,
      });

      return data.data;
    } catch (error) {
      throw new Error('Error')
    }
  }
  async deleteProduct(productId: number) {
    try {
      const data = await axios.post(this.api.deleteProduct, {
        productId: productId,
      });
      return data.data;
    } catch (error) {
      throw new Error('Error')
    }
  }
  async getProduct(productId: number) {
    try {
      const data = await axios.post(this.api.getProduct, {
        productId: productId,
      });
      return data.data;
    } catch (error) {
      throw new Error('Error')
    }
  }
  async getProducts() {
    try {
      const data = await axios.get(this.api.getProducts);
      return data.data;
    } catch (error) {
      throw new Error('Error')
    }
  }
}
export const productService = new ProductService();
