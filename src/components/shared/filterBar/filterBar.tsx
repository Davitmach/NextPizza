'use'
import { Price_input } from "@/components/UI/input/input"
import { FilterBox } from "../filterBox/filterBox"
import { useRef, useState } from "react"
import { FilterIngredients } from "../filterIngredients.tsx/filterIngredients";
import { FilterTypes } from "../filterTypes/filterTypes";
import { Button } from "@/components/UI/button/button";
import { useFilter } from "@/store";

export const FilterBar = ()=> {
    const refMin = useRef<HTMLInputElement>(null);
    const refMax = useRef<HTMLInputElement>(null);
    const {setMax,setMin} = useFilter();


    return(
        <div className={`w-[244px] relative duration-300  `}>

            <div className="title mb-[30px]"><h1 className="text-black-label font-[700] text-[22px]">Фильтрация</h1></div>
            <div>
                <FilterBox title="Цена от и до:" className=" pt-[25px] border-t border-t-gray-cartBorder inline-flex flex-col">
               <div className="flex gap-[15px] mt-[15px]">
              <div className="w-[90px]"><Price_input func={setMin} ref={refMin}/></div> 
              <div className="w-[90px]"><Price_input func={setMax} ref={refMax}/></div>
               </div>
                </FilterBox>
                <FilterBox title="Ингредиенты:" className="mt-[30px] pt-[25px] border-t border-t-gray-cartBorder inline-flex flex-col">
               <FilterIngredients/>
                </FilterBox>
                <FilterBox title="Тип теста:" className="mt-[30px] pt-[25px] border-t border-t-gray-cartBorder inline-flex flex-col">
               <FilterTypes/>
                </FilterBox>
                </div>
        </div>
    )
}