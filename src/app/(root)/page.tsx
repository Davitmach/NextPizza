'use client';

import { AddressInput } from "@/components/shared/addressInput/input";
import { CategoryBox } from "@/components/shared/category/category";
import { Notifications } from "@/components/shared/notification/notification";

import { StoriesBox } from "@/components/shared/stories/stories";

import { BigContainer } from "@/components/UI/container/container";
import { Select } from "@/components/UI/select/select";
import { Title } from "@/components/UI/title/title";
import { cartService } from "@/service/cartService";
import { paymentService } from "@/service/paymentService";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
const Buy  = useCallback(()=> {
cartService.clearCart()
},[])
  
  return (
    <>
  
      <BigContainer className="flex flex-col gap-3 overflow-hidden" parentClassName="shadow-lg"> 
        <Title>Все пиццы</Title>
        <div className="w-full flex items-center justify-between xs:flex-col xs:items-start xs:gap-4">
          <CategoryBox type="server"/>
          <Select/>
        </div> 
      </BigContainer>

   

      <BigContainer>
        <StoriesBox/>
      </BigContainer>
<button onClick={Buy}>get</button>


    </>
  );
}
