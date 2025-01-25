'use client'
import { Price_input } from "@/components/UI/input/input"
import { FilterBox } from "../filterBox/filterBox"
import { useRef, useState } from "react"
import { FilterIngredients } from "../filterIngredients.tsx/filterIngredients";
import { FilterTypes } from "../filterTypes/filterTypes";
import './filter.scss';
import { useFilter } from "@/store";
import { FaArrowRightLong } from "react-icons/fa6";

export const FilterBar = ()=> {
    const refMin = useRef<HTMLInputElement>(null);
    const refMax = useRef<HTMLInputElement>(null);
    const {setMax,setMin} = useFilter();
const [active,setActive] = useState(false);

    return(<>
   
        <div className={` Filter_container w-[244px]  relative duration-300 1392max:absolute  1392max:bg-white 1392max:shadow-lg 1392max:rounded-l-none 1392max:rounded-r-xl 1392max:px-[20px] 1392max:py-[20px] 1392max:w-[430px]  571max:w-3/4 ${active == true ? 'Active_filter' :'Disable_filter'}`}>
        <div onClick={()=> setActive(!active)} className="invisible 1392max:visible   cursor-pointer absolute -right-[35px] top-0 w-[35px] h-[150px] bg-orange rounded-r-xl flex items-center justify-center"> <FaArrowRightLong   style={{ transform: active?'rotate(180deg)' :'rotate(0)',transition:'.4s'}}   color="white" fontSize={'24px'} fontWeight={'800'}/></div>
            <div className="cursor-pointer title Filter_title mb-[30px]"><h1 className="text-black-label font-[700] text-[22px]  " onClick={()=>setActive(!active)}>Фильтрация</h1></div>
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
        </>
    )
}