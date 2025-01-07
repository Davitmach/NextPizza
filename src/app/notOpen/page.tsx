'use client';
import { Button } from "@/components/UI/button/button";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/shared/header/header";
import { InfoBlock } from "@/components/shared/infoBlock/infoBlock";
export default function Page() {
const {refresh} = useRouter();
const Refresh = useCallback(()=> {
refresh();


},[])

    return (
      <>
       <Header/>
       <InfoBlock title="Доступ запрещён" description="Данную страницу могут просматривать только авторизованные пользователи" img="/svg/notOpen.svg"/>
      </>
    );
  }
  
