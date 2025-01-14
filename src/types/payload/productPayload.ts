export type ProductPayload = {
    name:string,
    description:string,
    stock:number,
    imageUrl:string,
    price:number,
    catId:number,
    productItem:ProductItem[],
    id:number,
    ingredients:ingredient[]

}
type ProductItem = {
id:number,
pizzaType:number,   
price:number,
productId:number,
size:number
}
type ingredient = {
    id:number,
    createdAt:string,   
   imageUrl:string,
    name:string,
    price:number
    }
    