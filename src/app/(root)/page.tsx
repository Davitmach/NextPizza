'use client';

import { AddressInput } from "@/components/shared/addressInput/input";
import { CategoryBox } from "@/components/shared/category/category";
import { FilterBar } from "@/components/shared/filterBar/filterBar";
import { Notifications } from "@/components/shared/notification/notification";

import { StoriesBox } from "@/components/shared/stories/stories";

import { BigContainer } from "@/components/UI/container/container";
import { ProductCart } from "@/components/UI/productCart/productCart";
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

      <BigContainer className="flex gap-[40px]">
     <FilterBar/>
     <div className="grid grid-cols-3 grid-rows-4 gap-3 w-full">
     <ProductCart description="dadea" img="https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp" inCart={false} name="swsw" price={33} productId={3} cartItemId={2} cartQuantity={2} size={2} type={2}/>
     <ProductCart description="dadea" img="https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp" inCart={false} name="swsw" price={33} productId={3} cartItemId={2} cartQuantity={2} size={2} type={2}/>
     <ProductCart description="dadea" img="https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp" inCart={false} name="swsw" price={33} productId={3} cartItemId={2} cartQuantity={2} size={2} type={2}/>
     <ProductCart description="dadea" img="https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp" inCart={false} name="swsw" price={33} productId={3} cartItemId={2} cartQuantity={2} size={2} type={2}/>
     <ProductCart description="dadea" img="https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp" inCart={false} name="swsw" price={33} productId={3} cartItemId={2} cartQuantity={2} size={2} type={2}/>
     <ProductCart description="dadea" img="https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp" inCart={false} name="swsw" price={33} productId={3} cartItemId={2} cartQuantity={2} size={2} type={2}/>
     </div>
      </BigContainer>


    </>
  );
}
