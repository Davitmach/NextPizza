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


export default function Home() {
const {showNotification} = useNotification()
const {status} = useSession()
const Func = useCallback(()=> {
 
userService.Logout(status)
showNotification('Вы вышли из системы','info')
signOut()
},[])
  return (
    <>
<Logo/>
<Button variant='gray' status={false} size="default" func={Func}>Выйти</Button>
<Button variant='user' status={false} size="default"/>

<Notifications/>
    </>
  );
}
