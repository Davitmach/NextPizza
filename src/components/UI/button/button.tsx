'use client'
import { IButton } from "@/types/UI/button/button";
import { ButtonType } from "@/types/UI/button/buttonType";
import {Roboto}from "next/font/google";
import { useRouter } from "next/navigation";
import Cookie from 'js-cookie';
import { useEffect,useState } from "react";
//  Типы кнопок
const ButtonStyleConfig: Record<ButtonType, any> = {
  gray: {
    small:"text-gray-dark text-[14px] font-[500] py-[8px] px-[16px] rounded-[20px] bg-gray-bg hover:text-black duration-[.4s]  xs:px-[13px]",
    medium:" text-gray-dark text-[14px] font-[500] py-[8px] px-[20px] rounded-[20px] bg-gray-bg hover:text-black duration-[.4s] xs:px-[16px]",
    big:"text-gray-dark text-[14px] font-[500] py-[11px] w-[120px] rounded-[20px] bg-gray-bg hover:text-black duration-[.4s] xs:w-[100px] xs:py-[6px]",
  },
  orange: {
    small:"text-white text-[14px] font-[500] py-[8px] px-[16px] rounded-[20px] bg-orange ",
    medium:" text-white text-[16px] font-[500] py-[8px] px-[20px] rounded-[20px] bg-orange ",
    big:"text-white text-[16px] font-[500] py-[11px] w-[120px] rounded-[20px] bg-orange",
  },
  lightOrange: {
    small:"text-orange-text_dark text-[16px] font-[500] py-[8px] px-[16px] rounded-[22px] bg-orange-light duration-[.4s] hover:bg-orange-hover_light ",
    medium:"text-orange-text_dark text-[16px] font-[500] py-[10px] px-[20px] rounded-[22px] bg-orange-light duration-[.4s] hover:bg-orange-hover_light xs:px-[15px] xs:py-[8px]",
    big:"text-orange-text_dark text-[16px] font-[500] py-[11px] w-[120px] rounded-[22px] bg-orange-light duration-[.4s] hover:bg-orange-hover_light xs:w-[100px] xs:py-[8px]",
  },
};


export const roboto = Roboto({
    weight:['500'],
    subsets:['cyrillic']
  })
export const Button = (props: IButton) => {
  type SupportedLang = 'en' | 'am' | 'ru'; //  разрешенные языки
    

  const [Lang, setLang] = useState<SupportedLang>('am');
 
  useEffect(() => {
    // проверяем если в куках есть разрешенные языки установить их
    const cookieLang = Cookie.get('lang')?.trim() as SupportedLang | undefined;
    if (cookieLang && ['en', 'am', 'ru'].includes(cookieLang)) {
      setLang(cookieLang);
    }
  }, []); 



    const {push} = useRouter();
  const Type = props.type; // Тип кнопки
  const Func = props.func; // фукнция кнопки
  const Text = props.text; // текст кнопки
  const Link = props.link; // ссылка кнопки
  const Size = props.size; // размер кнопки

  return <button onClick={()=> {
    Link && push(Link)
    Func && Func()
  }} className={`${ButtonStyleConfig[Type][Size]} ${roboto.className}`}>{Text[Lang]}</button>;
};
