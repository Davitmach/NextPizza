import { Ingredients } from "./ingredients"

export type IngredientsBoxProps = {
    ingredients:Ingredients[],
    func:Function,
    active:number[],
 data:{
    id:number,
    createdAt:string,
    name:string,
    price:number,
    imageUrl:string
 }[]
}
