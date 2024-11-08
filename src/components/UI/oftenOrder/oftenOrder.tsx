'use client'
import { IOftenOrder } from "@/types/UI/oftenOrder/oftenOrder"
import Image from "next/image"
import {Roboto}from "next/font/google";
import { LangPriceConfig } from "@/configs/oftenOrder";
import  Cookie  from "js-cookie";
import { useState,useEffect } from "react";
export const roboto = Roboto({
    weight:['500'],
    subsets:['cyrillic']
  }) 


export const OftenOrder = (props:IOftenOrder)=> {
    type SupportedLang = 'en' | 'am' | 'ru'; //  разрешенные языки
    

 const [Lang, setLang] = useState<SupportedLang>('am');

 useEffect(() => {
   // проверяем если в куках есть разрешенные языки установить их
   const cookieLang = Cookie.get('lang')?.trim() as SupportedLang | undefined;
   if (cookieLang && ['en', 'am', 'ru'].includes(cookieLang)) {
     setLang(cookieLang);
   }
 }, []); 



    const Info = props.info // информация блока
    const Type = props.type // тип блока
    let Px; //  размеры блока



    if(Type !== 'auto') {  // если тип не авто то в Px вписать размер блока
        Px = Type.manual.px
    } 
  
    return(
        <>
        
        <div className={ `flex justify-between items-center rounded-[12px] p-4 cursor-pointer shadow-xl duration-500 hover:shadow-md`}
        style={{width:`${Px}px`}}
        >
            <div><Image width={80} height={80} src={Info.img && Info.img} alt="Pepsi"/></div>
            <div>
                <div><h2 className={`text-sm ${roboto.className}`}>{ Info.name[Lang]}</h2></div>
                <div><h1 className={`text-base ${roboto.className}`}>{LangPriceConfig[Lang]} {Info.price} AMD</h1></div>
            </div>
        </div>
        </>
    )
}