import { IngredientsPayload } from "@/types/payload/ingredientsPayload"
import { ingredient } from "@/types/payload/productPayload"

export type ProductCartProps = {
    img:string,
    name:string,
    description:string,
    price:number,
    productId:number,
    inCart:boolean,
    size?:number,
    type?:number,
cartQuantity?:number,
cartItemId?:number,
ingredients?:ingredient[]
}