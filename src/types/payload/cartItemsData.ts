type IngredientsType = {
  cartItemId: number,
  ingredientId: number,
  ingredient: {
    createdAt:string,
    id:number,
    imageUrl:string,
    name:string,
    price:number

  }

};
type ProductItemType = {
id:number,
pizzaType:number,
price:number,
productId:number,
size:number
}
type ProductType = {
    categoryId:number,
    description:string,
    id:number,
    imageUrl:string,
    name:string,
    price:number,
    stock:number, 
productItem:ProductItemType[]

}
export type CartItemsType = {
  cartId: number;
  createdAt: string;
  id: number;
  ingredients: IngredientsType[];
  price:number,
  quantity:number,
  productId:number,
  product:ProductType,
  size:number,
  type:number

};
