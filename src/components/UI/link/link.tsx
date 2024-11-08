'use client'
import { ILink } from "@/types/UI/link/link"
import { LinkType } from "@/types/UI/link/linkType";
import Link  from "next/link"
import Cookie from 'js-cookie'
import { useState,useEffect } from "react";
//  Типы ссылок
const LinkStyleConfig: Record<LinkType, string> = {
    active: 'text-orange font-[600] text-[14px] ',
    disable: 'text-black font-[600] text-[14px] duration-[.4s] hover:text-orange',
    none: 'text-black font-[600] text-[14px] duration-[.4s] hover:text-orange'
  };
export const LinkBtn = (props:ILink)=> {
  type SupportedLang = 'en' | 'am' | 'ru'; //  разрешенные языки
    

 const [Lang, setLang] = useState<SupportedLang>('am');

 useEffect(() => {
   // проверяем если в куках есть разрешенные языки установить их
   const cookieLang = Cookie.get('lang')?.trim() as SupportedLang | undefined;
   if (cookieLang && ['en', 'am', 'ru'].includes(cookieLang)) {
     setLang(cookieLang);
   }
 }, []); 
  
    
    const Func = props.func // фукнция ссылки
    const LinkUrl = props.link // ссылка
    const Text = props.text // текст ссылки
    const Status = props.status // состояние кнопки 
    return(
       <>
     <Link  className={!Status ? LinkStyleConfig.none : LinkStyleConfig[Status]} onClick={()=> {
        Func && Func()
     }} href={`${LinkUrl}`}>{Text[Lang]}</Link>
       </> 
    )
}