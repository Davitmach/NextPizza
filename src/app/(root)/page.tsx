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


export default function Home() {
const {data} =useSession();
useEffect(()=> {
console.log(data,'session');
},[data])
const Func = useCallback(()=> {
console.log('ВЫШЕЛ');

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
