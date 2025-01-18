'use client'

import { Button } from "@/components/UI/button/button";
import { useCallback, useEffect, useRef, useState } from "react";
import { Notifications } from "@/components/shared/notification/notification";
import { useRouter } from "next/navigation";
import { userService } from "@/service/userService";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import { ProductCart} from "@/components/UI/productCart/productCart";
import { productService } from "@/service/productService";
import { StoriesBox } from "@/components/shared/stories/stories";

export default function Home() {
  const query = useQueryClient()
  const {status} =  useSession()


const {push,refresh} = useRouter()
 const qaq = useCallback(()=> {
productService.addProduct('Чоризо фреш','Чоризо фреш',35,'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',392,1,[{id:1},{id:7},{id:13},{id:9},{id:3},])
 },[])

 const qaq2 = useCallback(() => {
  if (status === 'unauthenticated' || status === 'authenticated') {
    userService.Logout(status, query);
  }
}, []);

  return (
    <>

<StoriesBox/>
<Button variant='orange' status={false} size="default" func={qaq}>добавить</Button>
<Button variant='orange' status={false} size="default" func={qaq2}>Выйти</Button>


<div className="w-full grid grid-cols-[repeat(auto-fill,285px)] gap-[50px]"><ProductCart cartQuantity={2} type={2} size={3} inCart={true} name="qaq" description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок" price={34} productId={8}  img={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}/>
<ProductCart cartQuantity={2} type={2} size={3} inCart={true} name="qaq" description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок" price={34} productId={8} img={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}/>
<ProductCart cartQuantity={2} type={2} size={3} inCart={true} name="qaq" description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок" price={34} productId={8} img={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}/>
<ProductCart cartQuantity={2} type={2} size={3} inCart={true} name="qaq" description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок" price={34} productId={8} img={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}/>
<ProductCart cartQuantity={2} type={2} size={3} inCart={true} name="qaq" description="Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок" price={34} productId={8} img={'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp'}/>
</div>

<Notifications/>
    </>
  );
}
