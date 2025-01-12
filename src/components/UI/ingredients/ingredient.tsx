'use client'
import { Ingredients } from "@/types/UI/ingredients/ingredients"
import Image from "next/image";
import { useEffect } from "react";

export const Ingredient = (props:Ingredients)=> {
    const Img = props.imageUrl;
    const Id = props.id;
    const Name = props.name;
    const Price = props.price;
    const Func = props.func;
    const Active = props.active;
    const AddIngredient = ()=> {
        if (!Active.includes(Id)) {
            Func([...Active, Id]);
        }
        else {
            const Filter = Active.filter((e)=> e !== Id);
            Func(Filter)
        }
    }

    return(
        <div onClick={()=> {
            AddIngredient()
        }} className={`duration-100 relative bg-white w-[130px] h-[193px] flex-shrink-0 rounded-[15px] py-[0px] px-[10px] flex flex-col items-center justify-around border-2 border-white ${Active.includes(Id) && ' !border-orange'}`}>
            <div className="w-full flex items-center justify-center"><Image src={Img} alt="Img Ingr." width={110} height={110}/></div>
            <div className="text-black-label text-[12px] font-[400]">{Name.length > 16 ? Name.substring(0,16)+'...' :Name}</div>
            <div className="text-[14px] font-[600] text-black-label">{Price} ₽</div>
          { Active.includes(Id) && <div className="absolute top-[10px] right-[10px]"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00001 17C10.0508 17.0014 11.0915 16.7951 12.0622 16.3929C13.033 15.9908 13.9148 15.4008 14.6568 14.6568C15.4008 13.9148 15.9908 13.033 16.3929 12.0622C16.7951 11.0915 17.0014 10.0508 17 9.00001C17.0013 7.94924 16.795 6.90856 16.3929 5.93778C15.9908 4.967 15.4008 4.08525 14.6568 3.34321C13.9148 2.59922 13.033 2.00921 12.0622 1.60708C11.0915 1.20496 10.0508 0.998645 9.00001 1.00001C7.94924 0.998667 6.90856 1.20499 5.93778 1.60711C4.967 2.00924 4.08525 2.59924 3.34321 3.34321C2.59924 4.08525 2.00924 4.967 1.60711 5.93778C1.20499 6.90856 0.998667 7.94924 1.00001 9.00001C0.998645 10.0508 1.20496 11.0915 1.60708 12.0622C2.00921 13.033 2.59922 13.9148 3.34321 14.6568C4.08525 15.4008 4.967 15.9908 5.93778 16.3929C6.90856 16.795 7.94924 17.0013 9.00001 17Z" stroke="#FE5F00" strokeWidth="1.5" strokeLinejoin="round"/>
<path d="M5.80001 9.0001L8.20001 11.4001L13 6.6001" stroke="#FE5F00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>}
        </div>
    )
}