'use client'

import { Logo } from "@/components/shared/logo/logo";
import { Button } from "@/components/UI/button/button";
import { Header_input, Input, Price_input } from "@/components/UI/input/input";

import { useCallback, useEffect, useRef, useState } from "react";
import { Notifications } from "@/components/shared/notification/notification";
import { useRouter } from "next/navigation";
import { userService } from "@/service/userService";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import { ProductCart, ProductCartLoading } from "@/components/UI/productCart/productCart";
import { productService } from "@/service/productService";
import { categoryService } from "@/service/categoryService";

export default function Home() {
  const query = useQueryClient()
  const {status} =  useSession()


const {push,refresh} = useRouter()
 const qaq = useCallback(()=> {
push('/qaq')

 },[push])

 const qaq2 = useCallback(() => {
  if (status === 'unauthenticated' || status === 'authenticated') {
    userService.Logout(status, query);
  }
}, [status, query]);

  return (
    <>
<Logo/>
<Header_input/>
<Button variant='cart' status={false} size="default" ></Button>

<Button variant='orange' status={false} size="default" func={qaq}>добавить</Button>
<Button variant='orange' status={false} size="default" func={qaq2}>Выйти</Button>
<Button variant='user' size="default" status={false}/>

<div className="w-full grid grid-cols-[repeat(3,285px)] gap-[50px]"><ProductCart cartQuantity={2} type={2} size={3} inCart={true} name="qaq" description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок" price={34} productId={8} img={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}/>
<ProductCart cartQuantity={2} type={2} size={3} inCart={true} name="qaq" description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок" price={34} productId={8} img={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}/>
<ProductCart cartQuantity={2} type={2} size={3} inCart={true} name="qaq" description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок" price={34} productId={8} img={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}/>
<ProductCart cartQuantity={2} type={2} size={3} inCart={true} name="qaq" description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок" price={34} productId={8} img={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}/>
<ProductCart cartQuantity={2} type={2} size={3} inCart={true} name="qaq" description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок" price={34} productId={8} img={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}/>
</div>

<Notifications/>
    </>
  );
}
