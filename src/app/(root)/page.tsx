'use client'

import { Logo } from "@/components/shared/logo/logo";
import { Button } from "@/components/UI/button/button";
import { Header_input, Input, Price_input } from "@/components/UI/input/input";
import { Select } from "@/components/UI/select/select";
import { useCallback, useEffect, useRef, useState } from "react";
import { Notifications } from "@/components/shared/notification/notification";

import Cookie from 'js-cookie'
import { cartService } from "@/service/cartService";
import { Toggle } from "@/components/UI/toggle/toggle";
import { PizzaImg } from "@/components/UI/pizzaImg/pizzaImg";

import { useRouter } from "next/navigation";
import { userService } from "@/service/userService";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const query = useQueryClient()
  const {status} =  useSession()
const [active,setActive] = useState<string | null>(null);
const {push,refresh} = useRouter()
 const qaq = useCallback(()=> {
push('/product/8')

 },[])
 useEffect(()=> {
console.log(status);

 },[status])
 const qaq2 = useCallback(()=> {
  if(status == 'unauthenticated' || 'authenticated') {
  userService.Logout(status,query)
  }
   },[])
  return (
    <>
<Logo/>
<Header_input/>
<Button variant='cart' status={false} size="default" ></Button>

<Button variant='orange' status={false} size="default" func={qaq}>добавить</Button>
<Button variant='orange' status={false} size="default" func={qaq2}>ВВыйти</Button>
<Button variant='user' size="default" status={false}/>

<Notifications/>
    </>
  );
}
