'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/UI/button/button"
import Style from './cart.module.scss';
import { useRouter } from "next/navigation";
import { EmptyCartPage } from "../emptyCart/emptyCart";
import { CartItemsPage } from "../cartItemsPage/cartItems";
import { cartService } from "@/service/cartService";
export const CartPage = ()=> {
    const ref = useRef<HTMLDivElement>(null);
    const [data,setData] = useState<'empty' | 'has'>();

    const {back} = useRouter();
    const [disable,setDisable] = useState(false);
    const Back = useCallback(()=> {
setDisable(true)
ref.current?.addEventListener('animationend',()=> {
    back()
     document.body.style.overflow = 'auto'
    
})
    },[])

useEffect(()=> {
    async function FetchData() {
        await cartService.getCartItem().then((e)=> {
            if(e.length == 0) setData('empty');
            if(e.length > 0) setData('has')   
        })
    }
    FetchData();
    document.body.style.overflow = 'hidden'
},[])

    return(
        <div onClick={(e) => {
            const Div = e.target as HTMLElement;
            if (Div.classList.contains("Cart_page")) {
              back()
              
            }
          }} className={`Cart_page absolute left-0 top-0 z-50 w-full h-[100vh] bg-gray-background  `}>
            {data == 'empty' ?<EmptyCartPage/> : data == 'has' ? <CartItemsPage/> : '' }
    
    </div>
    )
}