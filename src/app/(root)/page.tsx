'use client'
import { CategoryBox } from "@/components/shared/category/category";
import { Logo } from "@/components/shared/logo/logo";
import { Button } from "@/components/UI/button/button";
import { Header_input, Input, Price_input } from "@/components/UI/input/input";
import { Select } from "@/components/UI/select/select";
import { useCallback, useEffect, useRef } from "react";
import { Notifications } from "@/components/shared/notification/notification";
import { useNotification } from "@/context/notification";
import { useSession,signOut } from "next-auth/react";
import { userService } from "@/service/userService";
import { useQueryClient } from "@tanstack/react-query";
import Cookie from 'js-cookie'
import { cartService } from "@/service/cartService";
export default function Home() {
const query = useQueryClient();
const {showNotification} = useNotification()
const {status} = useSession()
const Func = useCallback(()=> {
cartService.addCartItem(9,1,1,[3])
showNotification('Вы вышли из системы','info')
userService.GetId().then((e)=> {
  console.log(e);
  
});
},[])
const Func2 = useCallback(()=> {


  showNotification('Вы вышли из системы','info')
  userService.Logout(status,query)
  },[])


 
 
  return (
    <>
<Logo/>
<Header_input/>
<Button variant='orange' status={false} size="default" func={Func2}>выйти</Button>
<Button variant='orange' status={false} size="default" func={Func}>getid</Button>

<Button variant='user' size='default' status={false}/>
<Notifications/>
    </>
  );
}
