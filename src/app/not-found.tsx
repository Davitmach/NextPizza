'use client';
import { Header } from "@/components/shared/header/header";
import { InfoBlock } from "@/components/shared/infoBlock/infoBlock";
export default function NotFound() {


    return (
      <>
      <Header/>
       <InfoBlock title="Страница не найдена" description="Проверьте корректность введённого адреса или повторите попытку позже" img="/svg/notFound.svg"/>
      </>
    );
  }
  
