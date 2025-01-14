'use client'
import { Ingredient } from "@/components/UI/ingredients/ingredient";
import { IngredientsBoxProps } from "@/types/UI/ingredients/ingredientsBoxProps";
import { useEffect, useState } from "react";
import './ingredient.scss';

export const IngredientsBox = (props: IngredientsBoxProps) => {
  const { ingredients, func, active, data } = props;

  useEffect(() => {
    console.log(data);
  }, [data]);

  const filteredIngredients = ingredients.filter(
    (ingredient) => !data.some((item) => item.id === ingredient.id)
  );

  return (
    <>
      <div className="mt-[10px]" key={'Ingredient'}>
        <div>
          <h1 className="text-black-label font-[600] text-[18px]">Ингредиенты</h1>
        </div>
        <div className="Ingredient_container gap-[10px] h-[200px] overflow-y-auto overflow-x-hidden">
          {Array.isArray(filteredIngredients) && filteredIngredients.length > 0 && filteredIngredients.map((i) => (
            <Ingredient
              key={i.id}
              active={active}
              func={func}
              createdAt={i.createdAt}
              name={i.name}
              price={i.price}
              id={i.id}
              imageUrl={i.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}
