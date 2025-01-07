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
    
})
    },[])

useEffect(()=> {
    async function FetchData() {
        await cartService.getCartItem(1).then((e)=> {
            if(e.length == 0) setData('empty');
            if(e.length > 0) setData('has')
            
        })
    }
    FetchData();
},[])

    return(
        <div className={`fixed left-0 top-0  w-full h-[100vh] bg-gray-background  `}>
            {data == 'empty' ?<EmptyCartPage/> : data == 'has' ? <CartItemsPage/> : '' }
    
    </div>
    )
}