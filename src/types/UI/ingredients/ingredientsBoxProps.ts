import { Ingredients } from "./ingredients"

export type IngredientsBoxProps = {
    ingredients:Ingredients[],
    func:Function,
    active:number[]
}