'use client';

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/UI/button/button"
import Style from './cart.module.scss';
import { useRouter } from "next/navigation";
export const EmptyCartPage = ()=> {
    const ref = useRef<HTMLDivElement>(null);
    const {back} = useRouter();
    const [disable,setDisable] = useState(false);
    const Back = useCallback(()=> {
setDisable(true)
ref.current?.addEventListener('animationend',()=> {
    back()
    
})
    },[])

    return(

        <div ref={ref} className={`${Style.cart} flex flex-col justify-center items-center ${disable ==true && Style.disable}`}>
             <div className={`Empty flex flex-col justify-center items-center `}>
                       <Image src={'/emptyBox.png'} alt="EmptyBox" width={120} height={120} className="mx-auto"/>
                       <div className="Title text-center"><h1 className="text-black-label font-[600] text-[22px]">Корзина пустая</h1></div>
                <div className="Description text-center"><p className="font-[400] text-[16px] text-[#a6a6a6] mt-[6px]">Добавьте хотя бы одну пиццу, чтобы совершить заказ</p></div>
                
                   </div>
            <Button func={Back} variant='back' size="default" status={false} />
        </div>
    
    )
}