export type ProductPayload = {
    name:string,
    description:string,
    stock:number,
    imageUrl:string,
    price:number,
    catId:number,
    productItem:ProductItem[],
    id:number
}
type ProductItem = {
id:number,
pizzaType:number,   
price:number,
productId:number,
size:number
}