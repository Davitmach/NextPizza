import { Ingredient } from "@/components/UI/ingredients/ingredient";
import { IngredientsBoxProps } from "@/types/UI/ingredients/ingredientsBoxProps"
import { useState } from "react";
import './ingredient.scss';
export const IngredientsBox = (props:IngredientsBoxProps)=> {
    const Ingredients = props.ingredients;
   const Func = props.func;
   const Active = props.active;
    return(
        <>
       <div className="mt-[10px]" key={'Ingredient'}>
        <div><h1 className="text-black-label font-[600] text-[18px]">Ингредиенты</h1></div>
        <div className="Ingredient_container  gap-[10px] h-[200px] overflow-y-auto overflow-x-hidden ">
            {Array.isArray(Ingredients) && Ingredients.length >0  && Ingredients.map((i)=> (
                <Ingredient key={i.id} active={Active} func={Func} createdAt={i.createdAt} name={i.name} price={i.price} id={i.id} imageUrl={i.imageUrl}/>
            )
            )}
        </div>
       </div>
        </>
    )
}
