'use client'

import { Checkbox } from "@/components/UI/checkbox/checkbox";
import { CheckboxLabel } from "@/components/UI/checkboxLabel/checkboxLabel";
import { ingredientsService } from "@/service/ingredientsService";
import { useFilter } from "@/store";
import { IngredientsPayload } from "@/types/payload/ingredientsPayload";
import { Ingredients } from "@/types/UI/ingredients/ingredients";
import { useEffect, useState } from "react"

export const FilterIngredients = ()=> {
    const [ingredients,setIngredients] = useState<IngredientsPayload[]|null>(null);
    const [active,setActive] = useState<boolean>(false);
const {addIngredient,removeIngredient,type} = useFilter();
    useEffect(()=> {
ingredientsService.getIngredients().then((e)=> {
   setIngredients(e);    
})
    },[])

const HandleActive = ()=> {
    setActive(!active)
}

    return(
       <div className="mt-[20px] flex flex-col gap-[15px] items-start">
       {ingredients&&  active == false?  ingredients.slice(0,6).map((e,index)=> (
        <CheckboxLabel add={addIngredient} remove={removeIngredient} id={e.id} key={index}>{e.name}</CheckboxLabel>
       )) : ingredients &&ingredients.map((e,index)=> (
        <CheckboxLabel add={addIngredient} remove={removeIngredient} id={e.id} key={index}>{e.name}</CheckboxLabel>
       ))}
       {active == false ? <div onClick={HandleActive} className="cursor-pointer text-orange font-[400] text-[16px]"> + Показать всё</div> :<div onClick={HandleActive} className="cursor-pointer text-orange font-[400] text-[16px]"> Показать меньше</div>}
       </div>
    )
}