'use client'
import { CategoryBox } from "@/components/shared/category/category";
import { Notifications } from "@/components/shared/notification/notification";
import PayPalButton from "@/components/shared/paypal/paypal";

import { StoriesBox } from "@/components/shared/stories/stories";

import { BigContainer } from "@/components/UI/container/container";
import { Select } from "@/components/UI/select/select";
import { Title } from "@/components/UI/title/title";
import { useCallback, useEffect, useState } from "react";
import {Button} from '@/components/UI/button/button'
import axios from "axios";
export default function Home() {
const [data,setData] = useState<any>();


const qaq = useCallback(async()=> {
const data = await axios.get('https://nodejs-production-b751.up.railway.app/check',{
  withCredentials:true
})
setData(JSON.stringify(data))
},[])

  return (
    <>

<BigContainer className="flex flex-col gap-3  overflow-hidden " parentClassName="shadow-lg"> 
  <Title>Все пиццы</Title>
  <div className="w-full flex items-center justify-between xs:flex-col xs:items-start xs:gap-4">
    <CategoryBox type='server'/>
    <Select/>
   </div> 
 </BigContainer>

  <BigContainer>
  <StoriesBox/>
</BigContainer>

<Button variant='orangeBorder' status={false} size="default" func={qaq}>qaq</Button>
{data}
<Notifications/>
    </>
  );
}
